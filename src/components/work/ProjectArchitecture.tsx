"use client";

type ArchitectureNode = {
  id: string;
  label: string;
  detail: string;
  x: number;
  y: number;
  kind?: "source" | "compute" | "store" | "output";
};

type ArchitectureEdge = {
  from: string;
  to: string;
  bend?: number;
};

type Architecture = {
  accent: string;
  title: string;
  caption: string;
  metric: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
};

const ARCHITECTURES: Record<string, Architecture> = {
  rocathon: {
    accent: "#8b5cf6",
    title: "Hybrid retrieval",
    caption: "Lexical and semantic ranking converge into one result set.",
    metric: "10K+ profiles · +35% relevance",
    nodes: [
      { id: "profiles", label: "Creator data", detail: "profiles + metadata", x: 65, y: 72, kind: "source" },
      { id: "postgres", label: "PostgreSQL", detail: "structured filters", x: 210, y: 48, kind: "store" },
      { id: "vectors", label: "pgvector", detail: "HNSW index", x: 210, y: 130, kind: "store" },
      { id: "query", label: "Search query", detail: "intent + filters", x: 65, y: 222, kind: "source" },
      { id: "rerank", label: "Hybrid reranker", detail: "lexical × semantic", x: 350, y: 120, kind: "compute" },
      { id: "results", label: "Ranked creators", detail: "high-fit matches", x: 350, y: 238, kind: "output" },
    ],
    edges: [
      { from: "profiles", to: "postgres" }, { from: "profiles", to: "vectors", bend: 18 },
      { from: "query", to: "postgres", bend: -24 }, { from: "query", to: "vectors" },
      { from: "postgres", to: "rerank" }, { from: "vectors", to: "rerank" },
      { from: "rerank", to: "results" },
    ],
  },
  aries: {
    accent: "#06b6d4",
    title: "Streaming intelligence",
    caption: "Events become durable history and live KPIs in parallel.",
    metric: "10K+ events/sec · <100ms KPIs",
    nodes: [
      { id: "events", label: "Brand events", detail: "live sources", x: 62, y: 145, kind: "source" },
      { id: "kafka", label: "Kafka", detail: "event backbone", x: 180, y: 145, kind: "compute" },
      { id: "spark", label: "Spark", detail: "stream processing", x: 295, y: 145, kind: "compute" },
      { id: "minio", label: "MinIO", detail: "raw data lake", x: 365, y: 58, kind: "store" },
      { id: "postgres", label: "PostgreSQL", detail: "serving layer", x: 365, y: 228, kind: "store" },
      { id: "kpis", label: "Live KPIs", detail: "brand signals", x: 210, y: 270, kind: "output" },
    ],
    edges: [
      { from: "events", to: "kafka" }, { from: "kafka", to: "spark" },
      { from: "spark", to: "minio", bend: -22 }, { from: "spark", to: "postgres", bend: 22 },
      { from: "postgres", to: "kpis" },
    ],
  },
  vulcan: {
    accent: "#f97316",
    title: "Event-driven security",
    caption: "Queued scans isolate heavy analysis from request traffic.",
    metric: "5K+ jobs/day · 75% faster",
    nodes: [
      { id: "repo", label: "GitHub repo", detail: "scan request", x: 64, y: 72, kind: "source" },
      { id: "api", label: "AWS API", detail: "CDK infrastructure", x: 190, y: 72, kind: "compute" },
      { id: "queue", label: "SQS", detail: "durable queue", x: 190, y: 178, kind: "store" },
      { id: "worker", label: "Fargate", detail: "scanner workers", x: 325, y: 178, kind: "compute" },
      { id: "findings", label: "PostgreSQL", detail: "findings + status", x: 325, y: 272, kind: "store" },
      { id: "fix", label: "Remediation", detail: "actionable fixes", x: 64, y: 272, kind: "output" },
    ],
    edges: [
      { from: "repo", to: "api" }, { from: "api", to: "queue" },
      { from: "queue", to: "worker" }, { from: "worker", to: "findings" },
      { from: "findings", to: "fix", bend: 32 },
    ],
  },
  "foreign-whispers": {
    accent: "#ec4899",
    title: "AI media pipeline",
    caption: "CPU orchestration stays separate from GPU inference.",
    metric: "Speech → translation → synchronized video",
    nodes: [
      { id: "upload", label: "Video upload", detail: "source media", x: 52, y: 160, kind: "source" },
      { id: "api", label: "FastAPI", detail: "orchestrator", x: 150, y: 160, kind: "compute" },
      { id: "whisper", label: "Whisper", detail: "speech to text", x: 250, y: 68, kind: "compute" },
      { id: "translate", label: "Translation", detail: "language model", x: 250, y: 160, kind: "compute" },
      { id: "voice", label: "Voice synth", detail: "generated audio", x: 250, y: 252, kind: "compute" },
      { id: "ffmpeg", label: "FFmpeg", detail: "sync + remux", x: 365, y: 160, kind: "output" },
    ],
    edges: [
      { from: "upload", to: "api" }, { from: "api", to: "whisper", bend: -18 },
      { from: "whisper", to: "translate" }, { from: "translate", to: "voice" },
      { from: "voice", to: "ffmpeg", bend: -18 },
    ],
  },
  shivarkats: {
    accent: "#22c55e",
    title: "Intelligent hiring funnel",
    caption: "Resumes become structured, ranked candidate records.",
    metric: "60% less manual screening",
    nodes: [
      { id: "resume", label: "Resume", detail: "candidate upload", x: 64, y: 62, kind: "source" },
      { id: "aws", label: "AWS", detail: "cloud intake", x: 64, y: 170, kind: "compute" },
      { id: "parser", label: "Python parser", detail: "structured profile", x: 210, y: 100, kind: "compute" },
      { id: "ranker", label: "ML ranker", detail: "candidate score", x: 210, y: 224, kind: "compute" },
      { id: "mongo", label: "MongoDB", detail: "applicant records", x: 350, y: 100, kind: "store" },
      { id: "review", label: "Recruiter view", detail: "ranked shortlist", x: 350, y: 224, kind: "output" },
    ],
    edges: [
      { from: "resume", to: "aws" }, { from: "aws", to: "parser" },
      { from: "parser", to: "ranker" }, { from: "parser", to: "mongo" },
      { from: "ranker", to: "review" }, { from: "mongo", to: "review" },
    ],
  },
  mpc: {
    accent: "#eab308",
    title: "Closed-loop control",
    caption: "Every action feeds the next optimized control horizon.",
    metric: "Predict · optimize · act · observe",
    nodes: [
      { id: "target", label: "Target state", detail: "goal trajectory", x: 64, y: 75, kind: "source" },
      { id: "optimizer", label: "MPC optimizer", detail: "control horizon", x: 210, y: 75, kind: "compute" },
      { id: "control", label: "Control input", detail: "best action", x: 350, y: 75, kind: "compute" },
      { id: "robot", label: "Robot model", detail: "next state", x: 350, y: 230, kind: "output" },
      { id: "sensors", label: "State feedback", detail: "observed position", x: 210, y: 230, kind: "source" },
      { id: "error", label: "Error signal", detail: "target − state", x: 64, y: 230, kind: "compute" },
    ],
    edges: [
      { from: "target", to: "optimizer" }, { from: "optimizer", to: "control" },
      { from: "control", to: "robot" }, { from: "robot", to: "sensors" },
      { from: "sensors", to: "error" }, { from: "error", to: "optimizer", bend: -28 },
    ],
  },
  "ml-financial": {
    accent: "#3b82f6",
    title: "Forecasting workflow",
    caption: "Historical prices become validated forward signals.",
    metric: "ARIMA forecast · ~82% accuracy",
    nodes: [
      { id: "market", label: "Market data", detail: "AAPL history", x: 55, y: 166, kind: "source" },
      { id: "pandas", label: "Pandas", detail: "clean + resample", x: 155, y: 166, kind: "compute" },
      { id: "features", label: "Time series", detail: "trend + stationarity", x: 255, y: 92, kind: "compute" },
      { id: "arima", label: "ARIMA", detail: "fit + validate", x: 255, y: 238, kind: "compute" },
      { id: "forecast", label: "Forecast", detail: "future movement", x: 365, y: 92, kind: "output" },
      { id: "signal", label: "Trade signal", detail: "decision layer", x: 365, y: 238, kind: "output" },
    ],
    edges: [
      { from: "market", to: "pandas" }, { from: "pandas", to: "features", bend: -16 },
      { from: "pandas", to: "arima", bend: 16 }, { from: "features", to: "forecast" },
      { from: "arima", to: "signal" }, { from: "forecast", to: "signal" },
    ],
  },
  concierge: {
    accent: "#ef4444",
    title: "Serverless concierge",
    caption: "Conversation and recommendation work scale independently.",
    metric: "1K+ restaurants · async delivery",
    nodes: [
      { id: "user", label: "Diner", detail: "preferences", x: 55, y: 70, kind: "source" },
      { id: "lex", label: "Amazon Lex", detail: "conversation", x: 170, y: 70, kind: "compute" },
      { id: "lambda", label: "Lambda", detail: "request handler", x: 285, y: 70, kind: "compute" },
      { id: "sqs", label: "SQS", detail: "recommendation job", x: 285, y: 190, kind: "store" },
      { id: "search", label: "OpenSearch", detail: "restaurant index", x: 170, y: 255, kind: "store" },
      { id: "email", label: "SES email", detail: "curated results", x: 400, y: 255, kind: "output" },
    ],
    edges: [
      { from: "user", to: "lex" }, { from: "lex", to: "lambda" },
      { from: "lambda", to: "sqs" }, { from: "sqs", to: "search", bend: 18 },
      { from: "search", to: "email" },
    ],
  },
};

