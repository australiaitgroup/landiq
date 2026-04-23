"use client";

const milestones = [
  { code: "M0", label: "Technical Solution Package", pct: 5.5, amount: 5000 },
  { code: "M1", label: "Stage 1 — AI Foundation", pct: 27.8, amount: 25000 },
  { code: "M2", label: "Stage 2 — National Data Engine", pct: 27.8, amount: 25000 },
  { code: "M3", label: "Stage 3 — AI Feasibility Report", pct: 27.8, amount: 25000 },
  { code: "M4", label: "Stage 4 — Launch & Handover", pct: 11.1, amount: 10000 },
];

const fmt = (n: number) =>
  "$" + n.toLocaleString("en-AU", { minimumFractionDigits: 0 });

const inclusions = [
  "All engineering, design, QA and AI work in Stages 1 – 4",
  "Claude / OpenAI API usage during Phase 1 build and testing",
  "Staging + production environment setup (on Client cloud)",
  "30-day post-launch hypercare after M4 acceptance",
];

const exclusions = [
  "Self-hosted / on-premise LLM deployment on Client infrastructure — quoted separately if required",
  "Ongoing cloud hosting, third-party SaaS, and LLM costs after M4 (paid direct by Client)",
  "Travel outside Sydney, if requested by Client (at cost)",
  "Emergency out-of-hours support during build (charged at $180/hr if pre-approved)",
];

export function FeesPage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          SoW · Phase 1 MVP
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">07</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Fee Proposal & Payment Schedule
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[20px] leading-[1.25] text-[#134A32]">
        Total AUD $90,000 + GST · payable against 5 acceptance-gated milestones.
      </h2>

      {/* Table */}
      <div className="mt-5 rounded-lg border border-[#E9EAE5] overflow-hidden">
        <div className="grid grid-cols-[50px_1fr_60px_90px] px-4 py-2 bg-[#F5F6F3]">
          {["Code", "Milestone", "% Total", "Amount (ex-GST)"].map((h, i) => (
            <span
              key={h}
              className={`font-sans text-[7px] font-semibold uppercase tracking-[0.08em] text-[#85979B] ${
                i > 1 ? "text-right" : ""
              }`}
            >
              {h}
            </span>
          ))}
        </div>
        {milestones.map((m) => (
          <div
            key={m.code}
            className="grid grid-cols-[50px_1fr_60px_90px] px-4 py-2.5 border-t border-[#E9EAE5] items-center"
          >
            <span className="font-sans text-[9px] font-semibold text-[#C4952A]">
              {m.code}
            </span>
            <span className="font-sans text-[9px] text-[#134A32]">
              {m.label}
            </span>
            <span className="font-sans text-[8.5px] text-[#85979B] text-right">
              {m.pct.toFixed(1)}%
            </span>
            <span className="font-sans text-[9.5px] text-[#134A32] font-semibold text-right">
              {fmt(m.amount)}
            </span>
          </div>
        ))}
        {/* Subtotal + GST + Total */}
        <div className="grid grid-cols-[50px_1fr_60px_90px] px-4 py-2 border-t border-[#E9EAE5] bg-[#F9FAF8] items-center">
          <span />
          <span className="font-sans text-[9px] text-[#134A32] font-semibold">
            Subtotal (ex-GST)
          </span>
          <span className="font-sans text-[8.5px] text-[#85979B] text-right">
            100%
          </span>
          <span className="font-sans text-[9.5px] text-[#134A32] font-semibold text-right">
            $90,000
          </span>
        </div>
        <div className="grid grid-cols-[50px_1fr_60px_90px] px-4 py-2 border-t border-[#E9EAE5] items-center">
          <span />
          <span className="font-sans text-[9px] text-[#85979B]">
            GST (10%)
          </span>
          <span />
          <span className="font-sans text-[9px] text-[#85979B] text-right">
            $9,000
          </span>
        </div>
        <div className="grid grid-cols-[50px_1fr_60px_90px] px-4 py-2.5 border-t border-[#E9EAE5] bg-[#134A32] items-center">
          <span />
          <span className="font-sans text-[9.5px] text-white font-semibold">
            Total (incl. GST)
          </span>
          <span />
          <span className="font-sans text-[11px] text-[#C4952A] font-bold text-right">
            $99,000
          </span>
        </div>
      </div>

      {/* Terms */}
      <div className="mt-4 rounded-lg bg-[#F9FAF8] border border-[#E9EAE5] p-3">
        <p className="font-sans text-[7.5px] uppercase tracking-[0.1em] text-[#134A32] font-semibold mb-2">
          Invoicing & payment terms
        </p>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
          {[
            "Invoice issued on written acceptance of each milestone",
            "Payment terms: net 14 days from invoice date",
            "AUD only, EFT to Supplier's nominated account",
            "Late payment > 14 days past due attracts 1.5% / month interest",
          ].map((x, i) => (
            <li
              key={i}
              className="flex gap-1.5 font-body text-[8px] text-[#134A32] leading-[1.55]"
            >
              <span className="text-[#C4952A] shrink-0">·</span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Inc/Exc */}
      <div className="mt-3 grid grid-cols-2 gap-3 flex-1">
        <div className="rounded-lg border border-[#E9EAE5] p-3">
          <p className="font-sans text-[7.5px] uppercase tracking-[0.1em] text-[#2D8A4E] font-semibold mb-1.5">
            Inclusions
          </p>
          <ul className="space-y-0.5">
            {inclusions.map((x, i) => (
              <li
                key={i}
                className="flex gap-1.5 font-body text-[7.5px] text-[#134A32] leading-[1.5]"
              >
                <span className="text-[#2D8A4E] shrink-0">✓</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-[#E9EAE5] p-3">
          <p className="font-sans text-[7.5px] uppercase tracking-[0.1em] text-[#C04040] font-semibold mb-1.5">
            Exclusions / pass-through
          </p>
          <ul className="space-y-0.5">
            {exclusions.map((x, i) => (
              <li
                key={i}
                className="flex gap-1.5 font-body text-[7.5px] text-[#85979B] leading-[1.5]"
              >
                <span className="text-[#C04040]/60 shrink-0">×</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
