"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Code2, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We deep-dive into your business goals, technical requirements, and user needs to build a crystal-clear project scope.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy & Design",
    description:
      "Our architects and designers craft the blueprint—technical architecture, UI/UX wireframes, and a phased roadmap.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code2,
    number: "03",
    title: "Agile Development",
    description:
      "Sprint-based engineering with weekly demos. Full transparency, iterative feedback, and continuous integration.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Rocket,
    number: "04",
    title: "QA & Launch",
    description:
      "Automated and manual testing, performance optimisation, and zero-downtime deployment pipelines.",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    icon: LifeBuoy,
    number: "05",
    title: "Support & Scale",
    description:
      "Post-launch monitoring, feature iterations, and 24/7 SLA-backed support to keep you growing.",
    gradient: "from-fuchsia-500 to-purple-500",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-125 h-125 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">
            How We Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            A proven delivery framework that turns complex requirements into reliable, scalable
            software.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-indigo-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${step.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#04071A] border border-white/10 flex items-center justify-center">
                      <span className="text-[10px] font-bold gradient-text">{step.number}</span>
                    </div>
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-linear-to-br ${step.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                    />
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
