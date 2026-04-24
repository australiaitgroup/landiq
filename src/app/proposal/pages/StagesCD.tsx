"use client";

const stages = [
  {
    num: "Stage 03",
    title: "AI Feasibility Report",
    weeks: "Weeks 8 – 11",
    milestone: "M3 · AUD $30,000",
    goal:
      "One-click AI report replacing the majority of Mountain Property's desktop consultancy spend.",
    deliverables: [
      "Feasibility report generator (Claude/OpenAI) with institutional-style template",
      "Report sections: site overview, planning controls, risk score, yield estimation, comps reference, recommendation",
      "Consumes Stage 2 Data Engine + Stage 1 RAG corpus — every claim cited",
      "Prompt registry + evaluation harness (versioned, git-tracked)",
      "Export to PDF/DOCX with source references in every generated section",
    ],
    acceptance: [
      "Report accuracy ≥ 85% on a Mountain Property 5-site benchmark set",
      "Average report generation time ≤ 60 seconds",
    ],
  },
  {
    num: "Stage 04",
    title: "Launch & Handover",
    weeks: "Weeks 12 – 13",
    milestone: "M4 · AUD $5,000",
    goal:
      "Mountain Property is running the platform live, with the internal team fully trained and independent.",
    deliverables: [
      "Portal + Console polish, empty states, onboarding flow, SSO (Google workspace optional)",
      "Land pipeline (lead → research → feasibility → negotiation → acquired)",
      "UAT cycle with Mountain Property team + triage of blockers",
      "Production cut-over, monitoring dashboards, automated backups, runbooks",
      "Two half-day training sessions (admin + end-user) + recorded walkthroughs",
      "Full source-code transfer, documentation pack, credentials handover",
      "30-day post-launch hypercare (bug fixes + critical support included)",
    ],
    acceptance: [
      "Platform live on Mountain Property's production domain",
      "Zero P1 defects open at handover · runbooks rehearsed with Mountain Property ops",
    ],
  },
];

export function StagesCD() {
  return (
    <div className="w-full h-full bg-[#F5F6F3] p-[42px] flex flex-col">
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Proposal · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">06</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Stage Deliverables (2 of 2)
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[20px] leading-[1.25] text-[#134A32]">
        AI Reports & Launch — weeks 8 to 13.
      </h2>

      <div className="mt-5 space-y-4 flex-1">
        {stages.map((s) => (
          <div
            key={s.num}
            className="rounded-lg border border-[#E9EAE5] bg-white p-4"
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

      <div className="mt-3 pt-3 border-t border-[#D1D5D0]">
        <p className="font-sans text-[7.5px] text-[#85979B]">
          At Stage 4 sign-off, IP, data, and source code are transferred
          to Mountain Property. LandIQ&apos;s engagement completes unless
          a retainer is signed.
        </p>
      </div>
    </div>
  );
}
