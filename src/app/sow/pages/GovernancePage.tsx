"use client";

const clientTeam = [
  {
    role: "Executive Sponsor",
    resp: "Commercial sign-off, escalation point, quarterly review.",
    time: "Ad hoc",
  },
  {
    role: "Product Owner",
    resp: "Day-to-day decisions, priority calls, milestone acceptance.",
    time: "~2 hrs / wk",
  },
  {
    role: "Domain SME(s)",
    resp: "Calibration input, reference sites, report format review.",
    time: "Ad hoc",
  },
  {
    role: "IT / Cloud Admin",
    resp: "Cloud account access, DNS, SSO configuration.",
    time: "Onboarding + ad hoc",
  },
];

const landIqTeam = [
  {
    role: "Engagement Director",
    resp: "Commercial, scope, weekly status, milestone sign-off.",
    time: "~1 day / wk",
  },
  {
    role: "Tech Lead / Senior FS",
    resp: "Architecture, API, Portal/Console code, code review.",
    time: "Full-time",
  },
  {
    role: "Senior Full-Stack Engineer",
    resp: "Portal, Console, API features, QA.",
    time: "Full-time",
  },
  {
    role: "GIS / Data Engineer",
    resp: "Data Engine, Prefect ETL, PostGIS, AI pipeline wiring.",
    time: "Full-time",
  },
  {
    role: "Designer / AI Specialist",
    resp: "Design system, report prompts, evaluation harness.",
    time: "Fractional",
  },
];

const cadence = [
  { k: "Weekly status call", v: "30 min · Client Product Owner + LandIQ Director" },
  { k: "Stage-end demo", v: "60 min · full working session, recorded" },
  { k: "Shared visibility", v: "GitHub issues, Linear board, staging link" },
  { k: "Response SLA", v: "1 business day during build window" },
];

export function GovernancePage() {
  return (
    <div className="w-full h-full bg-[#F5F6F3] p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          SoW · Phase 1 MVP
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">08</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Roles, Responsibilities & Governance
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-5" />

      <h2 className="font-serif text-[20px] leading-[1.25] text-[#134A32]">
        A small team on each side. Weekly rhythm. Clean sign-offs.
      </h2>

      {/* Teams */}
      <div className="grid grid-cols-2 gap-3 mt-5">
        {[
          {
            title: "Client — Mountain Property",
            rows: clientTeam,
            accent: "#134A32",
            bg: "white",
          },
          {
            title: "Supplier — LandIQ",
            rows: landIqTeam,
            accent: "#C4952A",
            bg: "#134A32",
            invert: true,
          },
        ].map((t) => (
          <div
            key={t.title}
            className="rounded-lg p-3 border border-[#E9EAE5]"
            style={{
              background: t.bg,
              borderColor: t.invert ? "#134A32" : "#E9EAE5",
            }}
          >
            <p
              className={`font-sans text-[7.5px] uppercase tracking-[0.15em] font-semibold mb-2 ${
                t.invert ? "text-[#C4952A]" : "text-[#134A32]"
              }`}
            >
              {t.title}
            </p>
            <div className="space-y-1.5">
              {t.rows.map((r) => (
                <div
                  key={r.role}
                  className={`pb-1.5 border-b last:border-b-0 ${
                    t.invert ? "border-white/10" : "border-[#E9EAE5]"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <p
                      className={`font-sans text-[9px] font-semibold ${
                        t.invert ? "text-white" : "text-[#134A32]"
                      }`}
                    >
                      {r.role}
                    </p>
                    <p
                      className={`font-sans text-[7px] shrink-0 ${
                        t.invert ? "text-[#C4952A]" : "text-[#85979B]"
                      }`}
                    >
                      {r.time}
                    </p>
                  </div>
                  <p
                    className={`font-body text-[8px] leading-[1.5] mt-0.5 ${
                      t.invert ? "text-white/60" : "text-[#85979B]"
                    }`}
                  >
                    {r.resp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Cadence */}
      <div className="mt-4 rounded-lg bg-white border border-[#E9EAE5] overflow-hidden">
        <div className="px-4 py-2 bg-[#F5F6F3] border-b border-[#E9EAE5]">
          <p className="font-sans text-[8px] uppercase tracking-[0.1em] text-[#134A32] font-semibold">
            Working cadence
          </p>
        </div>
        {cadence.map((c) => (
          <div
            key={c.k}
            className="grid grid-cols-[160px_1fr] border-t first:border-t-0 border-[#E9EAE5]"
          >
            <div className="bg-[#F9FAF8] px-3 py-2">
              <p className="font-sans text-[8px] text-[#134A32] font-semibold">
                {c.k}
              </p>
            </div>
            <div className="px-3 py-2">
              <p className="font-body text-[8.5px] text-[#85979B] leading-[1.5]">
                {c.v}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-3 border-t border-[#D1D5D0]">
        <p className="font-sans text-[7.5px] text-[#85979B] leading-[1.6]">
          Escalation path: Product Owner → Engagement Director →
          Executive Sponsor. Any unresolved dispute is raised in writing
          within 5 business days.
        </p>
      </div>
    </div>
  );
}
