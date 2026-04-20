"use client";

import { motion } from "framer-motion";
import {
  Users,
  FileText,
  MessageSquare,
  Database,
  ShieldCheck,
  Cloud,
  Code2,
  Palette,
  Handshake,
  CalendarCheck,
  Wrench,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { SlideLayout } from "../shared/SlideLayout";
import { FadeIn } from "../shared/FadeIn";

const columns = [
  {
    tag: "01 · Required from you",
    title: "What we need from your team",
    subtitle:
      "Domain input that we cannot source from public data alone.",
    icon: Users,
    tone: "surface",
    items: [
      {
        icon: FileText,
        label: "Feasibility report samples",
        note: "Existing templates, past reports, preferred section structure",
      },
      {
        icon: Database,
        label: "Reference projects",
        note: "3 – 5 representative sites with known outcomes for calibration",
      },
      {
        icon: MessageSquare,
        label: "Product owner + weekly review",
        note: "One internal lead · ~2 hrs / week feedback cadence",
      },
      {
        icon: CheckCircle2,
        label: "Internal workflow context",
        note: "Checklists, email templates, consultant briefs, terminology",
      },
    ],
  },
  {
    tag: "02 · Yours to keep",
    title: "Ownership & control",
    subtitle:
      "The platform is built for you — the assets belong to you.",
    icon: ShieldCheck,
    tone: "primary",
    items: [
      {
        icon: Code2,
        label: "IP ownership → 甲方",
        note: "Platform code, AI prompts, models and workflows assigned to client",
      },
      {
        icon: Lock,
        label: "Data ownership → 甲方",
        note: "All site data, reports and analyses owned by client under NDA",
      },
      {
        icon: Cloud,
        label: "Hosting of your choice",
        note: "Deploy on client's AWS / Azure · AU data residency",
      },
      {
        icon: Palette,
        label: "White-label ready",
        note: "Client branding · full source code & docs delivered · no lock-in",
      },
    ],
  },
  {
    tag: "03 · How we work",
    title: "Engagement model",
    subtitle: "Milestone-based delivery aligned to the roadmap.",
    icon: Handshake,
    tone: "surface",
    items: [
      {
        icon: CalendarCheck,
        label: "Phased milestones",
        note: "Delivery tied to roadmap phases · scope adjusts per review",
      },
      {
        icon: Handshake,
        label: "Milestone-based payment",
        note: "Invoiced against deliverables · transparent burn-down",
      },
      {
        icon: Wrench,
        label: "Ongoing support (optional)",
        note: "Post-launch maintenance, model tuning, feature retainers",
      },
      {
        icon: ShieldCheck,
        label: "NDA & confidentiality",
        note: "All project data under mutual NDA from day one",
      },
    ],
  },
];

export function EngagementSlide() {
  return (
    <SlideLayout bg="bg-white">
      <div className="w-full">
        <FadeIn>
          <p className="font-sans text-sm uppercase tracking-[0.08em] text-primary-600 mb-3">
            Engagement & Ownership
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-primary-900 leading-[1.2]">
            Built for you — owned by you
          </h2>
          <p className="font-body text-base text-surface-500 mt-3 max-w-3xl">
            We deliver the platform, the IP, and the data under your name.
            You commit a small internal team; we handle everything else.
          </p>
        </FadeIn>

        <div className="grid grid-cols-3 gap-5 mt-8">
          {columns.map((col, i) => {
            const HeaderIcon = col.icon;
            const isPrimary = col.tone === "primary";
            return (
              <motion.div
                key={col.tag}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className={`rounded-2xl p-6 border ${
                  isPrimary
                    ? "bg-primary-900 border-primary-800 text-white"
                    : "bg-surface-100 border-surface-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isPrimary ? "bg-accent" : "bg-primary-800"
                    }`}
                  >
                    <HeaderIcon
                      className="w-4 h-4 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span
                    className={`font-sans text-[10px] tracking-[0.12em] uppercase ${
                      isPrimary ? "text-accent" : "text-surface-500"
                    }`}
                  >
                    {col.tag}
                  </span>
                </div>

                <h3
                  className={`font-serif text-xl leading-tight mb-1.5 ${
                    isPrimary ? "text-white" : "text-primary-900"
                  }`}
                >
                  {col.title}
                </h3>
                <p
                  className={`font-body text-[13px] mb-5 ${
                    isPrimary ? "text-white/70" : "text-surface-500"
                  }`}
                >
                  {col.subtitle}
                </p>

                <ul className="space-y-3">
                  {col.items.map((item, j) => {
                    const ItemIcon = item.icon;
                    return (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.2 + j * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isPrimary
                              ? "bg-white/10"
                              : "bg-white border border-surface-300"
                          }`}
                        >
                          <ItemIcon
                            className={`w-3.5 h-3.5 ${
                              isPrimary ? "text-accent" : "text-primary-700"
                            }`}
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="leading-tight">
                          <div
                            className={`font-sans text-[13px] font-medium ${
                              isPrimary ? "text-white" : "text-primary-900"
                            }`}
                          >
                            {item.label}
                          </div>
                          <div
                            className={`font-sans text-[11px] mt-0.5 leading-snug ${
                              isPrimary ? "text-white/60" : "text-surface-500"
                            }`}
                          >
                            {item.note}
                          </div>
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-6 flex items-center justify-between px-5 py-3 rounded-xl bg-primary-50 border border-primary-200"
        >
          <p className="font-sans text-xs text-primary-800">
            <span className="font-semibold">Low-friction engagement:</span>{" "}
            one product owner + weekly reviews is enough to run the full build.
          </p>
          <p className="font-sans text-xs text-surface-500">
            You own the IP · you own the data · we deliver the build
          </p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
