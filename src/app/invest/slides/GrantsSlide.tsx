"use client";

import { motion } from "framer-motion";
import { SlideLayout } from "../../pitch/shared/SlideLayout";
import { FadeIn } from "../../pitch/shared/FadeIn";
import { StaggerContainer, staggerItem } from "../../pitch/shared/StaggerContainer";
import {
  FlaskConical,
  Plane,
  Sprout,
  Landmark,
  ShieldCheck,
  MapPin,
  Wheat,
  Puzzle,
} from "lucide-react";

const grants = [
  {
    icon: FlaskConical,
    name: "R&D Tax Incentive",
    body: "ATO",
    headline: "43.5% refundable cash offset",
    detail:
      "Eligible R&D spend (engineering salaries, AI/cloud, data pipelines) returns ~43.5¢ on every dollar. For a loss-making startup, this is paid as cash.",
    value: "~$150K / yr",
    tag: "Year 1-3",
    color: "primary",
  },
  {
    icon: Landmark,
    name: "Industry Growth Program",
    body: "Dept. of Industry",
    headline: "Matched grant up to $5M",
    detail:
      "Federal program for innovative SMEs in priority sectors (digital infra, advanced manufacturing). We target the Commercialisation stream.",
    value: "$500K target",
    tag: "Year 2",
    color: "primary",
  },
  {
    icon: Plane,
    name: "EMDG",
    body: "Austrade",
    headline: "Export Market Dev. Grant",
    detail:
      "50% rebate on NZ / UK market-entry spend (travel, marketing, IP registration). Triggered in Year 3 for international expansion.",
    value: "$150K over 2 yrs",
    tag: "Year 3",
    color: "accent",
  },
  {
    icon: Sprout,
    name: "CSIRO Kick-Start",
    body: "CSIRO / ON",
    headline: "Research voucher $10-50K",
    detail:
      "Matched dollar-for-dollar to work with a CSIRO research group — useful for GIS accuracy validation and spatial ML benchmarks.",
    value: "$50K",
    tag: "Year 1",
    color: "primary",
  },
  {
    icon: MapPin,
    name: "State programs",
    body: "LaunchVic · Investment NSW",
    headline: "State-level startup grants",
    detail:
      "Investment NSW Going Global, LaunchVic Alice Anderson Fund, Business Victoria vouchers. Non-dilutive working capital top-ups.",
    value: "$75K combined",
    tag: "Year 1-2",
    color: "primary",
  },
  {
    icon: Wheat,
    name: "Rural R&D Corporations",
    body: "GRDC · AgriFutures · MLA · Cotton RDC",
    headline: "Matched rural-land R&D funding",
    detail:
      "If we extend LandIQ to farmland feasibility (soil, water, yield overlays), 15 Rural RDCs co-invest in applied R&D. Levy-backed, matched dollar-for-dollar.",
    value: "$200-400K",
    tag: "Year 2-3",
    color: "primary",
  },
  {
    icon: Puzzle,
    name: "BRII",
    body: "Business Research & Innovation Initiative",
    headline: "Challenge-based non-dilutive grant",
    detail:
      "Federal program funds startups solving government problems. Planning-automation & spatial-data challenges fit directly — $100K feasibility → $1M proof-of-concept.",
    value: "$100K-$1M",
    tag: "Year 2",
    color: "accent",
  },
  {
    icon: ShieldCheck,
    name: "Austrade Landing Pads",
    body: "Austrade",
    headline: "In-market soft-landing",
    detail:
      "Subsidised London / Singapore co-working & advisory for global expansion. Reduces Series B geographic-expansion burn.",
    value: "In-kind",
    tag: "Year 3+",
    color: "accent",
  },
];

export function GrantsSlide() {
  return (
    <SlideLayout bg="bg-white">
      <div className="w-full">
        <div className="grid grid-cols-12 gap-10">
          {/* Left: headline + impact */}
          <div className="col-span-4">
            <FadeIn>
              <p className="font-sans text-sm uppercase tracking-[0.08em] text-primary-600 mb-3">
                Non-Dilutive Capital
              </p>
              <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] text-primary-900 leading-[1.15]">
                Australian government grants{" "}
                <span className="text-accent">stack on top</span> of equity
              </h2>
              <p className="font-body text-[14px] text-surface-500 mt-4 leading-relaxed">
                Every grant dollar saves dilution. We model ~$1M+ in
                non-dilutive funding over 3 years — the equivalent of a second
                Seed round, with no equity cost.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-7 border-l-2 border-accent pl-5">
                <p className="font-sans text-[10px] uppercase tracking-wider text-surface-500">
                  Recoverable (3 yrs)
                </p>
                <p className="font-serif text-[44px] leading-none text-primary-900 mt-1">
                  $1M<span className="text-accent">+</span>
                </p>
                <p className="font-sans text-[12px] text-surface-500 mt-2">
                  ≈ 20-25% equity saved at Seed valuation
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="mt-6 px-4 py-3 bg-primary-50 rounded-xl border border-primary-200">
                <p className="font-sans text-[11px] leading-relaxed text-primary-800">
                  <span className="font-semibold">R&D offset mechanic:</span>{" "}
                  $330K eligible dev spend × 43.5% = $143K refundable cash
                  from ATO. Repeatable annually while loss-making.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="mt-3 px-4 py-3 bg-accent-light rounded-xl border border-accent/20">
                <p className="font-sans text-[11px] leading-relaxed text-primary-900">
                  <span className="font-semibold text-accent">
                    Why it matters:
                  </span>{" "}
                  $860K equity + $1M+ grants = $1.9M+ effective runway.
                  Same dilution, 2× the capital.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: grants grid */}
          <div className="col-span-8">
            <FadeIn delay={0.3}>
              <p className="font-sans text-xs uppercase tracking-[0.08em] text-surface-500 mb-4">
                Funding programs we&apos;re eligible for
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 gap-3" delay={0.4}>
              {grants.map((g) => {
                const Icon = g.icon;
                return (
                  <motion.div
                    key={g.name}
                    variants={staggerItem}
                    className="rounded-xl p-4 bg-surface-100 border border-surface-300 hover:border-primary-300 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          g.color === "accent"
                            ? "bg-accent/15"
                            : "bg-primary-800"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 ${
                            g.color === "accent" ? "text-accent" : "text-white"
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-serif text-[15px] text-primary-900 leading-tight">
                            {g.name}
                          </span>
                          <span className="font-sans text-[9px] uppercase tracking-wider text-surface-400 shrink-0">
                            {g.tag}
                          </span>
                        </div>
                        <p className="font-sans text-[10px] text-surface-400 mt-0.5">
                          {g.body}
                        </p>
                        <p className="font-sans text-[12px] font-medium text-primary-800 mt-2">
                          {g.headline}
                        </p>
                        <p className="font-sans text-[11px] text-surface-500 mt-1.5 leading-relaxed">
                          {g.detail}
                        </p>
                        <div className="mt-2.5 pt-2 border-t border-surface-300">
                          <span className="font-sans text-[11px] font-semibold text-accent">
                            {g.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
