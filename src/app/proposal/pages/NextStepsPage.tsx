"use client";

const steps = [
  {
    num: "01",
    title: "Review this proposal",
    note: "Confirm scope, staging, and commercial terms with your internal team.",
    when: "Week of receipt",
  },
  {
    num: "02",
    title: "Sign the SoW",
    note: "Executed Statement of Works + signed cover of this proposal trigger kick-off.",
    when: "+1 week",
  },
  {
    num: "03",
    title: "Receive M0 — Technical Solution Package",
    note: "Architecture, data flow, security and integration plan — A4 pack + walkthrough. Unlocks $5,000 invoice.",
    when: "+2 weeks",
  },
  {
    num: "04",
    title: "Stage 1 kick-off",
    note: "Cloud accounts provisioned, team onboarded, Foundation build begins.",
    when: "Week of M0 acceptance",
  },
];

export function NextStepsPage() {
  return (
    <div className="w-full h-full bg-[#0D3423] p-[42px] flex flex-col relative overflow-hidden">
      {/* Topographic background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        viewBox="0 0 600 850"
        preserveAspectRatio="xMidYMid slice"
      >
        {[100, 200, 300, 400, 500, 600, 700].map((y, i) => (
          <path
            key={i}
            d={`M-50 ${y} Q200 ${y - 20 + i * 5} 400 ${y + 10} T650 ${y}`}
            fill="none"
            stroke="white"
            strokeWidth="0.6"
          />
        ))}
      </svg>

      <div className="relative z-10 h-full flex flex-col">
        {/* Page header */}
        <div className="flex items-center justify-between mb-8">
          <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-white/40">
            Proposal · Mountain Property
          </p>
          <p className="font-sans text-[7px] text-white/40">09</p>
        </div>

        <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#C4952A] mb-2">
          Next Steps
        </p>
        <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

        <h2 className="font-serif text-[26px] leading-[1.2] text-white max-w-[400px]">
          One signature away from a platform you own.
        </h2>

        <p className="font-body text-[10px] text-white/60 leading-[1.7] mt-4 max-w-[380px]">
          The fastest path from here to a working platform is simple.
          Sign, receive the Technical Solution, and we begin.
        </p>

        {/* Steps */}
        <div className="mt-7 space-y-3 flex-1">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-4 items-start">
              <div className="w-9 h-9 rounded-full border-[1.5px] border-[#C4952A] flex items-center justify-center shrink-0 mt-0.5">
                <span className="font-serif text-[12px] text-[#C4952A]">
                  {s.num}
                </span>
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-sans text-[11px] font-semibold text-white">
                    {s.title}
                  </h3>
                  <span className="font-sans text-[7.5px] uppercase tracking-[0.1em] text-white/40 shrink-0">
                    {s.when}
                  </span>
                </div>
                <p className="font-body text-[9px] text-white/55 leading-[1.55] mt-0.5 max-w-[380px]">
                  {s.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sign-off block */}
        <div className="mt-5 pt-5 border-t border-white/10">
          <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-[#C4952A] mb-3">
            Acceptance
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { role: "For Mountain Property", name: "Name · Title · Date" },
              { role: "For LandIQ", name: "Name · Director · Date" },
            ].map((p) => (
              <div key={p.role}>
                <p className="font-sans text-[8px] text-white/50 mb-3">
                  {p.role}
                </p>
                <div className="h-[1px] bg-white/25" />
                <p className="font-sans text-[7.5px] text-white/40 mt-1.5">
                  {p.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-[#C4952A]/70">
              Powered by Metatree AI Lab
            </p>
            <p className="font-sans text-[7px] text-white/40">
              hello@jiangren.com.au
            </p>
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <p className="font-sans text-[6.5px] text-white/35">
              AI consulting division of JR Academy
            </p>
            <p className="font-sans text-[6.5px] uppercase tracking-[0.1em] text-white/25">
              Proposal valid 30 days · Supersedes all prior drafts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
