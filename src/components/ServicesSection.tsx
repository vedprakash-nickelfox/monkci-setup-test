"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Bot,
  Cloud,
  Layers,
  Database,
  Code2,
  Smartphone,
  Palette,
  Users,
  LineChart,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Custom Agentic Development",
    description:
      "Building adaptive AI agents that think, act, and automate—streamlining workflows and accelerating innovation.",
    gradient: "from-violet-500 to-indigo-500",
    glow: "rgba(139, 92, 246, 0.3)",
    tag: "AI & Automation",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Services",
    description:
      "Empower your business with cutting-edge Cloud and DevOps solutions, driving efficiency & innovation for sustainable growth.",
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(34, 211, 238, 0.3)",
    tag: "Infrastructure",
  },
  {
    icon: Layers,
    title: "Platform Engineering",
    description:
      "Architecting seamless digital ecosystems through expert Platform Engineering prowess.",
    gradient: "from-indigo-500 to-blue-600",
    glow: "rgba(99, 102, 241, 0.3)",
    tag: "Architecture",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Transforming raw data into valuable insights through expert Data Engineering solutions.",
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16, 185, 129, 0.3)",
    tag: "Data & Analytics",
  },
  {
    icon: Code2,
    title: "Product Engineering & Development",
    description:
      "Our services cover the entire spectrum of product bench-marking, software design, development, engineering, consulting and support.",
    gradient: "from-orange-500 to-pink-500",
    glow: "rgba(249, 115, 22, 0.3)",
    tag: "Engineering",
  },
  {
    icon: Smartphone,
    title: "Web & App Development",
    description:
      "We help our clients solve overarching business problems & elevate their operations through spot-on Web & App solutions.",
    gradient: "from-pink-500 to-rose-500",
    glow: "rgba(236, 72, 153, 0.3)",
    tag: "Development",
  },
  {
    icon: Palette,
    title: "UI/UX & Design",
    description:
      "Our designs combine insightful data and empathy to offer a delightful user experience.",
    gradient: "from-fuchsia-500 to-purple-600",
    glow: "rgba(217, 70, 239, 0.3)",
    tag: "Design",
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description:
      "Expect the best technology and UI/UX design resources on demand from us.",
    gradient: "from-amber-500 to-orange-500",
    glow: "rgba(245, 158, 11, 0.3)",
    tag: "Talent",
  },
  {
    icon: LineChart,
    title: "Product Strategy & Consulting",
    description:
      "Through an efficient process, we design product strategies that are in sync with client goals.",
    gradient: "from-teal-500 to-cyan-600",
    glow: "rgba(20, 184, 166, 0.3)",
    tag: "Strategy",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "A comprehensive suite of Digital Marketing services tailored to your business needs. SEO, SEM, SMO, PPC—anything you need.",
    gradient: "from-red-500 to-pink-600",
    glow: "rgba(239, 68, 68, 0.3)",
    tag: "Marketing",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function ServiceCard({
  service,
}: {
  service: (typeof services)[0];
}) {
  const Icon = service.icon;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl glass-card p-6 cursor-pointer overflow-hidden"
      style={
        {
          "--glow": service.glow,
        } as React.CSSProperties
      }
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${service.glow} 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-all duration-300"
        style={{ boxShadow: `0 0 0 0 ${service.glow}` }}
      />

      {/* Tag */}
      <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-4">
        {service.tag}
      </span>

      {/* Icon */}
      <div
        className={`relative w-12 h-12 rounded-xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}
      >
        <Icon className="w-6 h-6 text-white" />
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
          style={{ background: `linear-gradient(135deg, ${service.glow}, transparent)` }}
        />
      </div>

      {/* Content */}
      <h3 className="text-base font-bold text-white mb-2 leading-snug">{service.title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{service.description}</p>

      {/* Arrow */}
      <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-white/30 group-hover:text-white/70 transition-colors duration-300">
        Learn more
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      {/* Bottom gradient line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            End-to-end IT solutions designed to transform your business — from intelligent AI
            systems to scalable cloud infrastructure.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
