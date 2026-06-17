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
    body: "Any modification to scope, fees, timeline, or acceptance criteria must be documented as a Change Order, signed by both parties before work commences. Aggregate Change Orders are capped at 10% of total contract value (AUD $9,000) without further written re-approval; anything above this requires a signed amendment. The Supplier prepares Change Orders within 3 business days of request; the Client responds within 5 business days.",
  },
  {
    title: "Acceptance process",
    body: "On completion of a Milestone, the Supplier demos the deliverables and provides an Acceptance Note. The Supplier will issue written acceptance reminders (email + Slack) to the nominated Product Owner during the review window. The Client commits to providing written acceptance, a written defects list, or a written extension request within 10 business days of milestone delivery. There is no deemed-acceptance fallback. If the Client materially fails to meet the 10-BD response commitment on a sustained basis (3+ milestones), the parties will jointly review and adjust under the Change Order process.",
  },
  {
    title: "Warranty & hypercare",
    body: "The Supplier warrants that Phase 1 deliverables will materially conform to the acceptance criteria for 30 days post-M4. Defects raised in that window are corrected at no additional cost. Extended support is available under a separate retainer.",
  },
  {
    title: "Liability & decision-support framing",
    body: "The Platform is a decision-SUPPORT tool, not a decision-MAKING tool. Every report carries an advisory-only disclaimer with cited primary sources, retrieval timestamps, and model + prompt version stamps. Acquisition decisions remain the Client's, based on the Client's own legal, planning and financial advisors. Each party's aggregate liability under this SoW is capped at the total fees paid or payable under it. Neither party is liable for indirect or consequential loss. Nothing excludes liability that cannot be excluded by law.",
  },
  {
    title: "Data portability & exit",
    body: "All Platform data is stored on the Client's cloud account; the Supplier never holds it. Daily automated PostgreSQL pg_dump + S3 sync runs to a Client-owned bucket. Government-data layers are stored as raw GeoJSON / GeoPackage in S3 (portable to any GIS, no proprietary container). Documents are stored as native files. Data export is available on demand throughout the engagement, not gated behind termination. On termination the Client receives: full DB dump, S3 inventory, infrastructure-as-code (Terraform), and a 30-day read-only environment to verify the export.",
  },
  {
    title: "Source-code escrow (opt-in)",
    body: "If the Client's legal team requires code escrow to address lock-in risk, the Supplier will arrange an annual deposit with NCC Group (Australia) or an equivalent escrow agent acceptable to the Client. Release triggers: Supplier ceases to trade, insolvency event, or uncured material breach of the support agreement. On release, the Client receives a perpetual non-exclusive licence to use, modify and self-host the deposited materials. Escrow agent fee (~AUD $1,800 / year) is pass-through, not marked up. Not bundled by default.",
  },
  {
    title: "Personnel-change handover & termination",
    body: "The Supplier is responsible for maintaining engagement continuity at the agreed service level. If assigned Supplier personnel change, the Supplier commits to a 30-day handover obligation: documentation, knowledge transfer to the replacement, continuity of services. No individual is contractually designated as irreplaceable. Either party may terminate for uncured material breach on 14 days' written notice; either party may terminate the post-handover support arrangement on 60 days' no-fault written notice. On termination, the Client pays for accepted work and the Supplier hands over all in-progress artefacts.",
  },
  {
    title: "Governing law",
    body: "This SoW is governed by the laws of Queensland, Australia, anchored to the Supplier's registered office (Level 10b, 144 Edward Street, Brisbane QLD 4000). The parties may agree in writing to a non-exclusive jurisdiction provision permitting hearings in either Queensland or the Client's preferred state's courts.",
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
