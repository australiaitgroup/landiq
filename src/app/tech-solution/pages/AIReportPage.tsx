"use client";

const agents = [
  {
    num: "01",
    role: "Planner agent",
    desc: "Reads the site brief + Mountain Property template. Scopes sections and writes a typed task brief for each specialist.",
    tone: "primary",
  },
  {
    role: "Specialist agents",
    count: "N parallel",
    desc: "One agent per domain, each with a narrow prompt + tool set. Run concurrently, independently retryable.",
    tone: "accent",
    roster: [
      "ZoningAgent",
      "YieldAgent",
      "HazardAgent",
      "DCPComplianceAgent",
      "ComparablesAgent",
      "ROIAgent",
    ],
  },
  {
    num: "03",
    role: "Critic agent",
    desc: "Independent reviewer — never sees the specialist's chain-of-thought, only its claims + tool outputs. Verifies citations, arithmetic, internal consistency. Fails send the section back to its specialist.",
    tone: "primary",
  },
  {
    num: "04",
    role: "Composer agent",
    desc: "Merges verified sections into the final deliverable. Enforces template order, page numbering, cross-references, and render to PDF / DOCX.",
    tone: "primary",
  },
];

const tools = [
  {
    sig: "site_profile(address)",
    ret: "Gold-layer lot features — zoning, FSR, height, overlays",
  },
  {
    sig: "rag_search(query, k)",
    ret: "Top-k chunks from Client document corpus (pgvector)",
  },
  {
    sig: "dcp_rules(lga, controls[])",
    ret: "Structured DCP rules — setback, height, parking",
  },
  {
    sig: "yield_calc(fsr, lot_area, efficiency)",
    ret: "GFA + dwelling-yield estimate",
  },
  {
    sig: "roi_calc(revenue, cost, time, discount)",
    ret: "Indicative margin, IRR",
  },
  {
    sig: "comps_search(lot, radius, filters)",
    ret: "Recent sales — Domain / CoreLogic",
  },
  {
    sig: "cite(fact, source_id)",
    ret: "Enforced citation — no cite, critic rejects",
  },
];

const harness = [
  {
    k: "Per-agent eval",
    v: "Each specialist has its own golden set + rubric, evaluated independently",
  },
  {
    k: "Crew-level eval",
    v: "End-to-end runs on Mountain Property benchmark sites, scored against known outcomes",
  },
  {
    k: "CI eval gate",
    v: "Every prompt / agent PR runs the harness; regressions block merge",
  },
  {
    k: "Observability",
    v: "Per-agent token cost, latency, retry count, tool-call trace to telemetry",
  },
  {
    k: "A/B across models",
    v: "Any agent can be routed to Claude or OpenAI — results diffed",
  },
];

