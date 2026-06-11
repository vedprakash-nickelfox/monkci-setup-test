"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Globe,
  Award,
  ArrowRight,
  CheckCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

/* ─── Data ──────────────────────────────────────────────── */

const milestones = [
  {
    year: "2016",
    title: "Founded",
    description:
      "Hans Infotech was established with a singular focus: deliver honest, high-quality software engineering to growth-stage businesses.",
  },
  {
    year: "2018",
    title: "Cloud Practice Launch",
    description:
      "Expanded into Cloud & DevOps as our clients scaled. Built dedicated AWS and GCP practices to support hyper-growth infrastructure needs.",
  },
  {
    year: "2020",
    title: "Platform & Data",
    description:
      "Launched Platform Engineering and Data Engineering verticals, helping clients turn raw data into competitive advantage.",
  },
  {
    year: "2022",
    title: "AI & Agentic Systems",
    description:
      "Pioneered our Agentic AI practice — building intelligent, autonomous agents that automate complex workflows end-to-end.",
  },
  {
    year: "2024",
    title: "50+ Clients & Growing",
    description:
      "Crossed 200 projects delivered across fintech, healthcare, e-commerce and SaaS, with a team of 80+ engineers worldwide.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Client First",
    description:
      "Every decision starts with one question: does this genuinely serve our client's goals? We succeed when our clients succeed.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Lightbulb,
    title: "Relentless Innovation",
    description:
      "We stay obsessively ahead of the curve — investing in emerging tech so our clients always get tomorrow's solutions today.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: CheckCircle,
    title: "Uncompromising Quality",
    description:
      "Code reviews, automated testing, and strict SLAs are non-negotiable. We ship software we're proud to put our name on.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Radical Transparency",
    description:
      "No hidden costs, no surprises. We communicate openly about progress, blockers, and decisions throughout every engagement.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description:
      "Diverse perspectives make better products. Our team spans time zones and disciplines, bringing a world-class lens to every project.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    description:
      "We believe great software is an art as much as a science. We take pride in elegant architectures and clean, maintainable code.",
    gradient: "from-fuchsia-500 to-purple-500",
  },
];

const team = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    bio: "15+ years in enterprise software. Previously led engineering at two unicorn startups.",
    initials: "RS",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    name: "Priya Verma",
    role: "CTO",
    bio: "AI/ML specialist and ex-Googler. Architects the intelligence behind our Agentic AI products.",
    initials: "PV",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Amit Gupta",
    role: "VP Engineering",
    bio: "Cloud-native expert who has migrated 30+ enterprises to AWS and GCP at scale.",
    initials: "AG",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Sneha Kapoor",
    role: "Head of Design",
    bio: "Crafts delightful, data-driven interfaces that turn complex workflows into intuitive experiences.",
    initials: "SK",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Vikram Singh",
    role: "Head of Data",
    bio: "10+ years building data pipelines and analytics platforms for Fortune 500 companies.",
    initials: "VS",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Neha Joshi",
    role: "Head of Delivery",
    bio: "PMP-certified. Ensures every project ships on time, on budget, and above expectations.",
    initials: "NJ",
    gradient: "from-fuchsia-500 to-purple-500",
  },
];

const stats = [
  { value: "8+", label: "Years in Business" },
  { value: "80+", label: "Team Members" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "12+", label: "Industries Served" },
  { value: "98%", label: "Client Retention" },
];

/* ─── Helpers ────────────────────────────────────────────── */