const NODE_WIDTH = 104;
const NODE_HEIGHT = 46;

function edgePath(from: ArchitectureNode, to: ArchitectureNode, bend = 0) {
  const startX = from.x + (to.x >= from.x ? NODE_WIDTH / 2 : -NODE_WIDTH / 2);
  const endX = to.x + (to.x >= from.x ? -NODE_WIDTH / 2 : NODE_WIDTH / 2);
  const midX = (startX + endX) / 2;
  const midY = (from.y + to.y) / 2 + bend;
  return `M ${startX} ${from.y} Q ${midX} ${midY} ${endX} ${to.y}`;
}

export function ProjectArchitecture({ projectId }: { projectId: string }) {
  const architecture = ARCHITECTURES[projectId] ?? ARCHITECTURES.rocathon;
  const nodes = new Map(architecture.nodes.map(node => [node.id, node]));
  const markerId = `architecture-arrow-${projectId}`;
  const gridId = `architecture-grid-${projectId}`;

  return (
    <div
      className="h-full min-h-[330px] rounded-[22px] overflow-hidden relative border border-white/10 text-white"
      style={{ background: "linear-gradient(145deg, #111318 0%, #181b22 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 0.7px, transparent 0.7px)",
          backgroundSize: "14px 14px",
          maskImage: "linear-gradient(to bottom, black, transparent 78%)",
        }}
      />

      <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-4 z-10">
        <div>
          <p className="text-[10px] text-white/40 mb-1">System map</p>
          <h4 className="text-base font-semibold tracking-tight">{architecture.title}</h4>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-white/45">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: architecture.accent }} />
          </span>
          live architecture
        </div>
      </div>

      <svg
        viewBox="0 0 455 330"
        className="absolute inset-x-0 top-14 w-full h-[calc(100%_-_7.5rem)]"
        role="img"
        aria-label={`${architecture.title}: ${architecture.caption}`}
      >
        <defs>
          <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
          </pattern>
          <marker id={markerId} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={architecture.accent} opacity="0.75" />
          </marker>
        </defs>
        <rect width="455" height="330" fill={`url(#${gridId})`} />

        {architecture.edges.map((edge, index) => {
          const from = nodes.get(edge.from);
          const to = nodes.get(edge.to);
          if (!from || !to) return null;
          return (
            <path
              key={`${edge.from}-${edge.to}-${index}`}
              d={edgePath(from, to, edge.bend)}
              fill="none"
              stroke={architecture.accent}
              strokeWidth="1.5"
              strokeOpacity="0.52"
              strokeDasharray="4 4"
              markerEnd={`url(#${markerId})`}
              className="architecture-flow"
            />
          );
        })}

        {architecture.nodes.map(node => {
          const isOutput = node.kind === "output";
          const isStore = node.kind === "store";
          return (
            <g key={node.id} transform={`translate(${node.x - NODE_WIDTH / 2} ${node.y - NODE_HEIGHT / 2})`}>
              <rect
                width={NODE_WIDTH}
                height={NODE_HEIGHT}
                rx="9"
                fill={isOutput ? architecture.accent : isStore ? `${architecture.accent}22` : "#20242c"}
                stroke={architecture.accent}
                strokeOpacity={isOutput ? "0.95" : "0.42"}
              />
              <circle cx="12" cy="13" r="3" fill={isOutput ? "#fff" : architecture.accent} />
              <text x="20" y="16" fill="#fff" fontSize="9.5" fontWeight="600">
                {node.label}
              </text>
              <text x="12" y="33" fill={isOutput ? "rgba(255,255,255,.76)" : "rgba(255,255,255,.42)"} fontSize="7.5">
                {node.detail}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="absolute bottom-0 left-0 right-0 px-5 py-4 border-t border-white/10 bg-black/15 backdrop-blur-sm">
        <p className="text-[10px] text-white/42 leading-relaxed mb-2">{architecture.caption}</p>
        <p className="text-xs font-medium" style={{ color: architecture.accent }}>{architecture.metric}</p>
      </div>
    </div>
  );
}
