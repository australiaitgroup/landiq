"use client";

const stages = [
  {
    code: "Stage 3 · AI Feasibility Report",
    weeks: "Weeks 8 – 11",
    milestone: "M3 · $30,000",
    activities: [
      "Design and version prompt templates for the institutional report",
      "Wire report generator to Claude / OpenAI with cost + rate controls",
      "Integrate with Stage 2 Data Engine (lot features) and Stage 1 RAG (Client corpus)",
      "Stand up the multi-agent harness (planner · specialists · critic · composer) with step/cost budgets",
      "Calibrate model against 5 Client-provided benchmark sites",
    ],
    deliverables: [
      "End-to-end report generator with PDF/DOCX export",
      "Cited source references in every section (from Data Engine + RAG)",
      "Multi-agent harness + prompt registry + evaluation harness in repo",
    ],
    acceptance: [
      "Report quality ≥ 85% against Client benchmark rubric",
      "Average generation end-to-end ≤ 60 seconds",
    ],
  },
  {
    code: "Stage 4 · Launch & Handover",
    weeks: "Weeks 12 – 13",
    milestone: "M4 · $5,000",
    activities: [
      "Portal & Console polish, empty states, onboarding, SSO (optional)",
      "Ship land pipeline (lead → acquired) with audit logging",
      "UAT cycle with Client team; triage and fix blockers",
      "Production cut-over, monitoring dashboards, automated backups",
      "Deliver training (2× half-day sessions) and handover pack",
    ],
    deliverables: [
      "Live production environment on Client domain",
      "Full source code + infra-as-code repositories transferred",
      "Runbooks: deploy, rollback, backup/restore, incident response",
      "Two recorded training sessions + admin/user guides",
    ],
    acceptance: [
      "Zero P1 defects open at handover",
      "Runbooks rehearsed with Client operations team",
      "30-day hypercare window begins on Production sign-off",
    ],
  },
];

export function DeliveryCDPage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          SoW · Phase 1 MVP
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">06</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Delivery Plan — Stages 3 & 4
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[20px] leading-[1.25] text-[#134A32]">
        Weeks 8 – 13 — AI reports, launch, and hand-over.
      </h2>

      <div className="mt-5 space-y-4 flex-1">
        {stages.map((s) => (
          <div
            key={s.code}
            className="rounded-lg bg-[#F9FAF8] border border-[#E9EAE5] p-4"
          >
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

      <div className="mt-3 pt-3 border-t border-[#E9EAE5]">
        <p className="font-sans text-[7.5px] text-[#85979B] leading-[1.6]">
          At Stage 4 acceptance, all source code, AI prompts, model
          configurations, and platform data vest in the Client. The 30-day
          hypercare window runs from the Production sign-off date.
        </p>
      </div>
    </div>
  );
}
