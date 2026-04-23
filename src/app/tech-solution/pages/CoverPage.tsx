"use client";

export function CoverPage() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#134A32]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('/landiq/images/aerial/aerial-development-03.jpg')",
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        viewBox="0 0 600 850"
        preserveAspectRatio="xMidYMid slice"
      >
        {[80, 160, 240, 320, 400, 480, 560, 640, 720, 800].map((y, i) => (
          <path
            key={i}
            d={`M-50 ${y} Q150 ${y - 22 + i * 5} 300 ${y + 12} T650 ${y - 3}`}
            fill="none"
            stroke="white"
            strokeWidth="0.8"
          />
        ))}
      </svg>

      <div className="relative z-10 h-full flex flex-col justify-between p-[42px]">
        <div>
          <div className="w-[2px] h-10 bg-[#C4952A] mb-4" />
          <p className="font-sans text-[8px] uppercase tracking-[0.2em] text-white/50">
            M0 Deliverable · Technical Solution
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p className="font-sans text-[9px] uppercase tracking-[0.22em] text-[#C4952A] mb-5">
            Prepared for Mountain Property
          </p>
          <h1 className="font-serif text-[44px] leading-[1.05] text-white tracking-tight">
            Technical
            <br />
            Solution
            <br />
            Package
          </h1>
          <div className="w-16 h-[2px] bg-[#C4952A] mt-6 mb-5" />
          <p className="font-serif text-[15px] text-white/80 leading-[1.55] max-w-[340px]">
            Architecture, data flow, AI pipeline, security
            and hosting — the engineering plan behind
            Phase 1 MVP.
          </p>
          <p className="font-body text-[10px] text-white/50 mt-5 max-w-[320px] leading-[1.65]">
            Issued as the first milestone deliverable under the
            signed Statement of Works.
          </p>
        </div>

        <div>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-white/40">
                Prepared by
              </p>
              <p className="font-sans text-[9px] text-white/70 mt-1">
                LandIQ Engineering
              </p>
            </div>
            <div className="text-right">
              <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-white/40">
                Milestone M0 · AUD $5,000
              </p>
              <p className="font-sans text-[7px] text-white/30 mt-1">
                Version 1.0 · April 2026
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10">
            <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-white/30">
              Confidential · Mountain Property internal use only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
