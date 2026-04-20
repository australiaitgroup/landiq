"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "../../pitch/shared/SlideLayout";
import { FadeIn } from "../../pitch/shared/FadeIn";
import { StaggerContainer, staggerItem } from "../../pitch/shared/StaggerContainer";
import { Repeat, Handshake, LineChart } from "lucide-react";

const paths = [
  {
    icon: Repeat,
    tag: "Partial · Year 3-4",
    title: "Secondary sale",
    subtitle: "At Series B / C",
    desc:
      "Sell 20-50% of position to incoming institutional investors. Lock in early gains without waiting for full exit.",
    example: "Seed holder could cash out ~$2-4M at Series B",
    color: "bg-surface-100",
    textColor: "text-primary-900",
    border: "border-surface-300",
    iconBg: "bg-primary-800",
    iconColor: "text-white",
  },
  {
    icon: Handshake,
    tag: "Full · Year 5-7",
    title: "Strategic M&A",
    subtitle: "Acquisition by industry incumbent",
    desc:
      "PropTech M&A typically at 8-15× ARR. Clean cash exit, no lock-up. Most common path in Australian SaaS.",
    example: "Acquirers: REA, Domain, CoreLogic, Cotality, Archistar",
    color: "bg-primary-900",
    textColor: "text-white",
    border: "border-primary-800",
    iconBg: "bg-accent",
    iconColor: "text-white",
    highlighted: true,
  },
  {
    icon: LineChart,
    tag: "Full · Year 6-8",
    title: "ASX IPO",
    subtitle: "Public listing",
    desc:
      "Target $500M-$1B listing on ASX. 12-month lock-up typical, then full liquidity via public market — highest upside path.",
    example: "Comparables: Nearmap (NEA), REA ($25B), Domain ($2B)",
    color: "bg-surface-100",
    textColor: "text-primary-900",
    border: "border-surface-300",
    iconBg: "bg-primary-800",
    iconColor: "text-white",
  },
];

const acquirers = [
  { name: "REA Group", tick: "ASX:REA", cap: "$25B", fit: "Core listings + dev tools" },
  { name: "Domain Holdings", tick: "ASX:DHG", cap: "$2B", fit: "PropTech expansion" },
  { name: "Cotality (CoreLogic)", tick: "Private", cap: "$10B+", fit: "Data + analytics stack" },
  { name: "PEXA Group", tick: "ASX:PXA", cap: "$2.5B", fit: "Conveyancing → pre-deal" },
  { name: "Archistar", tick: "Private", cap: "—", fit: "Defensive M&A" },
];

