"use client";

const stages = [
  {
    num: "01",
    weeks: "Wk 1–4",
    title: "AI Foundation",
    outcome: "Login, operations console, document hub and AI Q&A — Mountain Property can use it day 1.",
    bullets: [
      "Auth, RBAC & Admin Console operations",
      "Document hub — upload, tag, version, search",
      "RAG pipeline + AI Q&A over your documents",
    ],
  },
  {
    num: "02",
    weeks: "Wk 5–7",
    title: "National Data Engine",
    outcome: "Any Australian address returns a full planning profile in under 1 second.",
    bullets: [
      "Live integrations: state planning portals + cadastre",
      "Zoning, FSR, height, heritage, flood, bushfire overlays",
      "Interactive map with layer controls",
    ],
  },
  {
    num: "03",
    weeks: "Wk 8–11",
    title: "AI Feasibility Report",
    outcome: "One-click AI report replacing the bulk of desktop consultancy.",
    bullets: [
      "LLM-generated institutional-style feasibility report",
      "Risk scoring + simple ROI (FSR × price × cost)",
      "Document hub — upload, tag, search, version",
    ],
  },
  {
    num: "04",
    weeks: "Wk 12–13",
    title: "Launch & Handover",
    outcome: "Mountain Property team trained, running live, fully independent.",
    bullets: [
      "Portal + Console polish, onboarding & SSO",
      "UAT, production cut-over, monitoring & runbooks",
      "Training, handover pack, source-code transfer",
    ],
  },
];

export function ScopeOverviewPage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Proposal · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">04</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Scope Overview
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-6" />

      <h2 className="font-serif text-[22px] leading-[1.25] text-[#134A32] max-w-[400px]">
        Four stages, 13 weeks, one platform.
      </h2>

      <p className="font-body text-[10px] text-[#85979B] leading-[1.7] mt-3 max-w-[440px]">
        Phase 1 is delivered as four discrete stages. Each stage has its
        own scope, acceptance criteria, and fixed payment milestone —
        Mountain Property only moves to the next stage once the previous
        is accepted.
      </p>

      {/* Stage rail */}
      <div className="mt-7 flex-1 space-y-3">
        {stages.map((s) => (
          <div
            key={s.num}
            className="grid grid-cols-[46px_1fr] gap-4 rounded-lg border border-[#E9EAE5] bg-[#F9FAF8] p-4"
          >
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-[#134A32] flex items-center justify-center">
                <span className="font-serif text-[13px] text-white">
                  {s.num}
                </span>
              </div>
              <p className="font-sans text-[7px] uppercase tracking-[0.08em] text-[#85979B] mt-2 text-center leading-tight">
                {s.weeks}
              </p>
            </div>
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-sans text-[12px] font-semibold text-[#134A32]">
                  {s.title}
                </h3>
              </div>
              <p className="font-body text-[9px] text-[#85979B] italic leading-[1.5] mt-0.5">
                {s.outcome}
              </p>
              <ul className="mt-2 grid grid-cols-3 gap-2">
                {s.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-1.5 font-sans text-[8px] text-[#134A32] leading-[1.4]"
                  >
                    <span className="text-[#C4952A] shrink-0">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom band */}
      <div className="mt-5 pt-4 border-t border-[#E9EAE5] flex items-center justify-between">
        <p className="font-sans text-[8px] text-[#85979B]">
          Preceded by M0 — Technical Solution Package (issued separately) ·
          Detailed SoW accompanies this proposal
        </p>
        <p className="font-sans text-[8px] text-[#134A32] font-semibold">
          AUD $90,000 fixed · 5 milestones (M0 + Stages 1–4)
        </p>
      </div>
    </div>
  );
}
