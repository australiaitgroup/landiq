"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Brain,
  FileText,
  Search,
  FolderOpen,
  Chrome,
  Mail,
  BarChart3,
  Clock,
  DollarSign,
  Users,
  ChevronRight,
  ArrowUpRight,
  Menu,
  X,
  Layers,
  Zap,
  Shield,
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─── Animation Helpers ─── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── Topographic Lines SVG (reused from pitch deck) ─── */
function TopoLines({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      style={{ opacity }}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <motion.g
        animate={{ x: [0, -40, 0], y: [0, 15, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[80, 160, 240, 320, 400, 480, 560, 640, 720].map((y, i) => (
          <path
            key={i}
            d={`M-100 ${y} Q200 ${y - 35 + i * 7} 500 ${y + 25} Q800 ${y - 15 + i * 5} 1300 ${y + 10}`}
            fill="none"
            stroke="white"
            strokeWidth="1.2"
          />
        ))}
      </motion.g>
    </svg>
  );
}

/* ─── Data ─── */
const stats = [
  { icon: Clock, value: 80, suffix: "%", label: "Cost Reduction" },
  { icon: BarChart3, value: 30, suffix: "+", label: "Data Sources" },
  { icon: DollarSign, value: 300, suffix: "ms", label: "Avg Response" },
  { icon: Users, value: 10, suffix: "K+", label: "Market Size" },
];

const steps = [
  {
    icon: MapPin,
    num: "01",
    title: "Enter an Address",
    desc: "Type any Australian property address. Our geocoder resolves it to a cadastral lot instantly.",
  },
  {
    icon: Brain,
    num: "02",
    title: "AI Queries 30+ Sources",
    desc: "LandIQ hits government APIs in real-time — zoning, FSR, height, heritage, flood, bushfire.",
  },
  {
    icon: FileText,
    num: "03",
    title: "Get Your Report",
    desc: "Institutional-grade feasibility report with risk scoring, DCP analysis, and cost estimates.",
  },
];

const modules = [
  {
    icon: Search,
    title: "Land Acquisition",
    desc: "Search, filter, and shortlist development sites with automated planning data overlays.",
  },
  {
    icon: FileText,
    title: "Feasibility Engine",
    desc: "AI-powered feasibility reports — zoning, FSR, height limits, heritage, hazards.",
  },
  {
    icon: FolderOpen,
    title: "Project Management",
    desc: "Track every project from acquisition through to settlement with milestone dashboards.",
  },
  {
    icon: Chrome,
    title: "Chrome Extension",
    desc: "One-click planning overlays on REA, Domain, and Landchecker property listings.",
  },
  {
    icon: Mail,
    title: "Email Hub",
    desc: "Multi-account email aggregation with AI-powered auto-linking to projects.",
  },
];

const advantages = [
  {
    icon: Layers,
    title: "End-to-End Platform",
    desc: "The only solution covering the entire development lifecycle.",
  },
  {
    icon: Zap,
    title: "Real-Time Government Data",
    desc: "Direct API connections to NSW ePlanning & VIC OpenData.",
  },
  {
    icon: Brain,
    title: "AI-Powered DCP Analysis",
    desc: "We digitise complex planning controls that competitors handle manually.",
  },
  {
    icon: Shield,
    title: "80% Cost Reduction",
    desc: "From $50–250K per project to ~$5K with LandIQ.",
  },
];

/* ─── Component ─── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* ─── NAV ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-16">
          <Link
            href="/"
            className={`font-serif text-2xl transition-colors ${
              scrolled ? "text-primary-800" : "text-white"
            }`}
          >
            LandIQ
          </Link>
          <div className="flex items-center gap-5">
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#how-it-works"
                className={`font-sans text-[13px] tracking-wide transition-colors ${
                  scrolled
                    ? "text-surface-500 hover:text-primary-800"
                    : "text-white/60 hover:text-white"
                }`}
              >
                How It Works
              </a>
              <a
                href="#platform"
                className={`font-sans text-[13px] tracking-wide transition-colors ${
                  scrolled
                    ? "text-surface-500 hover:text-primary-800"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Platform
              </a>
              <a
                href="#why-landiq"
                className={`font-sans text-[13px] tracking-wide transition-colors ${
                  scrolled
                    ? "text-surface-500 hover:text-primary-800"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Why LandIQ
              </a>
            </nav>
            <Link
              href="/pitch"
              className={`hidden md:inline-flex items-center gap-1.5 rounded-full border-[1.5px] px-5 py-2 text-[13px] font-sans tracking-wide transition-all duration-200 ${
                scrolled
                  ? "border-primary-800 text-primary-800 hover:bg-primary-800/5"
                  : "border-white/60 text-white hover:bg-white/10 hover:border-white"
              }`}
            >
              Pitch Deck <ArrowUpRight size={13} />
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden transition-colors ${
                scrolled ? "text-primary-800" : "text-white"
              }`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1 border-t border-surface-300">
                {["How It Works", "Platform", "Why LandIQ"].map((t) => (
                  <a
                    key={t}
                    href={`#${t.toLowerCase().replace(/\s/g, "-")}`}
                    className="block py-2.5 text-primary-800 font-sans text-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t}
                  </a>
                ))}
                <Link
                  href="/pitch"
                  className="block py-2.5 text-accent font-sans text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Pitch Deck →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden bg-primary-900 pt-20">
        <TopoLines opacity={0.06} />

        {/* Decorative vertical lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute right-16 lg:right-24 top-0 bottom-0 hidden md:flex gap-8"
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-[1px] h-full bg-white" />
          ))}
        </motion.div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="max-w-3xl">
            {/* Accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-accent mb-10"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-sm uppercase tracking-[0.15em] text-primary-300 mb-6"
            >
              AI-Powered Property Development
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.02] tracking-tight"
            >
              Address in,
              <br />
              feasibility out.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-body text-[17px] text-primary-400 mt-7 max-w-xl leading-relaxed"
            >
              Automate the entire desktop feasibility process — from government
              data retrieval to AI-generated reports — in minutes, not weeks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white px-8 py-3.5 text-white font-sans text-sm tracking-wide hover:bg-white/10 transition-all duration-200"
              >
                See How It Works <ChevronRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/30 px-8 py-3.5 text-white/60 font-sans text-sm tracking-wide hover:border-white/50 hover:text-white/80 transition-all duration-200"
              >
                Book a Demo <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom right decorative — Orens-style vertical text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute right-10 bottom-10 hidden lg:block"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          <span className="font-sans text-xl font-bold text-white tracking-[0.12em] uppercase">
            Intelligence · Automation · Precision
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── INTRO + STATS ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-16">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
            {/* Left — Text */}
            <div className="md:col-span-5">
              <FadeIn>
                <p className="font-sans text-xs tracking-[0.12em] uppercase text-accent mb-5">
                  About LandIQ
                </p>
                <h2 className="font-serif text-3xl md:text-[2.6rem] text-primary-800 leading-[1.15] mb-6">
                  We automate the most painful part of property development.
                </h2>
                <p className="font-body text-[17px] leading-[1.7] text-surface-500 mb-8">
                  Australian developers spend weeks and hundreds of thousands on
                  manual feasibility analysis — fragmented government data,
                  consultant reports, spreadsheet models. LandIQ replaces it all
                  with one AI-powered platform that queries 30+ government
                  sources in real time.
                </p>
                <Link
                  href="/pitch"
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-primary-800 px-6 py-2.5 text-primary-800 font-sans text-sm tracking-wide hover:bg-primary-800/5 transition-all duration-200"
                >
                  View More <ArrowUpRight size={14} />
                </Link>
              </FadeIn>
            </div>
            {/* Right — Stats */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-0">
                {stats.map((s, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="border-t-2 border-primary-800 pt-6 pb-10 pr-8">
                      <s.icon
                        size={22}
                        className="text-primary-600 mb-4"
                        strokeWidth={1.5}
                      />
                      <p className="font-serif text-[3rem] text-primary-800 leading-none mb-2">
                        <AnimatedCounter value={s.value} suffix={s.suffix} />
                      </p>
                      <p className="font-sans text-sm text-surface-500">
                        {s.label}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="relative py-24 md:py-32 bg-surface-200 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-16">
          <FadeIn>
            <p className="font-sans text-xs tracking-[0.12em] uppercase text-accent mb-5">
              How It Works
            </p>
            <h2 className="font-serif text-3xl md:text-[2.6rem] text-primary-800 leading-[1.15] mb-16 max-w-lg">
              Three steps to a complete feasibility.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-0">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className={`py-8 md:pr-12 ${i < 2 ? "md:border-r border-surface-400/40" : ""} ${i > 0 ? "md:pl-12" : ""}`}>
                  <span className="font-serif text-5xl text-primary-200 block mb-6">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-full border-[1.5px] border-primary-300 flex items-center justify-center mb-5">
                    <step.icon
                      size={20}
                      className="text-primary-700"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-sans text-lg font-medium text-primary-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.7] text-surface-500">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PLATFORM MODULES ─── */}
      <section id="platform" className="relative py-24 md:py-32 bg-primary-800 overflow-hidden">
        <TopoLines opacity={0.04} />

        {/* Decorative vertical text */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-0">
          <div
            className="font-sans font-bold text-2xl text-white/[0.06] tracking-[0.12em] uppercase leading-[2.4]"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Feasibility · Acquisition · Management · Sales
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-16">
          <FadeIn>
            <p className="font-sans text-xs tracking-[0.12em] uppercase text-accent mb-5">
              Platform Modules
            </p>
            <h2 className="font-serif text-3xl md:text-[2.6rem] text-white leading-[1.15] mb-16 max-w-xl">
              Everything a developer needs — in one system.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border border-white/10 rounded-xl p-8 hover:bg-white/[0.04] transition-all duration-300 group">
                  <mod.icon
                    size={22}
                    className="text-primary-300 mb-5 group-hover:text-accent transition-colors"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-sans text-base font-medium text-white mb-2">
                    {mod.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.7] text-primary-400">
                    {mod.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY LANDIQ ─── */}
      <section id="why-landiq" className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-16">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
            {/* Left — image */}
            <div className="md:col-span-5 order-2 md:order-1">
              <FadeIn>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/landiq/images/aerial/aerial-development-03.jpg"
                    alt="Aerial view of property development"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 p-6 bg-surface-100 rounded-xl">
                  <p className="font-serif text-3xl text-primary-800 mb-1">
                    2–4 weeks → <span className="text-accent">&lt;1 hour</span>
                  </p>
                  <p className="font-sans text-sm text-surface-500">
                    Average feasibility turnaround time
                  </p>
                </div>
              </FadeIn>
            </div>
            {/* Right — text */}
            <div className="md:col-span-7 order-1 md:order-2">
              <FadeIn>
                <p className="font-sans text-xs tracking-[0.12em] uppercase text-accent mb-5">
                  Why LandIQ
                </p>
                <h2 className="font-serif text-3xl md:text-[2.6rem] text-primary-800 leading-[1.15] mb-12">
                  The only end-to-end platform for Australian developers.
                </h2>
              </FadeIn>
              <div className="space-y-8">
                {advantages.map((a, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border-[1.5px] border-primary-300 flex items-center justify-center mt-0.5">
                        <a.icon
                          size={18}
                          className="text-primary-700"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h3 className="font-sans text-base font-medium text-primary-800 mb-1">
                          {a.title}
                        </h3>
                        <p className="font-body text-[15px] leading-[1.7] text-surface-500">
                          {a.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contact" className="relative py-28 md:py-36 bg-primary-900 overflow-hidden">
        <TopoLines opacity={0.05} />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-16 text-center">
          <FadeIn>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[2px] bg-accent mx-auto mb-10"
            />
            <p className="font-sans text-xs tracking-[0.12em] uppercase text-primary-400 mb-5">
              Get Started
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-white leading-[1.1] mb-6">
              Ready to transform your
              <br className="hidden md:block" /> feasibility process?
            </h2>
            <p className="font-body text-lg text-primary-300 mb-12 max-w-xl mx-auto leading-relaxed">
              Join the next generation of Australian property developers using
              AI to make faster, smarter land acquisition decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:contact@landiq.com.au"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white px-8 py-3.5 text-white font-sans text-sm tracking-wide hover:bg-white/10 transition-all duration-200"
              >
                Book a Demo <ArrowUpRight size={14} />
              </a>
              <Link
                href="/pitch"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/30 px-8 py-3.5 text-white/60 font-sans text-sm tracking-wide hover:bg-white/10 hover:border-white/50 hover:text-white/80 transition-all duration-200"
              >
                View Pitch Deck <ChevronRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-primary-900 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-16 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-14">
            <div>
              <h3 className="font-serif text-2xl text-white mb-3">LandIQ</h3>
              <p className="font-body text-sm text-primary-400 leading-[1.7]">
                AI-Powered Property Development Platform for Australian real
                estate developers.
              </p>
            </div>
            <div>
              <p className="font-sans text-xs tracking-[0.12em] uppercase text-primary-500 mb-5">
                Resources
              </p>
              <div className="space-y-3">
                {[
                  { label: "Pitch Deck", href: "/pitch" },
                  { label: "Investor Deck", href: "/invest" },
                  { label: "Brochure", href: "/brochure" },
                  { label: "Proposal", href: "/proposal" },
                  { label: "Technical Solution", href: "/tech-solution" },
                  { label: "Statement of Works", href: "/sow" },
                ].map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="block font-sans text-sm text-primary-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="font-sans text-xs tracking-[0.12em] uppercase text-primary-500 mb-5">
                Contact
              </p>
              <a
                href="mailto:contact@landiq.com.au"
                className="block font-sans text-sm text-primary-300 hover:text-white transition-colors mb-3"
              >
                contact@landiq.com.au
              </a>
              <p className="font-sans text-sm text-primary-400">
                Sydney, Australia
              </p>
            </div>
          </div>
          <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-primary-500">
              © {new Date().getFullYear()} LandIQ. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-sans text-xs text-primary-500 hover:text-white transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
