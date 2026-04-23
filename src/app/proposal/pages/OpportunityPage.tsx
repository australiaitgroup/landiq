"use client";

const pains = [
  {
    num: "01",
    title: "Fragmented planning data",
    desc: "Every site assessment pulls from 20+ government portals, council GIS layers, PDFs and spreadsheets — repeated every time.",
  },
  {
    num: "02",
    title: "Manual feasibility",
    desc: "A single desktop feasibility takes 2–4 weeks and $20K–$60K in consultant time before a site is even shortlisted.",
  },
  {
    num: "03",
    title: "High sunk cost on dead sites",
    desc: "70–80% of investigated sites are abandoned — with the full DD spend already written off.",
  },
  {
    num: "04",
    title: "No single operating system",
    desc: "Opportunities, emails, consultant packs and decisions live across drives, inboxes and personal folders.",
  },
];

export function OpportunityPage() {
  return (
    <div className="w-full h-full bg-[#E9EAE5] p-[42px] flex flex-col">
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Proposal · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">03</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        The Opportunity
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-6" />

      <h2 className="font-serif text-[22px] leading-[1.25] text-[#134A32] max-w-[400px]">
        Mountain Property can own the tool that every serious developer
        will need — and start using it first.
      </h2>

      <p className="font-body text-[10px] text-[#85979B] leading-[1.7] mt-4 max-w-[420px]">
        Australia approves 200K+ DA applications per year against a
        $12.5 trillion housing base. Every one of those decisions passes
        through the same broken manual feasibility workflow. Phase 1
        replaces the most expensive and repetitive part of that
        workflow — the desktop screening that consumes most of what
        Mountain Property currently pays to consultants.
      </p>

      {/* Pain grid */}
      <div className="grid grid-cols-2 gap-3.5 mt-6">
        {pains.map((p) => (
          <div key={p.num} className="bg-white rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-sans text-[9px] font-bold text-[#C4952A]">
                {p.num}
              </span>
              <div className="flex-1 h-[1px] bg-[#E9EAE5]" />
            </div>
            <h3 className="font-sans text-[11px] font-semibold text-[#134A32] mb-1.5">
              {p.title}
            </h3>
            <p className="font-body text-[8.5px] text-[#85979B] leading-[1.6]">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Callout strip */}
      <div className="mt-5 rounded-lg bg-[#134A32] p-4 flex items-center justify-between">
        <div>
          <p className="font-sans text-[7.5px] uppercase tracking-[0.15em] text-[#C4952A] mb-1">
            Phase 1 turns this into →
          </p>
          <p className="font-serif text-[14px] text-white leading-[1.4] max-w-[320px]">
            One address in. One AI-generated feasibility out.
            In minutes, not weeks.
          </p>
        </div>
        <div className="text-right shrink-0 ml-4">
          <p className="font-serif text-[22px] text-[#C4952A] leading-none">
            ~80%
          </p>
          <p className="font-sans text-[7px] uppercase tracking-[0.1em] text-white/60 mt-1.5">
            Target cost reduction
            <br />
            on desktop DD
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-auto pt-5 border-t border-[#D1D5D0]">
        <div className="grid grid-cols-3 gap-5">
          {[
            { value: "2–4 wks → <1 hr", label: "Turnaround per site" },
            { value: "$100K+", label: "Wasted per abandoned site today" },
            { value: "National", label: "Coverage at Phase 1 handover" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-[15px] text-[#134A32]">{s.value}</p>
              <p className="font-sans text-[7px] text-[#85979B] mt-1 uppercase tracking-[0.05em]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
