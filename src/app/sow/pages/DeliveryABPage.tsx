"use client";

const stages = [
  {
    code: "Stage 1 · AI Foundation — Auth, Ops, Docs & Q&A",
    weeks: "Weeks 1 – 4",
    milestone: "M1 · $25,000",
    activities: [
      "Provision cloud accounts, monorepo, CI/CD, staging, Sentry",
      "Stand up Postgres (+ PostGIS + pgvector), Redis, S3; multi-tenant schema",
      "Auth (JWT + refresh + password reset + bcrypt ≥ 12) + 5-role RBAC + invitations",
      "Admin Console — users, orgs, audit logs, system configuration",
      "Document hub — folders, upload, AI tagging, full-text search, versioning",
      "RAG pipeline — chunking, pgvector embeddings, retrieval API + evaluation",
      "AI Q&A surface — chat over the document corpus with citations",
    ],
    deliverables: [
      "Working staging environment + infra-as-code",
      "Login, invite, and Admin Console operations demo",
      "Document hub with AI Q&A over uploaded corpus",
      "Architecture doc-set + ADRs",
    ],
    acceptance: [
      "Client user logs in; role enforcement verified in Portal and Console",
      "Uploaded document is searchable and Q&A-ready within 2 minutes with cited answers",
      "Merge to main auto-deploys to staging without manual intervention",
    ],
  },
  {
    code: "Stage 2 · National Data Engine",
    weeks: "Weeks 5 – 7",
    milestone: "M2 · $25,000",
    activities: [
      "Integrate with state planning portals and national cadastre",
      "Design Bronze/Silver/Gold schemas in Postgres",
      "Build Prefect flows for scheduled ingestion + retry",
      "Build site-intelligence map UI with layer toggles",
      "Performance-tune Gold layer to p95 ≤ 1s on benchmark set",
    ],
    deliverables: [
      "Ingestion flows operational on schedule",
      "Address-in → planning-profile API endpoint",
      "Site-intelligence map with overlay toggles",
    ],
    acceptance: [
      "5 benchmark sites across multiple states return complete profiles under 1s p95",
      "Clean re-ingest of one state executed end-to-end",
    ],
  },
];

export function DeliveryABPage() {
  return (
    <div className="w-full h-full bg-[#F5F6F3] p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          SoW · Phase 1 MVP
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">05</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Delivery Plan — Stages 1 & 2
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[20px] leading-[1.25] text-[#134A32]">
        The first 7 weeks — activities, deliverables, and acceptance.
      </h2>

      <div className="mt-5 space-y-4 flex-1">
        {stages.map((s) => (
          <div key={s.code} className="rounded-lg bg-white p-4">
            <div className="flex items-baseline justify-between pb-2 border-b border-[#E9EAE5]">
              <div>
                <p className="font-sans text-[11px] font-semibold text-[#134A32]">
                  {s.code}
                </p>
                <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-[#85979B] mt-0.5">
                  {s.weeks}
                </p>
              </div>
              <p className="font-sans text-[10px] text-[#134A32] font-semibold">
                {s.milestone}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-2.5">
              <div>
                <p className="font-sans text-[7px] uppercase tracking-[0.1em] text-[#134A32] font-semibold mb-1">
                  Activities
                </p>
                <ul className="space-y-0.5">
                  {s.activities.map((a, i) => (
                    <li
                      key={i}
                      className="flex gap-1 font-body text-[7.5px] text-[#134A32] leading-[1.45]"
                    >
                      <span className="text-[#C4952A] shrink-0">·</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-[7px] uppercase tracking-[0.1em] text-[#134A32] font-semibold mb-1">
                  Deliverables
                </p>
                <ul className="space-y-0.5">
                  {s.deliverables.map((d, i) => (
                    <li
                      key={i}
                      className="flex gap-1 font-body text-[7.5px] text-[#134A32] leading-[1.45]"
                    >
                      <span className="text-[#C4952A] shrink-0">◆</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-[7px] uppercase tracking-[0.1em] text-[#2D8A4E] font-semibold mb-1">
                  Acceptance criteria
                </p>
                <ul className="space-y-0.5">
                  {s.acceptance.map((a, i) => (
                    <li
                      key={i}
                      className="flex gap-1 font-body text-[7.5px] text-[#85979B] leading-[1.45]"
                    >
                      <span className="text-[#2D8A4E] shrink-0">✓</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-[#D1D5D0]">
        <p className="font-sans text-[7.5px] text-[#85979B] leading-[1.6]">
          Each stage ends with a demo to the Client product owner.
          Acceptance is confirmed in writing within 5 business days.
          Silence beyond that is deemed acceptance.
        </p>
      </div>
    </div>
  );
}
