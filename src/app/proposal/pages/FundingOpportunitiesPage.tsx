"use client";

const rdtiBreakdown = [
  { l: "Phase 1 engagement (ex-GST)", v: "$90,000" },
  { l: "Estimated qualifying R&D spend", v: "~$90,000" },
  { l: "Refundable tax offset (SME, <$20M turnover)", v: "43.5%" },
  { l: "Indicative return to Mountain Property", v: "~$39,150", highlight: true },
];

const grantPrograms = [
  {
    name: "ARC Linkage Projects",
    ratio: "~50:50",
    note: "Research + industry co-funded, 2–5 year horizon",
  },
  {
    name: "CRC-P (Cooperative Research Centres — Projects)",
    ratio: "1:1 matched",
    note: "Industry-led short-term collaboration, up to $3M",
  },
  {
    name: "Industry PhD Program",
    ratio: "Stipend-funded",
    note: "3-year embedded PhD, cost-effective research capacity",
  },
  {
    name: "NSW MVP Ventures",
    ratio: "Up to $50K",
    note: "State grant for SME commercialisation",
  },
];

export function FundingOpportunitiesPage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Proposal · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">08</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Optional · Government Funding Opportunities
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[22px] leading-[1.2] text-[#134A32] max-w-[440px]">
        Two funding levers that can substantially reduce Mountain
        Property&apos;s net outlay on Phase 1.
      </h2>

      <p className="font-body text-[9px] text-[#85979B] leading-[1.65] mt-3 max-w-[460px]">
        The engagement is designed and delivered as a genuine R&amp;D program —
        purpose-built for the AusIndustry R&amp;D Tax Incentive (RDTI) and for
        joint industry-university grant applications. Both levers are{" "}
        <span className="text-[#134A32] font-semibold">optional</span> and{" "}
        <span className="text-[#134A32] font-semibold">stackable</span>; neither
        changes the scope, timeline, or fixed fee already agreed.
      </p>

      {/* Two columns */}
      <div className="mt-5 grid grid-cols-2 gap-3 flex-1">
        {/* ── Option 1: RDTI ── */}
        <div className="rounded-lg bg-[#FFF8E1] border border-[#C4952A]/40 p-3.5 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-serif text-[14px] text-[#C4952A]">01</span>
            <p className="font-sans text-[8px] uppercase tracking-[0.12em] text-[#134A32] font-semibold">
              Prepay for FY25-26 R&amp;D Tax Incentive
            </p>
          </div>
          <p className="font-sans text-[7.5px] text-[#85979B] mb-2 leading-[1.45]">
            Settle the full engagement before 30 June 2026 to keep the whole
            $90,000 inside Mountain Property&apos;s FY25-26 RDTI claim.
          </p>

          <div className="mt-1 rounded bg-white border border-[#C4952A]/25 overflow-hidden">
            {rdtiBreakdown.map((r) => (
              <div
                key={r.l}
                className={`grid grid-cols-[1fr_auto] px-2.5 py-1.5 border-t first:border-t-0 border-[#C4952A]/20 items-center ${
                  r.highlight ? "bg-[#134A32]" : ""
                }`}
              >
                <p
                  className={`font-sans text-[8px] ${
                    r.highlight ? "text-white/70" : "text-[#85979B]"
                  }`}
                >
                  {r.l}
                </p>
                <p
                  className={`font-sans text-[9px] font-semibold text-right ${
                    r.highlight ? "text-[#C4952A]" : "text-[#134A32]"
                  }`}
                >
                  {r.v}
                </p>
              </div>
            ))}
          </div>

          <p className="font-sans text-[7.5px] uppercase tracking-[0.1em] text-[#134A32] font-semibold mt-3 mb-1">
            What Mountain Property gets
          </p>
          <ul className="space-y-1">
            {[
              "43.5% refundable tax offset on qualifying R&D expenditure",
              "Cash refund paid out regardless of MP's tax position",
              "Offset claimed via standard FY25-26 tax return",
            ].map((x) => (
              <li
                key={x}
                className="flex gap-1.5 font-body text-[8px] text-[#134A32] leading-[1.45]"
              >
                <span className="text-[#C4952A] shrink-0">✓</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <p className="font-sans text-[7.5px] uppercase tracking-[0.1em] text-[#134A32] font-semibold mt-3 mb-1">
            What LandIQ provides at no extra fee
          </p>
          <ul className="space-y-1">
            {[
              "Technical-activity dossier mapped to RDTI 'core' and 'supporting' activities",
              "Time-tracked engineering logs exportable to MP's tax advisor",
              "AusIndustry registration template + response to any clarification",
            ].map((x) => (
              <li
                key={x}
                className="flex gap-1.5 font-body text-[8px] text-[#134A32] leading-[1.45]"
              >
                <span className="text-[#C4952A] shrink-0">✓</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <p className="font-sans text-[7px] text-[#85979B] mt-auto pt-2 leading-[1.5] italic">
            Subject to MP&apos;s tax-advisor eligibility assessment + AusIndustry
            registration. Percentage shown is the SME rate for companies with
            aggregated turnover under $20M.
          </p>
        </div>

        {/* ── Option 2: University partnership ── */}
        <div className="rounded-lg bg-[#FFF8E1] border border-[#C4952A]/40 p-3.5 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-serif text-[14px] text-[#C4952A]">02</span>
            <p className="font-sans text-[8px] uppercase tracking-[0.12em] text-[#134A32] font-semibold">
              University Research Partnership
            </p>
          </div>
          <p className="font-sans text-[7.5px] text-[#85979B] mb-2 leading-[1.45]">
            Co-author the engagement with an Australian university as an
            industry-research collaboration — unlocks a second funding layer
            stackable on top of the RDTI above.
          </p>

          <div className="rounded bg-white border border-[#C4952A]/25 p-2.5 mb-2">
            <p className="font-sans text-[7px] uppercase tracking-[0.1em] text-[#C4952A] font-semibold mb-1">
              Partner network (via JR Academy)
            </p>
            <p className="font-body text-[8px] text-[#134A32] leading-[1.5]">
              <span className="font-semibold">JR Academy</span> — Metatree AI
              Lab&apos;s parent network — maintains active research
              relationships with Australian universities across computer
              science, AI, and data disciplines, and can nominate a
              co-investigator onto the engagement.
            </p>
          </div>

          <p className="font-sans text-[7.5px] uppercase tracking-[0.1em] text-[#134A32] font-semibold mb-1">
            Programs that may apply
          </p>
          <div className="rounded bg-white border border-[#C4952A]/25 overflow-hidden mb-2">
            {grantPrograms.map((g) => (
              <div
                key={g.name}
                className="px-2.5 py-1.5 border-t first:border-t-0 border-[#C4952A]/20"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-sans text-[8.5px] text-[#134A32] font-semibold">
                    {g.name}
                  </p>
                  <p className="font-sans text-[7.5px] text-[#C4952A] font-semibold shrink-0">
                    {g.ratio}
                  </p>
                </div>
                <p className="font-body text-[7.5px] text-[#85979B] leading-[1.45] mt-0.5">
                  {g.note}
                </p>
              </div>
            ))}
          </div>

          <p className="font-sans text-[7.5px] uppercase tracking-[0.1em] text-[#134A32] font-semibold mt-1 mb-1">
            What LandIQ provides at no extra fee
          </p>
          <ul className="space-y-1">
            {[
              "Partner university shortlist + warm introduction to the co-investigator",
              "Joint R&D project scope, methodology and milestones",
              "Full grant application drafted + submitted; grants paid direct to MP",
            ].map((x) => (
              <li
                key={x}
                className="flex gap-1.5 font-body text-[8px] text-[#134A32] leading-[1.45]"
              >
                <span className="text-[#C4952A] shrink-0">✓</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <p className="font-sans text-[7px] text-[#85979B] mt-auto pt-2 leading-[1.5] italic">
            Subject to grant eligibility, round timing, and university partner
            sign-on. MP&apos;s contribution to matched funding can largely be
            covered by in-kind staff time rather than additional cash outlay.
          </p>
        </div>
      </div>

      {/* Stacked scenario strip */}
      <div className="mt-3 rounded-lg bg-[#134A32] px-4 py-2.5 flex items-center justify-between">
        <div>
          <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-[#C4952A] mb-0.5">
            Stacked scenario · indicative
          </p>
          <p className="font-body text-[8.5px] text-white/80 leading-[1.55] max-w-[420px]">
            RDTI offset ($39K) + successful co-funded grant (program-dependent)
            can bring Mountain Property&apos;s net Phase 1 outlay materially
            below $50K — for the same scope, team and timeline.
          </p>
        </div>
        <div className="text-right shrink-0 ml-4">
          <p className="font-serif text-[20px] text-[#C4952A] leading-none">
            &gt; 50%
          </p>
          <p className="font-sans text-[7px] uppercase tracking-[0.1em] text-white/60 mt-1">
            Potential effective
            <br />
            fee reduction
          </p>
        </div>
      </div>

      {/* Footer note */}
      <p className="font-sans text-[7px] text-[#85979B] mt-3 leading-[1.6]">
        This page describes optional funding pathways only. Nothing on this page
        constitutes tax, legal, or financial advice. All figures are
        indicative and assume eligibility; Mountain Property&apos;s tax advisor
        and the relevant funding body remain the authoritative source of
        eligibility determination.
      </p>
    </div>
  );
}
