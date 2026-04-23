"use client";

const pillars = [
  {
    title: "Data residency",
    desc: "All storage, compute, and LLM traffic routed through AU regions. No offshore egress for Mountain Property data.",
  },
  {
    title: "Tenant isolation",
    desc: "Every tenant-scoped table carries organisation_id; all queries scope through it. Row-level guarantees enforced in the API.",
  },
  {
    title: "Auth & RBAC",
    desc: "JWT access + refresh tokens, bcrypt hashing (≥ 12 rounds), 5-role org model (owner / admin / manager / member / viewer).",
  },
  {
    title: "Secrets & keys",
    desc: "Managed via cloud-native secret store (AWS Secrets Manager / Azure Key Vault). Nothing in source or env files.",
  },
  {
    title: "Audit trail",
    desc: "Every privileged action (user add/remove, role change, doc delete, report export) written to an immutable audit table.",
  },
  {
    title: "Backup & recovery",
    desc: "Automated daily Postgres snapshots + S3 object versioning; tested restore runbook handed over at M4.",
  },
  {
    title: "Privacy by design",
    desc: "Australian Privacy Principles (APP) alignment. PII minimised, encrypted at rest + in transit, retention policy per data class, export + erasure on request.",
    privacy: true,
  },
  {
    title: "No model training on Client data",
    desc: "LLM vendors are contracted in no-retention / no-training mode — Mountain Property's prompts and documents are never used to train foundation models.",
    privacy: true,
  },
];

const privacyPoints = [
  {
    k: "Legal baseline",
    v: "Privacy Act 1988 + Australian Privacy Principles (APP 1 – 13)",
  },
  {
    k: "Encryption",
    v: "TLS 1.2+ in transit · AES-256 (SSE-KMS) at rest · column-level for PII",
  },
  {
    k: "Retention",
    v: "Per-class policy — raw gov data cached 30d, user PII retained while account active + 30d",
  },
  {
    k: "Subject rights",
    v: "Export + erasure APIs — respond within 30 days per APP 12/13",
  },
  {
    k: "LLM boundary",
    v: "Anthropic + OpenAI zero-retention flag set · prompts not logged by vendor · embeddings stay in your DB",
  },
];

export function SecurityPage() {
  return (
    <div className="w-full h-full bg-white p-[42px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-[7px] uppercase tracking-[0.2em] text-[#134A32]/50">
          Technical Solution · Mountain Property
        </p>
        <p className="font-sans text-[7px] text-[#85979B]">08</p>
      </div>

      <p className="font-sans text-[8px] uppercase tracking-[0.15em] text-[#134A32] mb-2">
        Security, Privacy & Hosting
      </p>
      <div className="w-10 h-[1.5px] bg-[#C4952A] mb-4" />

      <h2 className="font-serif text-[20px] leading-[1.2] text-[#134A32] max-w-[440px]">
        Built on Mountain Property&apos;s cloud. Private by default.
      </h2>

      <p className="font-body text-[8.5px] text-[#85979B] leading-[1.55] mt-2 max-w-[470px]">
        The platform is deployed into Mountain Property&apos;s own AWS
        or Azure account from day one. LandIQ never holds production
        data; access is operationally delegated and can be revoked in
        minutes. Privacy is a first-class design input, not a checkbox.
      </p>

      {/* 8 pillars grid — 4x2 */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className={`rounded-lg p-2.5 border ${
              p.privacy
                ? "bg-[#FFF8E1] border-[#C4952A]/40"
                : "bg-[#F9FAF8] border-[#E9EAE5]"
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-sans text-[7px] font-semibold text-[#C4952A]">
                0{i + 1}
              </span>
              <div className="flex-1 h-[1px] bg-[#E9EAE5]" />
              {p.privacy && (
                <span className="font-sans text-[6px] uppercase tracking-[0.1em] text-[#C4952A] font-bold">
                  Privacy
                </span>
              )}
            </div>
            <p className="font-sans text-[9px] font-semibold text-[#134A32] mb-0.5 leading-tight">
              {p.title}
            </p>
            <p className="font-body text-[7.5px] text-[#85979B] leading-[1.5]">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Privacy deep-dive */}
      <div className="mt-3 rounded-lg border border-[#C4952A]/30 bg-[#FFF8E1] overflow-hidden">
        <div className="px-3.5 py-1.5 bg-[#C4952A]/15 border-b border-[#C4952A]/30 flex items-baseline justify-between">
          <p className="font-sans text-[7.5px] uppercase tracking-[0.12em] text-[#134A32] font-semibold">
            Privacy — what it means concretely
          </p>
          <p className="font-sans text-[6.5px] text-[#85979B]">
            Aligned to Australian Privacy Principles
          </p>
        </div>
        {privacyPoints.map((r) => (
          <div
            key={r.k}
            className="grid grid-cols-[130px_1fr] px-3.5 py-1.5 border-t border-[#C4952A]/15 first:border-t-0"
          >
            <span className="font-sans text-[7.5px] text-[#134A32] font-semibold leading-tight">
              {r.k}
            </span>
            <span className="font-body text-[7.5px] text-[#85979B] leading-[1.5]">
              {r.v}
            </span>
          </div>
        ))}
      </div>

      {/* Hosting options strip */}
      <div className="mt-auto pt-3 rounded-lg bg-[#134A32] px-4 py-2.5 flex items-center justify-between mt-3">
        <div>
          <p className="font-sans text-[7px] uppercase tracking-[0.15em] text-[#C4952A]">
            Hosting — Mountain Property&apos;s choice
          </p>
          <p className="font-serif text-[13px] text-white leading-[1.4] mt-0.5">
            AWS (Sydney) · Azure (AU East) · on-prem reviewable
          </p>
        </div>
        <div className="flex gap-1.5 shrink-0 ml-4">
          {["AWS", "Azure", "GCP AU"].map((b) => (
            <span
              key={b}
              className="px-2.5 py-1 rounded-full border border-white/30 font-sans text-[7.5px] text-white/70 uppercase tracking-[0.08em]"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
