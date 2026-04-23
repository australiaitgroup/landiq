"use client";

const weOffer = [
  "Architecture & build — API, Portal, Console, Data Engine, AI Pipeline",
  "Integration work against government planning endpoints",
  "AI prompt engineering, RAG pipeline, and report templates",
  "Cloud infra-as-code (Terraform) for AWS or Azure",
  "Source-code, documentation, training, and production cut-over",
  "30-day post-launch hypercare after M4",
];

const clientProvides = [
  "One product owner — ~2 hours per week (sign-off, priorities, access)",
  "3–5 reference sites with known outcomes (calibration set)",
  "Existing feasibility report samples + preferred template structure",
  "Cloud account (AWS or Azure, AU region) + commercial LLM API key",
  "Access to any internal documents to be ingested into RAG corpus",
  "Legal / compliance review sign-off when requested",
];

export function DeliveryPage() {
  return (
    <div className="w-full h-full bg-[#F5F6F3] p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Technical Solution · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">09</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Delivery Approach
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[22px] leading-[1.25] text-[#134A32] max-w-[420px]">
        Two responsibilities. One clean interface.
      </h2>

      <p className="font-body text-[9.5px] text-[#85979B] leading-[1.65] mt-3 max-w-[440px]">
        The engagement is deliberately low-friction. LandIQ ships
        engineering; Mountain Property provides direction, accounts,
        and domain input. Anything outside these two lists is a
        written change order.
      </p>

      {/* Two columns */}
      <div className="grid grid-cols-2 gap-4 mt-6 flex-1">
        {/* LandIQ */}
        <div className="rounded-lg bg-[#134A32] p-4">
          <p className="font-sans text-[7.5px] uppercase tracking-[0.15em] text-[#C4952A] mb-2">
            LandIQ delivers
          </p>
          <h3 className="font-serif text-[14px] text-white leading-[1.3] mb-3">
            Engineering, design, AI, infra, handover.
          </h3>
          <ul className="space-y-1.5">
            {weOffer.map((w, i) => (
              <li
                key={i}
                className="flex gap-2 font-body text-[8px] text-white/80 leading-[1.55]"
              >
                <span className="text-[#C4952A] shrink-0">◆</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mountain Property */}
        <div className="rounded-lg bg-white border border-[#E9EAE5] p-4">
          <p className="font-sans text-[7.5px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
            Mountain Property provides
          </p>
          <h3 className="font-serif text-[14px] text-[#134A32] leading-[1.3] mb-3">
            Direction, accounts, and domain input.
          </h3>
          <ul className="space-y-1.5">
            {clientProvides.map((c, i) => (
              <li
                key={i}
                className="flex gap-2 font-body text-[8px] text-[#134A32] leading-[1.55]"
              >
                <span className="text-[#C4952A] shrink-0">◆</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cadence strip */}
      <div className="mt-4 rounded-lg bg-[#E8F0EC] border border-[#134A32]/15 px-4 py-3">
        <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-[#134A32] font-semibold mb-1">
          Working rhythm
        </p>
        <p className="font-body text-[9px] text-[#134A32] leading-[1.6]">
          Weekly 30-min review · stage-end demo + written acceptance ·
          shared Linear/GitHub visibility · response SLA 1 business day
          during build.
        </p>
      </div>
    </div>
  );
}
