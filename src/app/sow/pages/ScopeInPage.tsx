"use client";

const scope = [
  {
    title: "Apps",
    items: [
      "Enterprise Portal (SPA) — day-to-day user workspace",
      "Admin Console (SPA) — super-admin management",
      "API Server (NestJS) — unified REST backend /api/v1",
      "Marketing Website (Next.js) — public-facing landing pages",
    ],
  },
  {
    title: "Auth, Access & Tenancy",
    items: [
      "Email + password login, JWT access + refresh tokens, password reset",
      "Multi-tenant data model — all queries scoped by organisation_id",
      "5-role RBAC: owner, admin, manager, member, viewer",
      "Invitation flow with token expiry + audit trail",
    ],
  },
  {
    title: "National Data Engine",
    items: [
      "Address → cadastral lot resolution (G-NAF + state cadastre)",
      "Live integrations with state planning portals (ArcGIS REST / WFS)",
      "Planning layers: zoning, FSR / density, height, heritage, lot size",
      "Hazard layers: bushfire, flood, landslip (where available)",
      "Bronze / Silver / Gold medallion storage + scheduled ingestion",
    ],
  },
  {
    title: "AI Feasibility Report",
    items: [
      "One-click report generator (Claude / OpenAI)",
      "Institutional-style template with cited sources",
      "RAG pipeline for Client-uploaded reference documents",
      "Multi-agent harness: planner · specialists · critic · composer",
    ],
  },
  {
    title: "Documents, Pipeline & Ops",
    items: [
      "Document hub — upload, AI tagging, search, versioning",
      "Land pipeline: lead → research → feasibility → negotiation → acquired",
      "Audit log table for privileged actions",
      "Interactive site-intelligence map (Leaflet + CartoDB tiles)",
    ],
  },
];

export function ScopeInPage() {
  return (
    <div className="w-full h-full bg-[#E9EAE5] p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          SoW · Phase 1 MVP
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">03</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Scope of Work — In Scope
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[20px] leading-[1.25] text-[#134A32]">
        Everything LandIQ will design, build, deploy and hand over.
      </h2>

      <div className="mt-5 space-y-3 flex-1">
        {scope.map((s) => (
          <div key={s.title} className="rounded-lg bg-white p-3">
            <p className="font-sans text-[10px] font-semibold text-[#134A32] mb-1.5 pb-1.5 border-b border-[#E9EAE5]">
              {s.title}
            </p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
              {s.items.map((it, i) => (
                <li
                  key={i}
                  className="flex gap-1.5 font-body text-[8px] text-[#134A32] leading-[1.5]"
                >
                  <span className="text-[#C4952A] shrink-0">·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-[#D1D5D0]">
        <p className="font-sans text-[7.5px] text-[#85979B] leading-[1.6]">
          The Supplier will also provide architecture documentation,
          infra-as-code scripts, operational runbooks and training as
          set out in Stage 4 deliverables.
        </p>
      </div>
    </div>
  );
}
