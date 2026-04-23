"use client";

const sources = [
  {
    source: "State planning portals",
    proto: "ArcGIS REST · WFS · OpenData",
    what: "Zoning, FSR, height, heritage, lot size overlays",
  },
  {
    source: "State hazard layers",
    proto: "ArcGIS REST",
    what: "Bushfire, flood planning, landslip — multiple agencies",
  },
  {
    source: "National address + cadastre",
    proto: "G-NAF · state WFS · Shapefile",
    what: "Address ↔ lot polygon resolution",
  },
  {
    source: "Council DCP PDFs (500+ councils)",
    proto: "Custom crawler + PDF parse",
    what: "Setback, height, FSR rules extracted to structured tables",
  },
  {
    source: "Transport network",
    proto: "GTFS static",
    what: "Stops, routes, transit corridors",
  },
  {
    source: "Demographics",
    proto: "ABS data cubes (SA1 / SA2)",
    what: "Population, dwelling mix, income — for market context",
  },
  {
    source: "Comparable sales",
    proto: "Domain · CoreLogic (paid)",
    what: "Recent transactions — yield + ROI inputs",
  },
  {
    source: "Aerial imagery + contours",
    proto: "WMS / tileserver",
    what: "Topography, visual context, slope-based feasibility",
  },
];

const disciplines = [
  {
    t: "Data Engineering",
    d: "Prefect ETL, medallion architecture, incremental idempotent ingestion, dbt transforms",
  },
  {
    t: "Spatial / GIS",
    d: "PostGIS, GDA2020 / EPSG:7856 reprojection, topology fixes, spatial JOINs",
  },
  {
    t: "Data Science",
    d: "Feature engineering, aggregation, risk scoring, evaluation against known outcomes",
  },
  {
    t: "Ops discipline",
    d: "Data-quality tests, schema drift alerts, retry + backoff, audit trails",
  },
];

export function DataEnginePage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Technical Solution · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">05</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        National Data Engine
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-4" />

      <h2 className="font-serif text-[21px] leading-[1.2] text-[#134A32] max-w-[440px]">
        The hardest part of the platform — and the reason it works.
      </h2>

      <p className="font-body text-[9px] text-[#85979B] leading-[1.6] mt-2.5 max-w-[470px]">
        Australian planning data is not a single API. It&apos;s hundreds
        of state and council endpoints across six planning regimes,
        each with its own protocol, projection, schema, and update
        cadence. Pulling address-in / feasibility-out in under a
        second requires more than an integration — it requires data
        engineering, spatial GIS, and data science working together.
      </p>

      {/* Scale stats inline */}
      <div className="mt-3 grid grid-cols-4 gap-2">
        {[
          { v: "14M+", l: "Parcels nationwide" },
          { v: "500+", l: "Council DCPs" },
          { v: "6", l: "State planning regimes" },
          { v: "30+", l: "Heterogeneous sources" },
        ].map((s) => (
          <div
            key={s.l}
            className="rounded-md bg-[#F9FAF8] border border-[#E9EAE5] px-2.5 py-1.5"
          >
            <p className="font-serif text-[14px] text-[#134A32] leading-none">
              {s.v}
            </p>
            <p className="font-sans text-[6.5px] uppercase tracking-[0.06em] text-[#85979B] mt-1 leading-tight">
              {s.l}
            </p>
          </div>
        ))}
      </div>

      {/* Medallion */}
      <div className="mt-3 rounded-lg border border-[#E9EAE5] bg-[#F9FAF8] p-2.5">
        <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-[#85979B] font-semibold mb-1.5">
          Bronze · Silver · Gold — medallion architecture
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[
            {
              tier: "Bronze",
              color: "#8B5A2B",
              desc: "Raw gov responses archived untouched in S3 + Postgres",
            },
            {
              tier: "Silver",
              color: "#85979B",
              desc: "Cleaned + reprojected to GDA2020; consistent schema",
            },
            {
              tier: "Gold",
              color: "#C4952A",
              desc: "Pre-joined lot feature views — the Portal&apos;s query target",
            },
          ].map((t) => (
            <div
              key={t.tier}
              className="rounded-md bg-white px-2.5 py-1.5 border-l-[3px]"
              style={{ borderLeftColor: t.color }}
            >
              <p
                className="font-sans text-[8.5px] font-bold uppercase tracking-[0.08em]"
                style={{ color: t.color }}
              >
                {t.tier}
              </p>
              <p className="font-body text-[7.5px] text-[#85979B] mt-0.5 leading-[1.45]">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sources table */}
      <div className="mt-3 rounded-lg border border-[#E9EAE5] overflow-hidden">
        <div className="grid grid-cols-[1fr_140px_1fr] px-3.5 py-1.5 bg-[#F5F6F3]">
          {["Source", "Protocol", "What we get"].map((h) => (
            <span
              key={h}
              className="font-sans text-[7px] font-semibold uppercase tracking-[0.08em] text-[#85979B]"
            >
              {h}
            </span>
          ))}
        </div>
        {sources.map((s) => (
          <div
            key={s.source}
            className="grid grid-cols-[1fr_140px_1fr] px-3.5 py-1.5 border-t border-[#E9EAE5] items-center"
          >
            <span className="font-sans text-[8.5px] text-[#134A32]">
              {s.source}
            </span>
            <span className="font-sans text-[7px] bg-[#E8F0EC] text-[#134A32] px-2 py-0.5 rounded-full inline-block w-fit">
              {s.proto}
            </span>
            <span className="font-body text-[8px] text-[#85979B]">
              {s.what}
            </span>
          </div>
        ))}
      </div>

      {/* Disciplines strip */}
      <div className="mt-auto pt-3 border-t border-[#E9EAE5]">
        <p className="font-sans text-[7px] uppercase tracking-[0.12em] text-[#134A32] font-semibold mb-2">
          Disciplines brought to bear
        </p>
        <div className="grid grid-cols-4 gap-2">
          {disciplines.map((d) => (
            <div
              key={d.t}
              className="rounded-md bg-[#134A32] px-2.5 py-1.5"
            >
              <p className="font-sans text-[8px] font-semibold text-[#C4952A] mb-0.5">
                {d.t}
              </p>
              <p className="font-body text-[7px] text-white/70 leading-[1.45]">
                {d.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
