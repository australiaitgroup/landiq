"use client";

const summary = [
  {
    label: "Engagement",
    value:
      "Fixed-fee build of the LandIQ Phase 1 MVP for Mountain Property — a working, production-grade land feasibility platform.",
  },
  {
    label: "Duration",
    value: "~13 weeks (3 months) · Q2 2026 start → Q3 2026 delivery",
  },
  {
    label: "Total investment",
    value: "AUD $90,000 + GST · fixed price across 4 milestones",
  },
  {
    label: "Ownership",
    value:
      "All source code, AI prompts, platform data, and hosting accounts belong to Mountain Property. No licence, no lock-in.",
  },
  {
    label: "Mountain Property effort",
    value:
      "One product owner + ~2 hrs / week review. LandIQ handles everything else end-to-end.",
  },
];

const why = [
  "AI-accelerated build — 3 months of focused output at a fraction of a traditional in-house rebuild.",
  "Domain-owned team — the engineers behind the national LandIQ research, now building for you.",
  "You own the asset — code, data and IP transfer to Mountain Property at each milestone sign-off.",
];

export function ExecSummaryPage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Proposal · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">02</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Executive Summary
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-6" />

      <h2 className="font-serif text-[24px] leading-[1.2] text-[#134A32] max-w-[420px]">
        A fixed-fee build of the Phase 1 platform — delivered in 3 months,
        owned by Mountain Property.
      </h2>

      <p className="font-body text-[10px] text-[#85979B] leading-[1.7] mt-4 max-w-[440px]">
        This proposal sets out the scope, staged deliverables, and
        commercial terms for LandIQ to design, build, and hand over the
        Phase 1 MVP for Mountain Property. It is structured to give you
        clear visibility of progress, and control over each milestone
        before the next begins.
      </p>

      {/* Summary table */}
      <div className="mt-6 rounded-lg border border-[#E9EAE5] overflow-hidden">
        {summary.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-[140px_1fr] ${
              i > 0 ? "border-t border-[#E9EAE5]" : ""
            }`}
          >
            <div className="bg-[#F5F6F3] px-4 py-3">
              <p className="font-sans text-[8px] uppercase tracking-[0.08em] text-[#134A32] font-semibold">
                {row.label}
              </p>
            </div>
            <div className="px-4 py-3">
              <p className="font-body text-[9.5px] text-[#85979B] leading-[1.6]">
                {row.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Why this works */}
      <div className="mt-6 flex-1">
        <p className="font-sans text-[8px] uppercase tracking-[0.12em] text-[#134A32] font-semibold mb-3">
          Why this works for Mountain Property
        </p>
        <div className="space-y-2.5">
          {why.map((w, i) => (
            <div key={i} className="flex gap-3">
              <span className="font-serif text-[12px] text-[#C4952A] leading-none pt-0.5">
                ◆
              </span>
              <p className="font-body text-[9.5px] text-[#134A32] leading-[1.6]">
                {w}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom quote */}
      <div className="mt-auto pt-5 border-t border-[#E9EAE5]">
        <div className="flex gap-4">
          <div className="w-[1.5px] bg-[#C4952A] shrink-0" />
          <p className="font-serif text-[12px] italic text-[#134A32] leading-[1.5]">
            Mountain Property funds a single, focused Phase 1 build —
            and walks away with a platform, a team relationship, and
            full control of the asset.
          </p>
        </div>
      </div>
    </div>
  );
}
