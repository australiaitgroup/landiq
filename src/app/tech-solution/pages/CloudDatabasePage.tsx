"use client";

const zones = [
  {
    name: "Edge",
    subtitle: "Public — DNS, CDN, WAF",
    items: [
      { n: "CloudFront / Front Door", s: "CDN + TLS termination" },
      { n: "Route 53 / Azure DNS", s: "Custom domain" },
      { n: "WAF + rate limiting", s: "Basic attack surface" },
    ],
    tone: "surface",
  },
  {
    name: "Compute",
    subtitle: "Private VPC / vNet — stateless services",
    items: [
      { n: "NestJS API", s: "ECS Fargate / App Service" },
      { n: "BullMQ Workers", s: "Async job processors" },
      { n: "Prefect agents", s: "ETL + schedule runners" },
    ],
    tone: "primary",
  },
  {
    name: "Data",
    subtitle: "Isolated subnet — private only",
    items: [
      { n: "PostgreSQL 16", s: "RDS Multi-AZ / Flexible Server" },
      { n: "Redis 7", s: "ElastiCache / Azure Cache" },
      { n: "S3 / Blob Storage", s: "Documents, reports, Bronze" },
    ],
    tone: "accent",
  },
  {
    name: "Security / Ops",
    subtitle: "Cross-cutting",
    items: [
      { n: "Secrets Manager / Key Vault", s: "Credentials & API keys" },
      { n: "CloudWatch / Azure Monitor", s: "Logs + metrics + alerts" },
      { n: "Automated snapshots + PITR", s: "7-day point-in-time recovery" },
    ],
    tone: "surface",
  },
];

const dbRows = [
  {
    comp: "PostgreSQL 16",
    cfg: "db.m6g.large (prod) · Multi-AZ · encrypted at rest",
    note: "Primary OLTP + spatial + vector store",
  },
  {
    comp: "PostGIS extension",
    cfg: "GiST / SP-GiST indexes · EPSG:7856",
    note: "Spatial JOINs, reprojection, topology ops",
  },
  {
    comp: "pgvector extension",
    cfg: "ivfflat · 1536-d · cosine similarity",
    note: "RAG embeddings — sub-100ms nearest-neighbour",
  },
  {
    comp: "Redis 7",
    cfg: "cache.m6g.large · AOF persistence",
    note: "BullMQ queues + session cache",
  },
  {
    comp: "Object storage (S3 / Blob)",
    cfg: "3 buckets · versioning · SSE-KMS · lifecycle to IA",
    note: "Raw PDFs, generated reports, Bronze archive",
  },
];

const toneClass = (tone: string) => {
  switch (tone) {
    case "primary":
      return {
        card: "bg-[#134A32] border-[#134A32]",
        header: "text-[#C4952A]",
        sub: "text-white/60",
        item: "bg-white/10 border-white/10",
        name: "text-white",
        stack: "text-white/55",
      };
    case "accent":
      return {
        card: "bg-[#FFF8E1] border-[#C4952A]/40",
        header: "text-[#C4952A]",
        sub: "text-[#85979B]",
        item: "bg-white border-[#C4952A]/25",
        name: "text-[#134A32]",
        stack: "text-[#85979B]",
      };
    default:
      return {
        card: "bg-[#E8F0EC] border-[#134A32]/15",
        header: "text-[#134A32]",
        sub: "text-[#85979B]",
        item: "bg-white border-[#134A32]/10",
        name: "text-[#134A32]",
        stack: "text-[#85979B]",
      };
  }
};

export function CloudDatabasePage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Technical Solution · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">04</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Cloud Deployment & Database
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-4" />

      <h2 className="font-serif text-[20px] leading-[1.2] text-[#134A32] max-w-[440px]">
        Deployed into Mountain Property&apos;s own cloud — four zones,
        one database foundation.
      </h2>

      <p className="font-body text-[8.5px] text-[#85979B] leading-[1.55] mt-2 max-w-[470px]">
        Every service runs inside Mountain Property&apos;s AWS or Azure
        account, AU region. Shown here with AWS service names; Azure
        equivalents apply one-for-one if that&apos;s your preference.
      </p>

      {/* Cloud zones 2x2 */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        {zones.map((z) => {
          const t = toneClass(z.tone);
          return (
            <div
              key={z.name}
              className={`rounded-md border p-2 ${t.card}`}
            >
              <div className="flex items-baseline justify-between mb-1.5">
                <p
                  className={`font-sans text-[7.5px] uppercase tracking-[0.12em] font-semibold ${t.header}`}
                >
                  {z.name}
                </p>
                <p className={`font-sans text-[6.5px] ${t.sub}`}>
                  {z.subtitle}
                </p>
              </div>
              <div className="space-y-1">
                {z.items.map((it) => (
                  <div
                    key={it.n}
                    className={`rounded border px-2 py-1 ${t.item}`}
                  >
                    <p
                      className={`font-sans text-[7.5px] font-semibold leading-tight ${t.name}`}
                    >
                      {it.n}
                    </p>
                    <p
                      className={`font-sans text-[6.5px] leading-tight mt-0.5 ${t.stack}`}
                    >
                      {it.s}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Database detail */}
      <div className="mt-3 rounded-lg border border-[#E9EAE5] overflow-hidden">
        <div className="px-3.5 py-1.5 bg-[#F5F6F3] border-b border-[#E9EAE5] flex items-baseline justify-between">
          <p className="font-sans text-[7.5px] uppercase tracking-[0.12em] text-[#134A32] font-semibold">
            Database foundation
          </p>
          <p className="font-sans text-[6.5px] text-[#85979B]">
            Encrypted at rest & in transit · AU region only
          </p>
        </div>
        <div className="grid grid-cols-[180px_1fr_1fr] px-3.5 py-1.5 bg-[#F9FAF8] border-b border-[#E9EAE5]">
          {["Component", "Configuration", "Role"].map((h) => (
            <span
              key={h}
              className="font-sans text-[6.5px] font-semibold uppercase tracking-[0.08em] text-[#85979B]"
            >
              {h}
            </span>
          ))}
        </div>
        {dbRows.map((r) => (
          <div
            key={r.comp}
            className="grid grid-cols-[180px_1fr_1fr] px-3.5 py-1.5 border-t border-[#E9EAE5] items-center first:border-t-0"
          >
            <span className="font-sans text-[8px] text-[#134A32] font-semibold leading-tight">
              {r.comp}
            </span>
            <span className="font-sans text-[7px] text-[#85979B] leading-tight">
              {r.cfg}
            </span>
            <span className="font-body text-[7.5px] text-[#134A32] leading-tight">
              {r.note}
            </span>
          </div>
        ))}
      </div>

      {/* Guarantees strip */}
      <div className="mt-auto pt-3 border-t border-[#E9EAE5] grid grid-cols-5 gap-2">
        {[
          { v: "AU region", l: "Sydney / AU East only" },
          { v: "Multi-AZ", l: "Auto-failover" },
          { v: "Encrypted", l: "At rest + in transit" },
          { v: "PITR 7d", l: "Point-in-time recovery" },
          { v: "IaC", l: "Terraform — reproducible" },
        ].map((s) => (
          <div
            key={s.l}
            className="rounded bg-[#F9FAF8] border border-[#E9EAE5] px-2 py-1"
          >
            <p className="font-serif text-[11px] text-[#134A32] leading-none">
              {s.v}
            </p>
            <p className="font-sans text-[6.5px] uppercase tracking-[0.05em] text-[#85979B] mt-0.5 leading-tight">
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
