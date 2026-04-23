"use client";

const milestones = [
  {
    code: "M0",
    label: "Technical Solution Package",
    trigger: "On execution of this proposal",
    pct: "~5.5%",
    amount: "$5,000",
    highlight: true,
  },
  {
    code: "M1",
    label: "Stage 1 — AI Foundation",
    trigger: "Acceptance of Stage 1 deliverables",
    pct: "~27.8%",
    amount: "$25,000",
  },
  {
    code: "M2",
    label: "Stage 2 — National Data Engine",
    trigger: "Acceptance of Stage 2 deliverables",
    pct: "~27.8%",
    amount: "$25,000",
  },
  {
    code: "M3",
    label: "Stage 3 — AI Feasibility Report",
    trigger: "Acceptance of Stage 3 deliverables",
    pct: "~27.8%",
    amount: "$25,000",
  },
  {
    code: "M4",
    label: "Stage 4 — Launch & Handover",
    trigger: "Production sign-off + handover",
    pct: "~11.1%",
    amount: "$10,000",
  },
];

const included = [
  "All engineering, design, and AI work described in stages 1–4",
  "Claude / OpenAI API usage during Phase 1 build",
  "Staging + production environments (on Mountain Property's cloud)",
  "30-day post-launch hypercare after M4",
];

const excluded = [
  "Self-hosted / on-premise LLM deployment (cloud LLM APIs are in scope)",
  "Custom council DCP crawlers beyond 5 reference councils",
  "Mobile-native apps and construction-phase workflow tools",
  "Bespoke analytics or BI integrations beyond the standard report export",
  "Ongoing hosting and third-party API fees after handover (passed through at cost)",
];

export function CommercialPage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Proposal · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">07</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Commercial Terms
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[22px] leading-[1.25] text-[#134A32]">
        Fixed fee. Milestone-based. No surprises.
      </h2>

      {/* Total band */}
      <div className="mt-4 rounded-lg bg-[#134A32] px-5 py-3 flex items-center justify-between">
        <div>
          <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-[#C4952A]">
            Total Phase 1 Investment
          </p>
          <p className="font-serif text-[24px] text-white leading-none mt-1">
            AUD $90,000{" "}
            <span className="font-sans text-[11px] text-white/60">+ GST</span>
          </p>
        </div>
        <p className="font-sans text-[8px] text-white/60 text-right leading-[1.5] max-w-[180px]">
          Fixed price. Tied to 5 acceptance-gated milestones. No hourly
          over-runs; scope changes handled via written change order.
        </p>
      </div>

      {/* Milestone table */}
      <div className="mt-4 rounded-lg border border-[#E9EAE5] overflow-hidden">
        <div className="grid grid-cols-[50px_1fr_220px_70px_70px] px-4 py-2 bg-[#F5F6F3]">
          {["Code", "Deliverable", "Payment trigger", "Share", "Amount"].map(
            (h, i) => (
              <span
                key={h}
                className={`font-sans text-[7px] font-semibold uppercase tracking-[0.08em] text-[#85979B] ${
                  i > 2 ? "text-right" : ""
                }`}
              >
                {h}
              </span>
            )
          )}
        </div>
        {milestones.map((m) => (
          <div
            key={m.code}
            className={`grid grid-cols-[50px_1fr_220px_70px_70px] px-4 py-2 border-t border-[#E9EAE5] items-center ${
              m.highlight ? "bg-[#FFF8E1]" : ""
            }`}
          >
            <span className="font-sans text-[9px] font-semibold text-[#C4952A]">
              {m.code}
            </span>
            <span className="font-sans text-[9px] text-[#134A32]">
              {m.label}
            </span>
            <span className="font-body text-[8.5px] text-[#85979B]">
              {m.trigger}
            </span>
            <span className="font-sans text-[8.5px] text-[#85979B] text-right">
              {m.pct}
            </span>
            <span className="font-sans text-[9px] text-[#134A32] font-semibold text-right">
              {m.amount}
            </span>
          </div>
        ))}
        <div className="grid grid-cols-[50px_1fr_290px_70px] px-4 py-2.5 border-t border-[#E9EAE5] bg-[#134A32] items-center">
          <span className="col-span-2 font-sans text-[9px] font-semibold text-white">
            Total (ex-GST)
          </span>
          <span className="font-sans text-[9px] text-white/60 text-right">
            Payable against accepted milestones
          </span>
          <span className="font-sans text-[10px] font-bold text-[#C4952A] text-right">
            $90,000
          </span>
        </div>
      </div>

      {/* In / Out */}
      <div className="mt-4 grid grid-cols-2 gap-4 flex-1">
        <div className="rounded-lg bg-[#F9FAF8] border border-[#E9EAE5] p-3">
          <p className="font-sans text-[7.5px] uppercase tracking-[0.1em] text-[#2D8A4E] font-semibold mb-1.5">
            Included in fee
          </p>
          <ul className="space-y-1">
            {included.map((x, i) => (
              <li
                key={i}
                className="flex gap-1.5 font-body text-[8px] text-[#134A32] leading-[1.5]"
              >
                <span className="text-[#2D8A4E] shrink-0">✓</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-[#F9FAF8] border border-[#E9EAE5] p-3">
          <p className="font-sans text-[7.5px] uppercase tracking-[0.1em] text-[#C04040] font-semibold mb-1.5">
            Out of scope (Phase 1)
          </p>
          <ul className="space-y-1">
            {excluded.map((x, i) => (
              <li
                key={i}
                className="flex gap-1.5 font-body text-[8px] text-[#85979B] leading-[1.5]"
              >
                <span className="text-[#C04040]/60 shrink-0">×</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ownership strip */}
      <div className="mt-3 rounded-lg bg-[#E8F0EC] border border-[#134A32]/15 px-4 py-2.5">
        <p className="font-sans text-[8.5px] text-[#134A32]">
          <span className="font-semibold">Ownership:</span> all source code,
          AI prompts, embeddings, and platform data created during Phase 1
          transfer to Mountain Property on payment. No residual licence or
          revenue-share.
        </p>
      </div>
    </div>
  );
}
