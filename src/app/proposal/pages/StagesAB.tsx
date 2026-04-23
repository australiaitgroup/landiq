"use client";

const stages = [
  {
    num: "Stage 01",
    title: "AI Foundation — Auth, Ops, Documents & Q&A",
    weeks: "Weeks 1 – 4",
    milestone: "M1 · AUD $25,000",
    goal:
      "Mountain Property can log in, manage the org, upload documents, and run AI Q&A over them on day one.",
    deliverables: [
      "Login / register / password reset · JWT + refresh tokens · bcrypt",
      "5-role RBAC (owner / admin / manager / member / viewer) + invitation flow",
      "Admin Console — users, orgs, audit logs, system config",
      "Document hub — folders, upload, AI auto-tagging, full-text search, versioning, sharing",
      "RAG pipeline — chunking, pgvector embeddings, retrieval API",
      "AI Q&A surface — chat over the uploaded document corpus with cited sources",
      "Multi-tenant data model + cloud infra (Postgres/PostGIS/pgvector, Redis, S3) on Mountain Property's account",
      "Monorepo + CI/CD + staging environment + Sentry error tracking",
    ],
    acceptance: [
      "Invite flow end-to-end; role enforcement demonstrable in Portal and Console",
      "Uploaded document is searchable and Q&A-ready within 2 minutes, with citations to source",
    ],
  },
  {
    num: "Stage 02",
    title: "National Data Engine",
    weeks: "Weeks 5 – 7",
    milestone: "M2 · AUD $25,000",
    goal:
      "Any Australian address returns a full planning profile in under 1 second.",
    deliverables: [
      "National address → cadastral lot geocoding (G-NAF + state cadastre feeds)",
      "Live integrations against state planning portals (ArcGIS REST, WFS, OpenData)",
      "Coverage: zoning, FSR / density, height, heritage, lot size, bushfire, flood overlays",
      "Bronze / Silver / Gold medallion storage with pre-aggregated lot features",
      "Scheduled ingestion (Prefect) + retry/backoff + structured logging + data-residency in AU",
      "Interactive site-intelligence map (Leaflet + CartoDB tiles, layer toggles)",
    ],
    acceptance: [
      "5 benchmark sites across multiple states return complete planning profiles under 1s p95",
      "Re-ingest for one state completes cleanly end-to-end",
    ],
  },
];

export function StagesAB() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Proposal · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">05</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Stage Deliverables (1 of 2)
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[20px] leading-[1.25] text-[#134A32]">
        AI Foundation & Data Engine — what&apos;s in the first 7 weeks.
      </h2>

      <div className="mt-5 space-y-4 flex-1">
        {stages.map((s) => (
          <div
            key={s.num}
            className="rounded-lg border border-[#E9EAE5] bg-[#F9FAF8] p-4"
          >
            <div className="flex items-baseline justify-between pb-2 border-b border-[#E9EAE5]">
              <div>
                <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-[#85979B]">
                  {s.num} · {s.weeks}
                </p>
                <h3 className="font-sans text-[12px] font-semibold text-[#134A32] mt-0.5">
                  {s.title}
                </h3>
              </div>
              <p className="font-sans text-[9px] text-[#134A32] font-semibold">
                {s.milestone}
              </p>
            </div>

            <p className="font-body text-[9px] italic text-[#85979B] leading-[1.5] mt-2">
              {s.goal}
            </p>

            <div className="mt-2.5 grid grid-cols-[1fr_160px] gap-4">
              <div>
                <p className="font-sans text-[7px] uppercase tracking-[0.1em] text-[#134A32] font-semibold mb-1">
                  Deliverables
                </p>
                <ul className="space-y-0.5">
                  {s.deliverables.map((d, i) => (
                    <li
                      key={i}
                      className="flex gap-1.5 font-body text-[8px] text-[#134A32] leading-[1.45]"
                    >
                      <span className="text-[#C4952A] shrink-0">·</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-[7px] uppercase tracking-[0.1em] text-[#134A32] font-semibold mb-1">
                  Acceptance
                </p>
                <ul className="space-y-0.5">
                  {s.acceptance.map((a, i) => (
                    <li
                      key={i}
                      className="flex gap-1.5 font-body text-[8px] text-[#85979B] leading-[1.45]"
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

      <div className="mt-3 pt-3 border-t border-[#E9EAE5]">
        <p className="font-sans text-[7.5px] text-[#85979B]">
          Each stage completes with a demo to Mountain Property + a signed
          acceptance note. Invoicing follows acceptance.
        </p>
      </div>
    </div>
  );
}
