import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 22;

function useNetworkGeometry() {
  return useMemo(() => {
    const nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const radius = 2.4 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      nodes.push(
        new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta) * 0.7,
          radius * Math.cos(phi)
        )
      );
    }

    const edges = [];
    for (let i = 0; i < nodes.length; i++) {
      let closest = [];
      for (let j = 0; j < nodes.length; j++) {
        if (i === j) continue;
        closest.push([j, nodes[i].distanceTo(nodes[j])]);
      }
      closest.sort((a, b) => a[1] - b[1]);
      closest.slice(0, 2).forEach(([j]) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (!edges.some((e) => e.key === key)) {
          edges.push({ key, a: nodes[i], b: nodes[j] });
        }
      });
    }
    return { nodes, edges };
  }, []);
}

function Network() {
  const group = useRef(null);
  const spin = useRef(0);
  const { nodes, edges } = useNetworkGeometry();

  const lineGeometries = useMemo(
    () =>
      edges.map(({ a, b }) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([a, b]);
        return geometry;
      }),
    [edges]
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    spin.current += delta * 0.12;

    const targetY = spin.current + state.pointer.x * 0.45;
    const targetX = Math.sin(state.clock.elapsedTime * 0.15) * 0.15 - state.pointer.y * 0.35;

    group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(delta * 2.5, 1);
    group.current.rotation.x += (targetX - group.current.rotation.x) * Math.min(delta * 2.5, 1);
  });

  return (
    <group ref={group}>
      {lineGeometries.map((geometry, i) => (
        <line key={edges[i].key} geometry={geometry}>
          <lineBasicMaterial color="#67e8f9" transparent opacity={0.18} />
        </line>
      ))}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[i % 5 === 0 ? 0.07 : 0.045, 16, 16]} />
          <meshBasicMaterial color={i % 5 === 0 ? "#fbbf24" : "#67e8f9"} />
        </mesh>
      ))}
    </group>
  );
}

export default function AgentNetwork3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <Network />
    </Canvas>
  );
}
