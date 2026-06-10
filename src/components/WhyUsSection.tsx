"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ShieldCheck,
  Rocket,
  HeartHandshake,
  Globe2,
  Award,
  Clock,
  TrendingUp,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Agile Delivery",
    description: "Iterative sprints with continuous delivery—your product ships faster and smarter.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Security-first architecture with compliance built in at every layer.",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: HeartHandshake,
    title: "Client Partnership",
    description: "We don't just deliver—we collaborate, advise, and grow alongside your vision.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Globe2,
    title: "Global Expertise",
    description: "Multi-domain experience across fintech, healthcare, e-commerce, and SaaS.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous QA pipelines ensure every release meets the highest standards.",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support with guaranteed SLA uptime.",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Systems designed to scale from startup MVP to enterprise-level throughput.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "AI-First Approach",
    description: "Every solution is evaluated for AI augmentation to maximize automation ROI.",
    gradient: "from-fuchsia-500 to-pink-500",
  },
];

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 200, suffix: "+", label: "Projects Shipped" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 8, suffix: "+", label: "Years in Industry" },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4">
            Why Hans Infotech
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Built for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            We combine technical depth, domain expertise, and genuine partnership to deliver outcomes
            that matter.
          </p>
        </motion.div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="text-center p-6 rounded-2xl glass-card border border-white/5"
            >
              <div className="text-4xl font-extrabold gradient-text mb-1">
                <CountUp end={m.value} suffix={m.suffix} />
              </div>
              <div className="text-sm text-white/50">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl glass-card hover:border-white/10 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
