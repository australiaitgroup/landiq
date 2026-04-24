"use client";

export function CoverPage() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Subtle geometry */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        viewBox="0 0 600 850"
        preserveAspectRatio="xMidYMid slice"
      >
        {[80, 160, 240, 320, 400, 480, 560, 640, 720].map((y, i) => (
          <path
            key={i}
            d={`M-50 ${y} Q150 ${y - 25 + i * 6} 300 ${y + 15} T650 ${y - 5}`}
            fill="none"
            stroke="#134A32"
            strokeWidth="0.8"
          />
        ))}
      </svg>

      <div className="relative z-10 h-full flex flex-col justify-between p-[42px]">
        <div>
          <div className="w-[2px] h-10 bg-[#C4952A] mb-4" />
          <p className="font-sans text-[8px] uppercase tracking-[0.2em] text-[#134A32]/60">
            Contract Document — Schedule A
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p className="font-sans text-[9px] uppercase tracking-[0.22em] text-[#C4952A] mb-5">
            Between LandIQ and Mountain Property
          </p>
          <h1 className="font-serif text-[42px] leading-[1.05] text-[#134A32] tracking-tight">
            Statement
            <br />
            of Works
          </h1>
          <div className="w-16 h-[2px] bg-[#C4952A] mt-6 mb-5" />
          <p className="font-serif text-[15px] text-[#134A32]/70 leading-[1.55] max-w-[340px]">
            Scope, delivery plan, fee schedule, and terms of
            engagement for the Phase 1 MVP build of the LandIQ
            platform.
          </p>
          <p className="font-body text-[10px] text-[#85979B] mt-5 max-w-[320px] leading-[1.65]">
            This document accompanies the commercial proposal and
            is executed as an annex to the master consulting agreement.
          </p>
        </div>

        {/* Document control table */}
        <div className="rounded-lg border border-[#E9EAE5] overflow-hidden">
          {[
            ["Document reference", "SOW-MP-P1-2026-001"],
            ["Version", "1.0 · Draft for execution"],
            ["Issue date", "April 2026"],
            ["Valid for execution", "30 days from issue"],
            ["Delivered by", "Metatree AI Lab · AI consulting division, JR Academy"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-[160px_1fr] border-t first:border-t-0 border-[#E9EAE5]"
            >
              <div className="bg-[#F5F6F3] px-3 py-2">
                <p className="font-sans text-[7.5px] uppercase tracking-[0.08em] text-[#85979B] font-semibold">
                  {k}
                </p>
              </div>
              <div className="px-3 py-2">
                <p className="font-sans text-[8.5px] text-[#134A32]">{v}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
