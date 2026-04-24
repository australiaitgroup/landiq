"use client";

export function BackCoverPage() {
  return (
    <div className="w-full h-full bg-[#0D3423] p-[42px] flex flex-col relative overflow-hidden">
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
        <div className="flex items-center justify-between mb-8">
          <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-white/30">
            Technical Solution · Mountain Property
          </p>
          <p className="font-sans text-[7px] text-white/30">10</p>
        </div>

        <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#C4952A] mb-2">
          M0 Acceptance
        </p>
        <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

        <h2 className="font-serif text-[24px] leading-[1.2] text-white max-w-[380px]">
          This pack is the M0 deliverable.
        </h2>

        <p className="font-body text-[10px] text-white/60 leading-[1.7] mt-4 max-w-[380px]">
          Sign-off of this Technical Solution Package unlocks the first
          milestone invoice of AUD $5,000 and authorises LandIQ to begin
          Stage 1 — Foundation.
        </p>

        {/* Deliverable checklist */}
        <div className="mt-6 rounded-lg bg-white/[0.04] border border-white/10 p-4">
          <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-[#C4952A] mb-2">
            This document covers
          </p>
          <div className="grid grid-cols-2 gap-x-5 gap-y-1.5">
            {[
              "Platform overview & apps",
              "System architecture",
              "National data engine design",
              "AI report pipeline",
              "Security & data residency",
              "Hosting options",
              "Delivery responsibilities",
              "Working rhythm & SLAs",
            ].map((x) => (
              <div key={x} className="flex items-center gap-2">
                <span className="text-[#C4952A] text-[10px]">✓</span>
                <p className="font-sans text-[8.5px] text-white/80">{x}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sign-off */}
        <div className="mt-auto pt-6 border-t border-white/10">
          <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-[#C4952A] mb-3">
            Acceptance of M0
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

        <div className="mt-5 pt-4 border-t border-white/10">
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
              Confidential · Mountain Property internal use only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
