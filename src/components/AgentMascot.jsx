import { Suspense, lazy } from "react";

const MascotScene = lazy(() => import("./MascotScene"));

export default function AgentMascot() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-30 hidden h-32 w-32 sm:block md:bottom-8 md:right-8 md:h-36 md:w-36">
      <Suspense fallback={null}>
        <MascotScene />
      </Suspense>
    </div>
  );
}