export function AIReportPage() {
  return (
    <div className="w-full h-full bg-[#E9EAE5] p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Technical Solution · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">06</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Multi-Agent Report System & Harness
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-4" />

      <h2 className="font-serif text-[20px] leading-[1.2] text-[#134A32] max-w-[460px]">
        A crew of agents — planner, specialists, critic, composer.
      </h2>

      <p className="font-body text-[8.5px] text-[#85979B] leading-[1.55] mt-2 max-w-[470px]">
        A 20-page institutional feasibility report cannot come from one
        prompt, or even one agent. Phase 1 ships a{" "}
        <span className="font-semibold text-[#134A32]">
          multi-agent system
        </span>
        : a planner scopes the work, several domain-specialist agents
        run in parallel, an independent critic verifies, and a composer
        assembles. Every step is wrapped in an{" "}
        <span className="font-semibold text-[#134A32]">
          evaluation harness
        </span>
        .
      </p>

      {/* Agent crew — 4 role cards */}
      <div className="mt-3 rounded-lg bg-white border border-[#E9EAE5] p-3">
        <div className="flex items-baseline justify-between mb-2">
          <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-[#C4952A] font-semibold">
            The crew — 4 agent roles
          </p>
          <p className="font-sans text-[6.5px] text-[#85979B]">
            Plan → Specialists (parallel) → Critic → Compose
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {agents.map((a) => {
            const isAccent = a.tone === "accent";
            return (
              <div
                key={a.role}
                className={`relative rounded-md border p-2 ${
                  isAccent
                    ? "bg-[#FFF8E1] border-[#C4952A]/40"
                    : "bg-[#F9FAF8] border-[#E9EAE5]"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      isAccent ? "bg-[#C4952A]" : "bg-[#134A32]"
                    }`}
                  >
                    <span className="font-serif text-[7.5px] text-white leading-none">
                      {a.count ? "02" : a.num}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-[9px] font-semibold text-[#134A32] leading-tight">
                      {a.role}
                    </p>
                    {a.count && (
                      <p className="font-sans text-[6.5px] text-[#C4952A] font-semibold uppercase tracking-[0.08em] leading-tight">
                        {a.count}
                      </p>
                    )}
                  </div>
                </div>
                <p className="font-body text-[7px] text-[#85979B] leading-[1.5]">
                  {a.desc}
                </p>
                {a.roster && (
                  <div className="mt-1.5 pt-1.5 border-t border-[#C4952A]/25 flex flex-wrap gap-1">
                    {a.roster.map((r) => (
                      <span
                        key={r}
                        className="font-sans text-[6.5px] text-[#134A32] bg-white border border-[#C4952A]/30 px-1.5 py-0.5 rounded-full"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-2 pt-1.5 border-t border-[#E9EAE5] grid grid-cols-3 gap-3">
          {[
            {
              t: "Why multi-agent",
              d: "Narrower context per specialist → higher per-section accuracy.",
            },
            {
              t: "Parallelism",
              d: "Specialists run concurrently — end-to-end latency stays flat as sections grow.",
            },
            {
              t: "Independent critic",
              d: "Critic never sees the draft's reasoning — catches errors specialist can't see in itself.",
            },
          ].map((p) => (
            <div key={p.t}>
              <p className="font-sans text-[7.5px] font-semibold text-[#134A32] leading-tight">
                {p.t}
              </p>
              <p className="font-body text-[6.5px] text-[#85979B] leading-[1.5] mt-0.5">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tool catalogue + Harness */}
      <div className="mt-3 grid grid-cols-[1.2fr_1fr] gap-3 flex-1">
        <div className="rounded-lg bg-white border border-[#E9EAE5] overflow-hidden">
          <div className="px-3 py-1.5 bg-[#F5F6F3] border-b border-[#E9EAE5] flex items-baseline justify-between">
            <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-[#134A32] font-semibold">
              Shared tool catalogue
            </p>
            <p className="font-sans text-[6.5px] text-[#85979B]">
              Typed · enforced by agent framework
            </p>
          </div>
          {tools.map((t) => (
            <div
              key={t.sig}
              className="grid grid-cols-[180px_1fr] px-3 py-[5px] border-t border-[#E9EAE5] items-start first:border-t-0"
            >
              <code className="font-mono text-[7.5px] text-[#134A32] bg-[#F9FAF8] px-1.5 py-0.5 rounded w-fit leading-tight">
                {t.sig}
              </code>
              <span className="font-body text-[7px] text-[#85979B] leading-[1.45] pt-0.5">
                {t.ret}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-[#134A32] p-3">
          <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-[#C4952A] font-semibold mb-1.5">
            Evaluation harness
          </p>
          <p className="font-body text-[7.5px] text-white/70 leading-[1.5] mb-2">
            The harness is what keeps a multi-agent crew reliable over
            time. Without it, prompt drift destroys quality silently.
          </p>
          <div className="space-y-1.5">
            {harness.map((h) => (
              <div key={h.k}>
                <p className="font-sans text-[8px] font-semibold text-[#C4952A] leading-tight">
                  {h.k}
                </p>
                <p className="font-body text-[6.5px] text-white/70 leading-[1.45]">
                  {h.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom facts */}
      <div className="mt-3 pt-3 border-t border-[#D1D5D0] grid grid-cols-4 gap-3">
        {[
          { v: "6+", l: "Specialist agents in parallel" },
          { v: "15–30 pp", l: "Institutional report length" },
          { v: "≤ 60s", l: "Crew end-to-end (parallel)" },
          { v: "100%", l: "Claims cited — or rejected" },
        ].map((s) => (
          <div key={s.l}>
            <p className="font-serif text-[14px] text-[#134A32]">{s.v}</p>
            <p className="font-sans text-[6.5px] text-[#85979B] mt-0.5 uppercase tracking-[0.05em] leading-tight">
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
