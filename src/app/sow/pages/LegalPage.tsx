"use client";

const clauses = [
  {
    title: "Intellectual property",
    body: "All source code, AI prompts, embeddings, model configurations, and documentation produced under this SoW vest in the Client progressively on acceptance of each Milestone, and fully on payment of the final Milestone. The Supplier retains no residual licence over Phase 1 deliverables. The Supplier retains rights to pre-existing generic libraries and tooling referenced in code.",
  },
  {
    title: "Data ownership & confidentiality",
    body: "All data ingested, generated, or stored by the Platform is the Client's property. The Supplier will not use, copy, or disclose Client data outside the engagement. Both parties will maintain confidentiality under the master agreement's confidentiality clause; this SoW is itself Confidential Information.",
  },
  {
    title: "Change control",
    body: "Any modification to scope, fees, timeline, or acceptance criteria must be documented as a Change Order, signed by both parties before work against the change commences. The Supplier will prepare the Change Order within 3 business days of a change request; the Client will respond within 5 business days.",
  },
  {
    title: "Acceptance process",
    body: "On completion of a Milestone, the Supplier will demo the deliverables and provide an Acceptance Note. The Client's Product Owner has 5 business days to confirm acceptance or raise specific, objective defects in writing. The Supplier will fix raised defects and re-submit for acceptance. Silence beyond 5 business days is deemed acceptance.",
  },
  {
    title: "Warranty & hypercare",
    body: "The Supplier warrants that Phase 1 deliverables will materially conform to the acceptance criteria for 30 days post-M4. Defects raised in that window are corrected at no additional cost. Extended support is available under a separate retainer.",
  },
  {
    title: "Liability",
    body: "Each party's aggregate liability under this SoW is capped at the total fees paid or payable under it. Neither party is liable for indirect or consequential loss. Nothing in this SoW excludes liability that cannot be excluded by law.",
  },
  {
    title: "Termination",
    body: "Either party may terminate for uncured material breach on 14 days' written notice. On termination, the Client pays the Supplier for work performed and deliverables accepted to that date; the Supplier hands over all in-progress artefacts.",
  },
  {
    title: "Governing law",
    body: "This SoW is governed by the laws of New South Wales, Australia. The parties submit to the exclusive jurisdiction of its courts.",
  },
];

export function LegalPage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          SoW · Phase 1 MVP
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">09</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        IP · Confidentiality · Change Control · Acceptance
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[18px] leading-[1.25] text-[#134A32]">
        Key legal and operational terms governing this engagement.
      </h2>

      <div className="mt-4 space-y-2.5 flex-1 overflow-hidden">
        {clauses.map((c, i) => (
          <div
            key={c.title}
            className="rounded border border-[#E9EAE5] bg-[#F9FAF8] p-2.5"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-[7.5px] font-bold text-[#C4952A]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-sans text-[9.5px] font-semibold text-[#134A32]">
                {c.title}
              </p>
            </div>
            <p className="font-body text-[7.5px] text-[#85979B] leading-[1.55] mt-1 ml-6">
              {c.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-[#E9EAE5]">
        <p className="font-sans text-[7px] text-[#85979B] leading-[1.6]">
          These terms supplement the master consulting agreement; any
          conflict is resolved in favour of the master agreement, except
          that this SoW&apos;s IP clause prevails for Phase 1 deliverables.
        </p>
      </div>
    </div>
  );
}
