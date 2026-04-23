"use client";

const columns = [
  {
    title: "AI Models",
    subtitle: "Pluggable — never locked to one vendor.",
    items: [
      {
        name: "Anthropic Claude (Sonnet / Opus)",
        note: "Primary — long-context reasoning, report generation",
      },
      {
        name: "OpenAI GPT-5",
        note: "Alternative — benchmark + fallback",
      },
      {
        name: "OpenAI text-embedding-3-small",
        note: "Default embeddings (1536-d) for pgvector",
      },
      {
        name: "Model router + cost ceilings",
        note: "Per-feature model config, hard $/month caps",
      },
      {
        name: "Evaluation harness",
        note: "Prompts benchmarked across models in CI",
      },
    ],
    invert: true,
  },
  {
    title: "Cloud Infrastructure",
    subtitle: "In Mountain Property's own account, AU region.",
    items: [
      {
        name: "AWS (Sydney) or Azure (AU East)",
        note: "Mountain Property's choice; IaC (Terraform) either way",
      },
      {
        name: "PostgreSQL 16 + PostGIS + pgvector",
        note: "Managed RDS / Azure Flexible Server",
      },
      {
        name: "S3 / Blob Storage",
        note: "Documents, generated reports, Bronze archive",
      },
      {
        name: "ElastiCache Redis / Azure Cache",
        note: "BullMQ queues + session cache",
      },
      {
        name: "Secrets Manager / Key Vault",
        note: "All credentials — nothing in env / source",
      },
      {
        name: "CloudFront / Front Door",
        note: "CDN for Portal and Console static assets",
      },
    ],
  },
  {
    title: "Managed SaaS",
    subtitle: "Third-party services the platform integrates with.",
    items: [
      {
        name: "SendGrid / Resend",
        note: "Transactional email — invites, resets, report delivery",
      },
      {
        name: "Sentry",
        note: "Error tracking + performance monitoring",
      },
      {
        name: "CartoDB map tiles",
        note: "Free basemap, no API key required",
      },
      {
        name: "Google / Microsoft OAuth",
        note: "Optional SSO for Mountain Property workspace",
      },
      {
        name: "GitHub Actions",
        note: "CI/CD — builds, tests, deploys",
      },
      {
        name: "Government planning APIs (national)",
        note: "Free state + council data — no key, no contract",
      },
    ],
  },
];

export function IntegrationsPage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Technical Solution · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">07</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Platform Integrations
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[22px] leading-[1.25] text-[#134A32] max-w-[440px]">
        Multi-vendor by design — yours to swap whenever.
      </h2>

      <p className="font-body text-[9.5px] text-[#85979B] leading-[1.65] mt-3 max-w-[460px]">
        No component locks Mountain Property into a single LLM, cloud,
        or SaaS vendor. Every integration sits behind an adapter and
        can be swapped at configuration level — no platform rewrite
        required.
      </p>

      {/* Three columns */}
      <div className="mt-5 grid grid-cols-3 gap-3 flex-1">
        {columns.map((col) => (
          <div
            key={col.title}
            className={`rounded-lg p-3 border ${
              col.invert
                ? "bg-[#134A32] border-[#134A32] text-white"
                : "bg-[#F9FAF8] border-[#E9EAE5]"
            }`}
          >
            <p
              className={`font-sans text-[7px] uppercase tracking-[0.12em] font-semibold mb-1 ${
                col.invert ? "text-[#C4952A]" : "text-[#C4952A]"
              }`}
            >
              {col.title}
            </p>
            <p
              className={`font-serif text-[11px] leading-[1.35] mb-3 ${
                col.invert ? "text-white" : "text-[#134A32]"
              }`}
            >
              {col.subtitle}
            </p>
            <ul className="space-y-2">
              {col.items.map((it) => (
                <li key={it.name} className="leading-tight">
                  <p
                    className={`font-sans text-[8.5px] font-semibold leading-[1.3] ${
                      col.invert ? "text-white" : "text-[#134A32]"
                    }`}
                  >
                    {it.name}
                  </p>
                  <p
                    className={`font-body text-[7.5px] leading-[1.45] mt-0.5 ${
                      col.invert ? "text-white/60" : "text-[#85979B]"
                    }`}
                  >
                    {it.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom principle strip */}
      <div className="mt-4 rounded-lg bg-[#E8F0EC] border border-[#134A32]/15 px-4 py-3">
        <div className="grid grid-cols-3 gap-5">
          {[
            {
              t: "Adapter pattern",
              d: "Every vendor behind a thin interface — swap without touching feature code.",
            },
            {
              t: "Cost pass-through",
              d: "All API / SaaS fees billed directly to Mountain Property after handover.",
            },
            {
              t: "AU data residency",
              d: "Every service configured to keep Mountain Property's data in Australia.",
            },
          ].map((p) => (
            <div key={p.t}>
              <p className="font-sans text-[8px] font-semibold text-[#134A32] mb-0.5">
                {p.t}
              </p>
              <p className="font-body text-[7.5px] text-[#85979B] leading-[1.5]">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scope note */}
      <div className="mt-2 flex items-start gap-2 px-1">
        <span className="font-sans text-[8px] text-[#C04040] shrink-0 mt-[1px]">
          ×
        </span>
        <p className="font-body text-[7.5px] text-[#85979B] leading-[1.5]">
          <span className="font-semibold text-[#134A32]">
            Self-hosted / on-premise LLM deployment is out of Phase 1 scope.
          </span>{" "}
          Phase 1 uses cloud LLM APIs (Claude / OpenAI). If Mountain Property
          later needs an LLM running on its own servers, that work is quoted
          separately.
        </p>
      </div>
    </div>
  );
}
