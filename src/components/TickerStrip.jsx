const ITEMS = [
  "LIVEKIT",
  "MCP",
  "LANGGRAPH",
  "LANGCHAIN",
  "RAG",
  "FASTAPI",
  "DOCKER",
  "PYTORCH",
  "REACT",
  "POSTGRESQL",
];

export default function TickerStrip() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
      <div className="flex w-max animate-[ticker_28s_linear_infinite] gap-10">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.25em] text-white/30"
          >
            {item}
            <span className="text-cyan-300/50">•</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
