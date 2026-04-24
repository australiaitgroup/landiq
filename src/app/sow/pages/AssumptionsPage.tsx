"use client";

const outOfScope = [
  "Self-hosted / on-premise LLM deployment on Client servers (Phase 1 uses cloud LLM APIs only)",
  "Construction-phase workflow tools (site progress, subcontractor management)",
  "Mobile-native apps (iOS / Android) — Phase 1 is responsive web only",
  "Bespoke analytics / BI integrations beyond the standard report export",
  "Council DCP crawlers beyond 5 reference councils",
  "Financial modelling / ROI calculator (FSR × sale price × build cost) — deferred to Phase 2",
  "Migration of existing systems or historical data beyond onboarding",
  "24×7 managed support — 30-day hypercare only post M4",
];

const assumptions = [
  "Client provides a cloud account (AWS Sydney or Azure AU East) with admin access within 5 business days of SoW execution.",
  "Client provides an LLM API key (Anthropic and/or OpenAI) with sufficient credit for Phase 1 build + testing.",
  "Client nominates a single product owner with decision-making authority, committed ~2 hrs / week.",
  "Government API endpoints remain materially unchanged during Phase 1; breaking upstream changes are handled via Change Order.",
  "Client-provided reference documents are legally clear for ingestion into the Client's private RAG corpus.",
  "Acceptance criteria review occurs within 5 business days of demo; delay beyond that extends the timeline accordingly.",
];

const dependencies = [
  "Timely access to Client's cloud account & DNS records",
  "Access to 3 – 5 reference sites with known outcomes for calibration",
  "Sample feasibility reports representing Client's preferred format",
  "Confirmation of branding assets (logo, palette overrides) at kick-off",
];

export function AssumptionsPage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          SoW · Phase 1 MVP
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">04</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Out of Scope, Assumptions & Dependencies
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[20px] leading-[1.25] text-[#134A32]">
        What&apos;s explicitly not included, and what we&apos;re counting on.
      </h2>

      {/* Out of scope */}
      <div className="mt-5 rounded-lg border border-[#E9EAE5] overflow-hidden">
        <div className="px-4 py-2 bg-[#F5F6F3] border-b border-[#E9EAE5]">
          <p className="font-sans text-[8px] uppercase tracking-[0.1em] text-[#C04040] font-semibold">
            Out of Scope (Phase 1)
          </p>
        </div>
        <ul className="px-4 py-3 grid grid-cols-2 gap-x-4 gap-y-1">
          {outOfScope.map((x, i) => (
            <li
              key={i}
              className="flex gap-1.5 font-body text-[8px] text-[#85979B] leading-[1.55]"
            >
              <span className="text-[#C04040]/60 shrink-0">×</span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Assumptions */}
      <div className="mt-3 rounded-lg border border-[#E9EAE5] overflow-hidden">
        <div className="px-4 py-2 bg-[#F5F6F3] border-b border-[#E9EAE5]">
          <p className="font-sans text-[8px] uppercase tracking-[0.1em] text-[#134A32] font-semibold">
            Assumptions
          </p>
        </div>
        <ul className="px-4 py-3 space-y-1">
          {assumptions.map((a, i) => (
            <li
              key={i}
              className="flex gap-2 font-body text-[8px] text-[#134A32] leading-[1.55]"
            >
              <span className="font-sans text-[8px] text-[#C4952A] shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Dependencies */}
      <div className="mt-3 rounded-lg border border-[#E9EAE5] overflow-hidden flex-1">
        <div className="px-4 py-2 bg-[#F5F6F3] border-b border-[#E9EAE5]">
          <p className="font-sans text-[8px] uppercase tracking-[0.1em] text-[#134A32] font-semibold">
            Client dependencies
          </p>
        </div>
        <ul className="px-4 py-3 grid grid-cols-2 gap-x-4 gap-y-1">
          {dependencies.map((d, i) => (
            <li
              key={i}
              className="flex gap-1.5 font-body text-[8px] text-[#134A32] leading-[1.55]"
            >
              <span className="text-[#C4952A] shrink-0">◆</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 pt-3 border-t border-[#E9EAE5]">
        <p className="font-sans text-[7.5px] text-[#85979B] leading-[1.6]">
          If any assumption proves incorrect or a dependency is delayed by
          more than 5 business days, the Supplier may issue a Change Order
          to adjust scope, fees, or timeline accordingly.
        </p>
      </div>
    </div>
  );
}
