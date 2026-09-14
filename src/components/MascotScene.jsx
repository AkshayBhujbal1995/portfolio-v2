import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

function Eye({ x }) {
  const pupil = useRef(null);

  useFrame((state) => {
    if (!pupil.current) return;
    const targetX = clamp(state.pointer.x * 0.045, -0.05, 0.05);
    const targetY = clamp(state.pointer.y * 0.035, -0.04, 0.04);
    pupil.current.position.x += (x + targetX - pupil.current.position.x) * 0.15;
    pupil.current.position.y += (targetY - pupil.current.position.y) * 0.15;
  });

  return (
    <group>
      <mesh position={[x, 0, 0.42]}>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshStandardMaterial color="#f5fff9" roughness={0.3} />
      </mesh>
      <mesh ref={pupil} position={[x, 0, 0.52]}>
        <sphereGeometry args={[0.075, 12, 12]} />
        <meshStandardMaterial color="#0a0a0c" />
      </mesh>
    </group>
  );
}

function Agent() {
  const head = useRef(null);
  const antennaTip = useRef(null);
  const blink = useRef(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (head.current) {
      head.current.position.y = Math.sin(t * 1.4) * 0.06;
      head.current.rotation.y += (state.pointer.x * 0.25 - head.current.rotation.y) * 0.06;
      head.current.rotation.x += (-state.pointer.y * 0.12 - head.current.rotation.x) * 0.06;
    }
    if (antennaTip.current) {
      const pulse = 0.75 + Math.sin(t * 3) * 0.25;
      antennaTip.current.material.emissiveIntensity = pulse;
    }
    if (blink.current) {
      const cycle = t % 3.2;
      const isBlinking = cycle > 3.05;
      blink.current.scale.y = isBlinking ? 0.08 : 1;
    }
  });

  return (
    <group ref={head}>
      <mesh>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshStandardMaterial color="#12141a" roughness={0.35} metalness={0.2} />
      </mesh>
      <mesh scale={[1.01, 1.01, 1.01]}>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshBasicMaterial color="#67e8f9" wireframe transparent opacity={0.06} />
      </mesh>

      <group ref={blink}>
        <Eye x={-0.32} />
        <Eye x={0.32} />
      </group>

      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.35, 8]} />
        <meshStandardMaterial color="#3a3a42" />
      </mesh>
      <mesh ref={antennaTip} position={[0, 1.05, 0]}>
        <sphereGeometry args={[0.09, 12, 12]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={1} />
      </mesh>
    </group>
  );
}

export default function MascotScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.4], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[2, 2, 3]} intensity={1.2} color="#67e8f9" />
      <pointLight position={[-2, -1, 2]} intensity={0.6} color="#fbbf24" />
      <Agent />
    </Canvas>
  );
}