function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">
        {eyebrow}
      </span>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function AboutPageClient() {
  return (
    <main className="relative min-h-screen bg-[#04071A]">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(99,102,241,0.1)_0%,transparent_70%)]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6"
                >
                  <Zap className="w-4 h-4" />
                  Our Story
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6"
                >
                  <span className="text-white">We Build What</span>
                  <br />
                  <span className="gradient-text">Matters Most</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/60 text-lg leading-relaxed mb-8"
                >
                  Hans Infotech was founded on a simple belief: technology should solve real
                  problems, not create new ones. Since 2016, we have partnered with startups and
                  enterprises alike to design, build, and scale intelligent digital systems that
                  drive measurable outcomes.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Work With Us
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-cyan-500" />
                    <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <Link
                    href="#team"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white/80 text-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    Meet the Team
                  </Link>
                </motion.div>
              </div>

              {/* Right — stats grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.07 }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center justify-center p-5 rounded-2xl glass-card text-center"
                  >
                    <span className="text-3xl font-extrabold gradient-text">{s.value}</span>
                    <span className="text-xs text-white/40 mt-1 leading-tight">{s.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  label: "Our Mission",
                  gradient: "from-indigo-500 to-violet-500",
                  bg: "from-indigo-600/10 to-violet-600/5",
                  border: "border-indigo-500/20",
                  text: "To empower businesses of every size with technology that is intelligent, scalable, and human-centred — transforming complex challenges into clean, maintainable solutions that stand the test of time.",
                },
                {
                  icon: Eye,
                  label: "Our Vision",
                  gradient: "from-cyan-500 to-blue-500",
                  bg: "from-cyan-600/10 to-blue-600/5",
                  border: "border-cyan-500/20",
                  text: "To be the most trusted technology partner for businesses building the next generation of digital products — recognised globally for engineering excellence, AI innovation, and unwavering client success.",
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ y: -5 }}
                    className={`relative p-8 rounded-2xl border ${card.border} overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${card.bg} opacity-60`}
                    />
                    <div className="relative z-10">
                      <div
                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${card.gradient} flex items-center justify-center mb-5 shadow-lg`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">{card.label}</h3>
                      <p className="text-white/60 leading-relaxed text-sm">{card.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Our Journey"
              title="Built Over"
              highlight="8 Years"
              subtitle="From a small consultancy to a full-service technology powerhouse — here are the milestones that shaped us."
            />

            <TimelineSection />
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-20 overflow-hidden">
          <div className="absolute right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="What Drives Us"
              title="Our Core"
              highlight="Values"
              subtitle="These aren't slogans on a wall. They are the principles we apply in every code review, every client call, every decision."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="group p-6 rounded-2xl glass-card hover:border-white/10 transition-all duration-300"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl bg-linear-to-br ${v.gradient} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">{v.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{v.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section id="team" className="py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="The People Behind It"
              title="Meet Our"
              highlight="Team"
              subtitle="Seasoned engineers, designers, and strategists united by a passion for building exceptional software."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group p-6 rounded-2xl glass-card hover:border-white/10 transition-all duration-300"
                >
                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-linear-to-br ${member.gradient} flex items-center justify-center shadow-lg text-white font-bold text-lg`}
                      >
                        {member.initials}
                      </div>
                      <div
                        className={`absolute inset-0 rounded-2xl bg-linear-to-br ${member.gradient} blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{member.name}</p>
                      <p className="text-xs text-indigo-400 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden text-center p-12 md:p-20"
            >
              <div className="absolute inset-0 bg-linear-to-br from-indigo-600/90 via-violet-600/80 to-cyan-500/70" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
                  Join 50+ companies already working with us
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                  Ready to build something great?
                </h2>
                <p className="text-white/70 max-w-lg mx-auto mb-8 text-base">
                  Let&apos;s talk about your project. Our team will craft a tailored technology
                  strategy within 48 hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-indigo-700 font-bold text-base shadow-xl hover:shadow-white/20 transition-all duration-300"
                    >
                      Start a Conversation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/#services"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white border border-white/20 bg-white/10 hover:bg-white/20 font-semibold text-base transition-all duration-300"
                    >
                      View Our Services
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

/* ─── Timeline sub-component ─────────────────────────────── */

function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-indigo-500/40 via-cyan-500/30 to-transparent" />

      <div className="flex flex-col gap-12">
        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex items-start gap-6 md:gap-0 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`pl-12 md:pl-0 w-full md:w-[calc(50%-2.5rem)] ${
                  isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-linear-to-r from-indigo-500 to-cyan-500 text-white mb-2`}
                >
                  {m.year}
                </div>
                <h3 className="text-base font-bold text-white mb-1">{m.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{m.description}</p>
              </div>

              {/* Dot — desktop centered */}
              <div className="absolute left-4 md:left-1/2 top-1 md:top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-linear-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/40 border-2 border-[#04071A]" />

              {/* Empty opposite side spacer */}
              <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
