"use client";

export function SignOffPage() {
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
            SoW · Phase 1 MVP
          </p>
          <p className="font-sans text-[7px] text-white/30">10</p>
        </div>

        <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#C4952A] mb-2">
          Execution
        </p>
        <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

        <h2 className="font-serif text-[24px] leading-[1.2] text-white max-w-[380px]">
          Signed for execution by both parties.
        </h2>

        <p className="font-body text-[10px] text-white/60 leading-[1.7] mt-4 max-w-[380px]">
          By executing this Statement of Works, each party agrees to the
          scope, fees, delivery plan, and terms set out on pages 1 – 9.
          Execution triggers kick-off and the M0 Technical Solution
          Package deliverable.
        </p>

        {/* Summary recap */}
        <div className="mt-6 rounded-lg bg-white/[0.05] border border-white/10 overflow-hidden">
          {[
            ["SoW reference", "SOW-MP-P1-2026-001 · v1.0"],
            ["Engagement", "Phase 1 MVP — fixed-fee build"],
            ["Total fee", "AUD $90,000 + GST ($99,000 incl.)"],
            ["Duration", "~13 weeks (3 months) from M0 acceptance"],
            ["First deliverable", "M0 · Technical Solution Package · $5,000"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-[140px_1fr] border-t first:border-t-0 border-white/10"
            >
              <div className="px-3 py-2 bg-white/[0.03]">
                <p className="font-sans text-[7.5px] uppercase tracking-[0.08em] text-[#C4952A] font-semibold">
                  {k}
                </p>
              </div>
              <div className="px-3 py-2">
                <p className="font-sans text-[8.5px] text-white/85">{v}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sign blocks */}
        <div className="mt-auto pt-8 grid grid-cols-2 gap-6">
          {[
            {
              role: "Signed for and on behalf of Mountain Property",
              fields: ["Name", "Title", "Date"],
            },
            {
              role: "Signed for and on behalf of LandIQ",
              fields: ["Name", "Title", "Date"],
            },
          ].map((p) => (
            <div key={p.role}>
              <p className="font-sans text-[8px] text-white/50 mb-4">
                {p.role}
              </p>
              <div className="space-y-4">
                {p.fields.map((f) => (
                  <div key={f}>
                    <div className="h-[1px] bg-white/25" />
                    <p className="font-sans text-[7.5px] text-white/40 mt-1.5">
                      {f}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-2 border-t border-white/10">
                <p className="font-sans text-[7px] text-white/30 uppercase tracking-[0.08em]">
                  Signature
                </p>
                <div className="h-10" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-white/30">
            Executed in counterparts · Electronic signature permitted
          </p>
          <p className="font-sans text-[7px] text-white/40">
            hello@landiq.com.au
          </p>
        </div>
      </div>
    </div>
  );
}
