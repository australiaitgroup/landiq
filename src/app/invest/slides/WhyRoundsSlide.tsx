"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "../../pitch/shared/SlideLayout";
import { FadeIn } from "../../pitch/shared/FadeIn";
import { StaggerContainer, staggerItem } from "../../pitch/shared/StaggerContainer";
import {
  Building2,
  Rocket,
  ArrowRight,
  HelpCircle,
  TrendingUp,
} from "lucide-react";

const compare = [
  {
    label: "Capital deployment",
    re: "One-shot, upfront",
    saas: "Staged across 5+ rounds",
  },
  {
    label: "Revenue timing",
    re: "After completion (12-36 mo)",
    saas: "Month 6 onwards, growing",
  },
  {
    label: "Main risk",
    re: "Construction · market cycle",
    saas: "Product-market fit · churn",
  },
  {
    label: "Exit horizon",
    re: "Sale / hold · 3-5 years",
    saas: "IPO or M&A · 7-10 years",
  },
  {
    label: "Typical return",
    re: "20-40% IRR on capital",
    saas: "10-100× on equity",
  },
];

const stages = [
  {
    round: "Seed",
    ask: "$860K",
    question: "Can we build it and will anyone pay?",
    deRisk: "Ship MVP · prove paid demand",
    proof: "50 customers · $40K MRR",
  },
  {
    round: "Series A",
    ask: "$3-5M",
    question: "Can we sell repeatedly at scale?",
    deRisk: "Prove a repeatable GTM motion",
    proof: "200+ customers · $160K MRR",
  },
  {
    round: "Series B",
    ask: "$10-20M",
    question: "Can we dominate the market?",
    deRisk: "Win category · expand NZ",
    proof: "500+ customers · $400K MRR",
  },
  {
    round: "IPO / M&A",
    ask: "Exit",
    question: "How do we harvest?",
    deRisk: "Liquidity for shareholders",
    proof: "$24M+ ARR · $500M-1B",
  },
];

export function WhyRoundsSlide() {
  return (
    <SlideLayout bg="bg-white">
      <div className="w-full">
        <FadeIn>
          <p className="font-sans text-sm uppercase tracking-[0.08em] text-primary-600 mb-3">
            For Real-Estate Investors
          </p>
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-primary-900 leading-[1.2]">
            Why SaaS raises in <span className="text-accent">stages</span>, not
            one shot
          </h2>
          <p className="font-body text-[14px] text-surface-500 mt-3 max-w-3xl">
            Property deploys capital once and waits for a build to complete.
            Software compounds: each round funds a specific question, and the
            answer unlocks the next — at a higher valuation.
          </p>
        </FadeIn>

        {/* Top: side-by-side comparison */}
        <div className="grid grid-cols-12 gap-4 mt-6">
          {/* Real estate */}
          <FadeIn delay={0.3} className="col-span-3">
            <div className="rounded-xl p-4 bg-surface-100 border border-surface-300 h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary-800 flex items-center justify-center">
                  <Building2
                    className="w-4 h-4 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-surface-500">
                    Familiar
                  </p>
                  <p className="font-serif text-sm text-primary-900">
                    Real estate deal
                  </p>
                </div>
              </div>
              <ul className="space-y-2.5 mt-3">
                {compare.map((c) => (
                  <li key={c.label}>
                    <p className="font-sans text-[9px] uppercase tracking-wider text-surface-400">
                      {c.label}
                    </p>
                    <p className="font-sans text-[11.5px] text-primary-900 leading-snug">
                      {c.re}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* SaaS */}
          <FadeIn delay={0.45} className="col-span-3">
            <div className="rounded-xl p-4 bg-primary-900 border border-primary-800 h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-accent">
                    This deal
                  </p>
                  <p className="font-serif text-sm text-white">
                    SaaS scale-up
                  </p>
                </div>
              </div>
              <ul className="space-y-2.5 mt-3">
                {compare.map((c) => (
                  <li key={c.label}>
                    <p className="font-sans text-[9px] uppercase tracking-wider text-white/40">
                      {c.label}
                    </p>
                    <p className="font-sans text-[11.5px] text-white leading-snug">
                      {c.saas}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Right: the staged logic */}
          <div className="col-span-6">
            <FadeIn delay={0.6}>
              <p className="font-sans text-xs uppercase tracking-[0.08em] text-surface-500 mb-3">
                Each round funds a specific question
              </p>
            </FadeIn>
            <StaggerContainer className="space-y-2" delay={0.7}>
              {stages.map((s, i) => (
                <motion.div
                  key={s.round}
                  variants={staggerItem}
                  className="flex items-stretch gap-3"
                >
                  <div className="flex flex-col items-center w-4 shrink-0">
                    <div
                      className={`w-3 h-3 rounded-full shrink-0 ${
                        i === 0 ? "bg-accent ring-4 ring-accent/20" : "bg-primary-600"
                      }`}
                    />
                    {i < stages.length - 1 && (
                      <div className="w-0.5 flex-1 bg-surface-300 mt-1" />
                    )}
                  </div>
                  <div className="flex-1 pb-2 grid grid-cols-12 items-start gap-2">
                    <div className="col-span-3">
                      <p className="font-sans text-[12px] font-medium text-primary-900 leading-tight">
                        {s.round}
                      </p>
                      <p className="font-sans text-[11px] text-accent font-semibold">
                        {s.ask}
                      </p>
                    </div>
                    <div className="col-span-9">
                      <div className="flex items-start gap-1.5">
                        <HelpCircle
                          className="w-3 h-3 text-primary-600 shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <p className="font-sans text-[11.5px] text-primary-900 italic leading-snug">
                          {s.question}
                        </p>
                      </div>
                      <p className="font-sans text-[10.5px] text-surface-500 mt-1 ml-[18px]">
                        → {s.deRisk} &middot;{" "}
                        <span className="text-primary-700">{s.proof}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Bottom: the kicker for real estate investors */}
        <FadeIn delay={1.2}>
          <div className="mt-6 grid grid-cols-12 gap-3">
            <div className="col-span-7 px-5 py-4 bg-primary-50 rounded-xl border border-primary-200">
              <p className="font-sans text-[10px] uppercase tracking-wider text-primary-700 mb-1">
                Why not raise $15M upfront?
              </p>
              <p className="font-sans text-[12.5px] text-primary-900 leading-relaxed">
                Before product-market fit, you don&apos;t know{" "}
                <em>what</em> to spend it on. Staged funding matches capital to
                learning — every dollar is deployed with evidence behind it.
                Raising $15M at a $4M valuation would also give away 75%+ of
                the company — unnecessary dilution for the founders.
              </p>
            </div>
            <div className="col-span-5 px-5 py-4 bg-accent-light rounded-xl border border-accent/30">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-accent" strokeWidth={2} />
                <p className="font-sans text-[10px] uppercase tracking-wider text-accent">
                  Seed investor math
                </p>
              </div>
              <p className="font-sans text-[12.5px] text-primary-900 leading-relaxed">
                $860K at $4M pre = <b>~18% pre-dilution</b>. At Series B
                ($80M), the same equity is worth{" "}
                <b className="text-accent">~$11M post-dilution</b> — a
                ~13× paper return in 3 years. That&apos;s the early-stage
                premium.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </SlideLayout>
  );
}
