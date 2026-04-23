"use client";

const parties = [
  {
    role: "Client",
    entity: "Mountain Property (ABN TBD)",
    address: "Registered office — Sydney, NSW",
    contact: "Product owner — Name · Title · email · phone",
  },
  {
    role: "Supplier",
    entity: "LandIQ (ABN TBD)",
    address: "Registered office — Sydney, NSW",
    contact: "Engagement director — Name · Director · email · phone",
  },
];

const defs = [
  {
    t: "Platform",
    d: "The LandIQ Phase 1 MVP software system as described in the Scope of Work.",
  },
  {
    t: "Milestone",
    d: "A formally-defined deliverable (M0–M4) that, once accepted, triggers a payment.",
  },
  {
    t: "Acceptance",
    d: "Written confirmation by the Client's product owner that a Milestone meets its acceptance criteria.",
  },
  {
    t: "Change Order",
    d: "A written, signed instruction amending scope, fees, or timeline against this SoW.",
  },
  {
    t: "Business Day",
    d: "A day other than a Saturday, Sunday, or NSW public holiday.",
  },
];

export function DefinitionsPage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          SoW · Phase 1 MVP
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">02</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Parties & Definitions
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[20px] leading-[1.25] text-[#134A32]">
        Who&apos;s contracting, and what we mean by the words we use.
      </h2>

      {/* Parties */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        {parties.map((p) => (
          <div
            key={p.role}
            className="rounded-lg border border-[#E9EAE5] bg-[#F9FAF8] p-3"
          >
            <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-[#C4952A] font-semibold mb-1.5">
              {p.role}
            </p>
            <p className="font-sans text-[11px] font-semibold text-[#134A32]">
              {p.entity}
            </p>
            <p className="font-body text-[8.5px] text-[#85979B] mt-1 leading-[1.55]">
              {p.address}
            </p>
            <p className="font-body text-[8.5px] text-[#85979B] mt-0.5 leading-[1.55]">
              {p.contact}
            </p>
          </div>
        ))}
      </div>

      {/* Engagement */}
      <div className="mt-4 rounded-lg bg-[#134A32] p-4">
        <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-[#C4952A] font-semibold mb-2">
          Engagement summary
        </p>
        <div className="grid grid-cols-4 gap-3">
          {[
            { l: "Engagement type", v: "Fixed-fee build" },
            { l: "Total fee", v: "AUD $90,000 + GST" },
            { l: "Duration", v: "~13 weeks (3 months)" },
            { l: "Start", v: "On M0 acceptance" },
          ].map((x) => (
            <div key={x.l}>
              <p className="font-sans text-[7px] text-white/50 uppercase tracking-[0.08em] mb-1">
                {x.l}
              </p>
              <p className="font-sans text-[10px] text-white font-semibold">
                {x.v}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Definitions */}
      <div className="mt-4 flex-1">
        <p className="font-sans text-[7.5px] uppercase tracking-[0.12em] text-[#134A32] font-semibold mb-2">
          Definitions
        </p>
        <div className="rounded-lg border border-[#E9EAE5] overflow-hidden">
          {defs.map((d, i) => (
            <div
              key={d.t}
              className={`grid grid-cols-[120px_1fr] ${
                i > 0 ? "border-t border-[#E9EAE5]" : ""
              }`}
            >
              <div className="bg-[#F5F6F3] px-3 py-2">
                <p className="font-sans text-[8px] font-semibold text-[#134A32]">
                  {d.t}
                </p>
              </div>
              <div className="px-3 py-2">
                <p className="font-body text-[8.5px] text-[#85979B] leading-[1.55]">
                  {d.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-3 border-t border-[#E9EAE5]">
        <p className="font-sans text-[7px] text-[#85979B]">
          Terms not defined in this SoW take their meaning from the master
          consulting agreement between the parties.
        </p>
      </div>
    </div>
  );
}
