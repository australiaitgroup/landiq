"use client";

export function ArchitecturePage() {
  return (
    <div className="w-full h-full bg-[#F5F6F3] p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Technical Solution · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">03</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        System Architecture
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-4" />

      <h2 className="font-serif text-[20px] leading-[1.2] text-[#134A32] max-w-[430px]">
        Four coordinated tiers + an external-systems boundary.
      </h2>

      <p className="font-body text-[8.5px] text-[#85979B] leading-[1.55] mt-2 max-w-[470px]">
        Request flow is top-down; ingestion and AI jobs run asynchronously
        on the right. Every tier has one responsibility and a typed
        interface — tiers can scale, cache, or be replaced independently.
      </p>

      {/* Architecture diagram */}
      <div className="mt-3 rounded-lg border border-[#E9EAE5] bg-white p-3 flex-1 flex flex-col">
        {/* Tier 1 — Presentation */}
        <div className="rounded-md bg-[#E8F0EC] border border-[#134A32]/15 p-2">
          <div className="flex items-baseline justify-between mb-1">
            <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-[#134A32] font-semibold">
              Tier 1 · Presentation
            </p>
            <p className="font-sans text-[6.5px] text-[#85979B]">
              TypeScript · React 19 · shadcn/ui
            </p>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {["Portal", "Console", "Marketing Web", "Shared Package"].map(
              (name) => (
                <div
                  key={name}
                  className="rounded bg-white px-2 py-1.5 border border-[#134A32]/10 flex items-center justify-center"
                >
                  <p className="font-sans text-[8.5px] text-[#134A32] font-semibold leading-tight">
                    {name}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <p className="font-sans text-[7.5px] text-[#85979B] text-center my-1">
          ↓ HTTPS + JWT · typed DTOs from Shared Package
        </p>

        {/* Tier 2 — API & Orchestration */}
        <div className="rounded-md bg-[#134A32] p-2">
          <div className="flex items-baseline justify-between mb-1">
            <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-[#C4952A] font-semibold">
              Tier 2 · API & Orchestration
            </p>
            <p className="font-sans text-[6.5px] text-white/60">
              NestJS 11 · BullMQ · Prefect · Node 20
            </p>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { name: "NestJS API", stack: "REST /api/v1 + guards" },
              { name: "BullMQ Workers", stack: "Async jobs" },
              { name: "Redis", stack: "Queue + cache" },
              { name: "Prefect Orchestrator", stack: "Scheduled flows" },
            ].map((b) => (
              <div
                key={b.name}
                className="rounded bg-white/10 px-2 py-1 border border-white/10"
              >
                <p className="font-sans text-[8px] text-white font-semibold leading-tight">
                  {b.name}
                </p>
                <p className="font-sans text-[6.5px] text-white/55 mt-0.5 leading-tight">
                  {b.stack}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="font-sans text-[7.5px] text-[#85979B] text-center my-1">
          ↓ dispatches jobs · composes prompts
        </p>

        {/* Tier 3 — AI & Processing */}
        <div className="rounded-md bg-[#FFF8E1] border border-[#C4952A]/40 p-2">
          <div className="flex items-baseline justify-between mb-1">
            <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-[#C4952A] font-semibold">
              Tier 3 · AI & Processing Pipelines
            </p>
            <p className="font-sans text-[6.5px] text-[#85979B]">
              Python · asyncio · pdfplumber · Claude / OpenAI
            </p>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { name: "Report Generator", stack: "Multi-agent crew + harness" },
              { name: "RAG Pipeline", stack: "Chunk · embed · retrieve" },
              { name: "DCP Parser", stack: "PDF extract → structured" },
              { name: "Ingestion Pipeline", stack: "owslib · httpx · scrapy" },
            ].map((b) => (
              <div
                key={b.name}
                className="rounded bg-white px-2 py-1 border border-[#C4952A]/25"
              >
                <p className="font-sans text-[8px] text-[#134A32] font-semibold leading-tight">
                  {b.name}
                </p>
                <p className="font-sans text-[6.5px] text-[#85979B] mt-0.5 leading-tight">
                  {b.stack}
                </p>
              </div>
            ))}
          </div>
          {/* Model routing badge */}
          <div className="mt-1.5 pt-1.5 border-t border-[#C4952A]/25 flex items-center justify-between">
            <p className="font-sans text-[6.5px] uppercase tracking-[0.1em] text-[#85979B]">
              Model routing (pluggable)
            </p>
            <div className="flex gap-1.5">
              {["Claude Sonnet / Opus", "OpenAI GPT-5", "text-embedding-3-small"].map(
                (m) => (
                  <span
                    key={m}
                    className="font-sans text-[6.5px] text-[#134A32] bg-white border border-[#C4952A]/30 px-1.5 py-0.5 rounded-full"
                  >
                    {m}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <p className="font-sans text-[7.5px] text-[#85979B] text-center my-1">
          ↓ reads Gold features · writes embeddings, reports, lineage
        </p>

        {/* Tier 4 — Data Layer */}
        <div className="rounded-md bg-[#E9EAE5] border border-[#134A32]/10 p-2">
          <div className="flex items-baseline justify-between mb-1">
            <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-[#134A32] font-semibold">
              Tier 4 · Data Layer
            </p>
            <p className="font-sans text-[6.5px] text-[#85979B]">
              PostgreSQL 16 · PostGIS · pgvector · S3
            </p>
          </div>
          {/* Postgres with sublayers */}
          <div className="rounded bg-white px-2 py-1.5 border border-[#134A32]/10 mb-1.5">
            <div className="flex items-center justify-between mb-1">
              <p className="font-sans text-[8px] text-[#134A32] font-semibold">
                PostgreSQL 16 (+ PostGIS + pgvector)
              </p>
              <p className="font-sans text-[6.5px] text-[#85979B]">
                Medallion
              </p>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {[
                { t: "Bronze", c: "#8B5A2B", d: "Raw gov payloads" },
                { t: "Silver", c: "#85979B", d: "Cleaned + GDA2020" },
                { t: "Gold", c: "#C4952A", d: "Pre-joined lot features" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-sm bg-[#F9FAF8] px-1.5 py-0.5 border-l-[2.5px]"
                  style={{ borderLeftColor: x.c }}
                >
                  <p
                    className="font-sans text-[7px] font-bold uppercase tracking-[0.06em]"
                    style={{ color: x.c }}
                  >
                    {x.t}
                  </p>
                  <p className="font-sans text-[6.5px] text-[#85979B] leading-tight">
                    {x.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { name: "pgvector (1536-d)", stack: "RAG embeddings" },
              { name: "PostGIS", stack: "Spatial JOINs + reproject" },
              { name: "S3 / Blob", stack: "PDFs + generated reports" },
            ].map((b) => (
              <div
                key={b.name}
                className="rounded bg-white px-2 py-1 border border-[#134A32]/10"
              >
                <p className="font-sans text-[7.5px] text-[#134A32] font-semibold leading-tight">
                  {b.name}
                </p>
                <p className="font-sans text-[6.5px] text-[#85979B] leading-tight">
                  {b.stack}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* External systems boundary */}
        <div className="mt-1.5 pt-1.5 border-t-2 border-dashed border-[#E9EAE5]">
          <p className="font-sans text-[6.5px] uppercase tracking-[0.12em] text-[#85979B] font-semibold mb-1">
            External systems boundary ↕ (async, retried, cached)
          </p>
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { name: "Gov APIs", d: "State & council ArcGIS · WFS · G-NAF" },
              { name: "Paid data", d: "Domain · CoreLogic" },
              { name: "LLM APIs", d: "Anthropic · OpenAI" },
              { name: "SaaS", d: "SendGrid · Sentry · CartoDB" },
            ].map((b) => (
              <div
                key={b.name}
                className="rounded bg-[#F9FAF8] border border-[#E9EAE5] px-2 py-1"
              >
                <p className="font-sans text-[7.5px] text-[#134A32] font-semibold leading-tight">
                  {b.name}
                </p>
                <p className="font-sans text-[6.5px] text-[#85979B] leading-tight mt-0.5">
                  {b.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 pt-2 border-t border-[#D1D5D0]">
        <p className="font-sans text-[7px] text-[#85979B] leading-[1.55]">
          Deployment target: Mountain Property&apos;s AWS (Sydney) or Azure
          (AU East). Every tier replicable across regions; all external
          calls retried + cached to isolate the platform from upstream
          flakiness.
        </p>
      </div>
    </div>
  );
}
