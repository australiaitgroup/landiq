"use client";

const apps = [
  {
    name: "Enterprise Portal",
    stack: "Vite 6 · React 19 · shadcn/ui",
    role:
      "Day-to-day workspace for Mountain Property users — search sites, generate feasibility reports, manage the land pipeline.",
  },
  {
    name: "Admin Console",
    stack: "Vite 6 · React 19 · shadcn/ui",
    role:
      "Super-admin surface — users, organisations, audit logs, system config. Only Mountain Property admins.",
  },
  {
    name: "API Server",
    stack: "NestJS 11 · TypeORM · JWT",
    role:
      "Unified REST backend at /api/v1 — auth, RBAC, documents, pipeline, report jobs.",
  },
  {
    name: "Data & ETL",
    stack: "Python · Prefect · dbt · PostGIS",
    role:
      "Ingests government planning data nationally; normalises Bronze → Silver → Gold.",
  },
  {
    name: "AI Pipeline",
    stack: "Multi-agent crew · Claude + OpenAI · pgvector",
    role:
      "Planner + specialist agents + critic + composer. RAG over Mountain Property's documents + gov data. Multi-model and multi-agent by design.",
  },
];

export function OverviewPage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Technical Solution · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">02</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Platform at a Glance
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-6" />

      <h2 className="font-serif text-[22px] leading-[1.25] text-[#134A32] max-w-[420px]">
        Five coordinated components — one operating system for land
        feasibility.
      </h2>

      <p className="font-body text-[10px] text-[#85979B] leading-[1.7] mt-3 max-w-[440px]">
        The Phase 1 platform is built as a small number of well-defined
        services. Each has one responsibility, a clear interface, and
        can be scaled or replaced independently. Every line of code
        runs in Mountain Property&apos;s cloud account.
      </p>

      <div className="mt-6 space-y-2.5 flex-1">
        {apps.map((a, i) => (
          <div
            key={a.name}
            className="grid grid-cols-[40px_160px_1fr] items-start gap-3 rounded-lg border border-[#E9EAE5] bg-[#F9FAF8] px-4 py-3"
          >
            <div>
              <span className="font-serif text-[15px] text-[#134A32]">
                0{i + 1}
              </span>
            </div>
            <div>
              <p className="font-sans text-[11px] font-semibold text-[#134A32]">
                {a.name}
              </p>
              <p className="font-sans text-[7.5px] text-[#85979B] mt-0.5 uppercase tracking-[0.05em]">
                {a.stack}
              </p>
            </div>
            <p className="font-body text-[9px] text-[#85979B] leading-[1.55]">
              {a.role}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-[#E9EAE5]">
        <div className="grid grid-cols-3 gap-5">
          {[
            { value: "1 API", label: "Single backend, single auth" },
            { value: "AU only", label: "Data residency guaranteed" },
            { value: "Zero lock-in", label: "All IP transfers to you" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-[15px] text-[#134A32]">{s.value}</p>
              <p className="font-sans text-[7px] text-[#85979B] mt-1 uppercase tracking-[0.05em]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
