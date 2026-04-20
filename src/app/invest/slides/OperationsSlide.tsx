"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "../../pitch/shared/SlideLayout";
import { FadeIn } from "../../pitch/shared/FadeIn";
import { StaggerContainer, staggerItem } from "../../pitch/shared/StaggerContainer";
import {
  Users,
  Cpu,
  Cloud,
  Megaphone,
  Wrench,
  Coins,
} from "lucide-react";

const quarters = [
  {
    q: "Q2 2026",
    months: "Month 1-3",
    title: "Foundation",
    spend: "$140K",
    work: [
      "Hire 2 senior full-stack + 1 GIS/data engineer",
      "NSW Planning Portal + cadastre integration",
      "Infra: Vercel, Supabase, Claude API, Mapbox",
      "Design system & data schema locked",
    ],
    milestone: "Internal alpha live",
  },
  {
    q: "Q3 2026",
    months: "Month 4-6",
    title: "MVP Launch",
    spend: "$160K",
    work: [
      "AI feasibility report engine (zoning → yield → ROI)",
      "10 design-partner developers onboarded free",
      "Interactive map + site intelligence UI",
      "Iterate AI accuracy to >85% on test set",
    ],
    milestone: "Paid tier opens — first $10K MRR",
    highlighted: true,
  },
  {
    q: "Q4 2026 – Q1 2027",
    months: "Month 7-12",
    title: "Paid Growth",
    spend: "$340K",
    work: [
      "Hire 1 customer success (month 8)",
      "VIC data integration — national coverage",
      "Founder-led sales to top 100 developers",
      "File first R&D tax claim (Q1 2027)",
    ],
    milestone: "50 customers · $40K MRR",
  },
  {
    q: "Q2 2027",
    months: "Month 13-18",
    title: "Series A Prep",
    spend: "$220K",
    work: [
      "Scale AI reports to 1,000+ runs/month",
      "Build Series A data room & metrics dashboard",
      "Submit Industry Growth Program application",
      "Warm Series A investor conversations",
    ],
    milestone: "200 customers · $160K MRR · Series A ready",
  },
];

const devBudget = [
  {
    icon: Users,
    label: "Engineering salaries (3 people × 18mo)",
    amount: "$555K",
    pct: 65,
  },
  {
    icon: Cpu,
    label: "AI API — Anthropic / OpenAI",
    amount: "$90K",
    pct: 11,
  },
  {
    icon: Cloud,
    label: "Cloud infra & paid data APIs",
    amount: "$56K",
    pct: 6,
  },
  {
    icon: Megaphone,
    label: "Marketing & founder-led sales",
    amount: "$80K",
    pct: 9,
  },
  {
    icon: Wrench,
    label: "Tools, legal, ops",
    amount: "$79K",
    pct: 9,
  },
];

export function OperationsSlide() {
  return (
    <SlideLayout bg="bg-surface-100">
      <div className="w-full">
        <FadeIn>
          <p className="font-sans text-sm uppercase tracking-[0.08em] text-primary-600 mb-3">
            Execution Plan
          </p>
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-primary-900 leading-[1.2]">
            What the Seed actually buys — month by month
          </h2>
          <p className="font-body text-[14px] text-surface-500 mt-3 max-w-3xl">
            $860K across 18 months. 87% goes into building product (salaries +
            AI + infra). Every quarter has a concrete milestone we&apos;re
            accountable to.
          </p>
        </FadeIn>

        {/* Quarterly timeline */}
        <StaggerContainer className="grid grid-cols-4 gap-3 mt-6" delay={0.3}>
          {quarters.map((q) => (
            <motion.div
              key={q.q}
              variants={staggerItem}
              className={`rounded-xl p-4 border ${
                q.highlighted
                  ? "bg-primary-900 border-primary-800 text-white"
                  : "bg-white border-surface-300"
              }`}
            >
              <div className="flex items-baseline justify-between mb-1">
                <span
                  className={`font-sans text-[10px] uppercase tracking-wider ${
                    q.highlighted ? "text-accent" : "text-surface-500"
                  }`}
                >
                  {q.q}
                </span>
                <span
                  className={`font-sans text-[10px] ${
                    q.highlighted ? "text-white/60" : "text-surface-400"
                  }`}
                >
                  {q.months}
                </span>
              </div>
              <h3
                className={`font-serif text-lg leading-tight ${
                  q.highlighted ? "text-white" : "text-primary-900"
                }`}
              >
                {q.title}
              </h3>
              <p
                className={`font-sans text-[11px] font-semibold mt-1 ${
                  q.highlighted ? "text-accent" : "text-primary-700"
                }`}
              >
                Spend: {q.spend}
              </p>
              <ul className="mt-3 space-y-1.5">
                {q.work.map((w, i) => (
                  <li
                    key={i}
                    className={`font-sans text-[10.5px] leading-snug flex gap-1.5 ${
                      q.highlighted ? "text-white/85" : "text-surface-500"
                    }`}
                  >
                    <span
                      className={
                        q.highlighted ? "text-accent" : "text-primary-600"
                      }
                    >
                      •
                    </span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              <div
                className={`mt-3 pt-2 border-t ${
                  q.highlighted ? "border-white/10" : "border-surface-300"
                }`}
              >
                <p
                  className={`font-sans text-[10px] uppercase tracking-wider ${
                    q.highlighted ? "text-accent" : "text-surface-400"
                  }`}
                >
                  Milestone
                </p>
                <p
                  className={`font-sans text-[11px] font-medium mt-0.5 ${
                    q.highlighted ? "text-white" : "text-primary-900"
                  }`}
                >
                  {q.milestone}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Bottom: Dev budget breakdown */}
        <FadeIn delay={0.9}>
          <div className="mt-6 grid grid-cols-12 gap-6 items-center">
            <div className="col-span-3">
              <p className="font-sans text-xs uppercase tracking-[0.08em] text-surface-500 mb-2">
                Where $860K goes
              </p>
              <div className="flex items-baseline gap-2">
                <Coins className="w-4 h-4 text-accent" strokeWidth={1.5} />
                <p className="font-serif text-xl text-primary-900">
                  87% to product
                </p>
              </div>
              <p className="font-sans text-[11px] text-surface-500 mt-1 leading-relaxed">
                Capital goes to the things that compound — people, AI, data.
                Not rent, not flashy offices.
              </p>
            </div>
            <div className="col-span-9 space-y-2">
              {devBudget.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <Icon
                      className="w-3.5 h-3.5 text-primary-700 shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="font-sans text-[12px] text-primary-900 w-[260px] shrink-0">
                      {b.label}
                    </span>
                    <div className="flex-1 h-4 bg-white rounded-full overflow-hidden border border-surface-300">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${b.pct}%` }}
                        transition={{ duration: 0.8, delay: 1.1 + i * 0.08 }}
                        className="h-full bg-primary-800 rounded-full"
                      />
                    </div>
                    <span className="font-sans text-[11px] text-surface-500 w-[32px] text-right">
                      {b.pct}%
                    </span>
                    <span className="font-sans text-[12px] font-semibold text-primary-900 w-[56px] text-right">
                      {b.amount}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </SlideLayout>
  );
}
