"use client";

export function CoverPage() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#0D3423]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('/landiq/images/aerial/aerial-suburb-01.jpg')",
        }}
      />

      {/* Topographic lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        viewBox="0 0 600 850"
        preserveAspectRatio="xMidYMid slice"
      >
        {[100, 180, 260, 340, 420, 500, 580, 660, 740].map((y, i) => (
          <path
            key={i}
            d={`M-50 ${y} Q150 ${y - 25 + i * 6} 300 ${y + 15} T650 ${y - 5}`}
            fill="none"
            stroke="white"
            strokeWidth="0.8"
          />
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-[42px]">
        {/* Top */}
        <div>
          <div className="w-[2px] h-10 bg-[#C4952A] mb-4" />
          <p className="font-sans text-[8px] uppercase tracking-[0.2em] text-white/50">
            Commercial Proposal — Confidential
          </p>
        </div>

        {/* Center */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="font-sans text-[9px] uppercase tracking-[0.22em] text-[#C4952A] mb-5">
            Prepared for Mountain Property
          </p>
          <h1 className="font-serif text-[44px] leading-[1.05] text-white tracking-tight">
            Proposal —<br />
            LandIQ Platform,
            <br />
            Phase 1 MVP
          </h1>
          <div className="w-16 h-[2px] bg-[#C4952A] mt-6 mb-5" />
          <p className="font-serif text-[15px] text-white/80 leading-[1.55] max-w-[340px]">
            A 3-month build to deliver Mountain Property&apos;s
            AI-powered land feasibility platform — owned by you,
            operated by you, from day one.
          </p>
          <p className="font-body text-[10px] text-white/50 mt-5 max-w-[320px] leading-[1.65]">
            Scope, staged deliverables, and commercial terms for
            a fixed-fee engagement beginning Q2 2026.
          </p>
        </div>

        {/* Bottom */}
        <div>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-white/40">
                Prepared by
              </p>
              <p className="font-sans text-[9px] text-white/70 mt-1">
                Metatree AI Lab · Sydney
              </p>
              <p className="font-sans text-[7px] text-white/40 mt-0.5">
                AI consulting division · JR Academy
              </p>
            </div>
            <div className="text-right">
              <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-white/40">
                Version 1.0
              </p>
              <p className="font-sans text-[7px] text-white/30 mt-1">
                April 2026
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10">
            <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-white/30">
              Valid for 30 days from issue · Supersedes all prior drafts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