export function ExitSlide() {
  return (
    <SlideLayout bg="bg-white">
      <div className="w-full">
        <FadeIn>
          <p className="font-sans text-sm uppercase tracking-[0.08em] text-primary-600 mb-3">
            Exit & Liquidity
          </p>
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-primary-900 leading-[1.2]">
            Three paths to <span className="text-accent">liquidity</span>
          </h2>
          <p className="font-body text-[14px] text-surface-500 mt-3 max-w-3xl">
            SaaS doesn&apos;t pay dividends — returns come through liquidity
            events. Early investors have multiple opportunities to exit,
            partially or fully, on a staged timeline.
          </p>
        </FadeIn>

        {/* Three paths */}
        <StaggerContainer className="grid grid-cols-3 gap-4 mt-6" delay={0.3}>
          {paths.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={staggerItem}
                className={`rounded-xl p-5 ${p.color} border ${p.border}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${p.iconBg}`}
                  >
                    <Icon
                      className={`w-4 h-4 ${p.iconColor}`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p
                      className={`font-sans text-[10px] uppercase tracking-[0.08em] ${
                        p.highlighted ? "text-accent" : "text-surface-500"
                      }`}
                    >
                      {p.tag}
                    </p>
                  </div>
                </div>
                <h3
                  className={`font-serif text-xl leading-tight ${p.textColor}`}
                >
                  {p.title}
                </h3>
                <p
                  className={`font-sans text-[11px] mt-1 ${
                    p.highlighted ? "text-white/60" : "text-surface-500"
                  }`}
                >
                  {p.subtitle}
                </p>
                <p
                  className={`font-sans text-[12px] mt-3 leading-relaxed ${
                    p.highlighted ? "text-white/85" : "text-surface-500"
                  }`}
                >
                  {p.desc}
                </p>
                <div
                  className={`mt-4 pt-3 border-t ${
                    p.highlighted ? "border-white/10" : "border-surface-300"
                  }`}
                >
                  <p
                    className={`font-sans text-[11px] font-medium ${
                      p.highlighted ? "text-accent" : "text-primary-700"
                    }`}
                  >
                    {p.example}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Bottom: acquirers + seed math */}
        <div className="grid grid-cols-12 gap-4 mt-6">
          {/* Potential acquirers */}
          <div className="col-span-7">
            <FadeIn delay={0.9}>
              <p className="font-sans text-xs uppercase tracking-[0.08em] text-surface-500 mb-3">
                Strategic acquirers — real names, real appetite
              </p>
              <div className="rounded-xl border border-surface-300 overflow-hidden">
                <div className="grid grid-cols-12 px-4 py-2 bg-surface-200">
                  <span className="col-span-4 font-sans text-[10px] uppercase tracking-wider text-surface-500">
                    Acquirer
                  </span>
                  <span className="col-span-2 font-sans text-[10px] uppercase tracking-wider text-surface-500">
                    Listing
                  </span>
                  <span className="col-span-2 font-sans text-[10px] uppercase tracking-wider text-surface-500">
                    Market cap
                  </span>
                  <span className="col-span-4 font-sans text-[10px] uppercase tracking-wider text-surface-500">
                    Strategic fit
                  </span>
                </div>
                {acquirers.map((a, i) => (
                  <motion.div
                    key={a.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + i * 0.08 }}
                    className="grid grid-cols-12 px-4 py-2.5 border-t border-surface-300 items-center"
                  >
                    <span className="col-span-4 font-sans text-[12px] font-medium text-primary-900">
                      {a.name}
                    </span>
                    <span className="col-span-2 font-sans text-[11px] text-surface-500">
                      {a.tick}
                    </span>
                    <span className="col-span-2 font-sans text-[11px] text-primary-800">
                      {a.cap}
                    </span>
                    <span className="col-span-4 font-sans text-[11px] text-surface-500">
                      {a.fit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Seed investor payout math */}
          <div className="col-span-5">
            <FadeIn delay={1}>
              <p className="font-sans text-xs uppercase tracking-[0.08em] text-surface-500 mb-3">
                Seed investor payout (illustrative)
              </p>
              <div className="rounded-xl p-4 bg-accent-light border border-accent/30">
                <p className="font-sans text-[11px] text-primary-700 leading-relaxed">
                  <span className="font-semibold">$860K</span> at{" "}
                  <span className="font-semibold">$4M pre</span> = ~18% Seed
                  ownership. After Series A/B dilution (~40-50% cumulative),
                  the Seed position represents <b>~9-10%</b> of the company at
                  exit.
                </p>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Handshake
                      className="w-4 h-4 text-primary-700 shrink-0"
                      strokeWidth={1.5}
                    />
                    <div className="flex-1">
                      <p className="font-sans text-[11px] text-primary-900">
                        M&A @ $500M
                      </p>
                      <p className="font-sans text-[10px] text-surface-500">
                        Year 5-7 · cash exit
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-lg text-primary-900">
                        ~$45M
                      </p>
                      <p className="font-sans text-[10px] text-accent font-semibold">
                        ~50×
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-accent/20">
                    <LineChart
                      className="w-4 h-4 text-accent shrink-0"
                      strokeWidth={1.5}
                    />
                    <div className="flex-1">
                      <p className="font-sans text-[11px] text-primary-900">
                        IPO @ $1B
                      </p>
                      <p className="font-sans text-[10px] text-surface-500">
                        Year 7-8 · 12-mo lock-up
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-lg text-accent">
                        ~$90M
                      </p>
                      <p className="font-sans text-[10px] text-accent font-semibold">
                        ~100×
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-sans text-[10px] text-surface-400 mt-3 italic leading-relaxed">
                  Illustrative, pre-tax. Actual returns depend on final
                  dilution schedule, exit valuation and timing.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
