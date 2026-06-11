"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Years of Excellence" },
  { value: "12+", label: "IT Services" },
];

const floatingOrbs = [
  { size: 300, top: "10%", left: "5%",  color: "rgba(99,102,241,0.25)",  delay: 0   },
  { size: 400, top: "60%", left: "70%", color: "rgba(34,211,238,0.18)",  delay: 1   },
  { size: 250, top: "30%", left: "80%", color: "rgba(168,85,247,0.22)",  delay: 0.5 },
  { size: 200, top: "75%", left: "15%", color: "rgba(59,130,246,0.18)",  delay: 1.5 },
];

// Unsplash — dark futuristic tech city
const BG_IMAGE =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=85&w=1920&auto=format&fit=crop";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Parallax: image scrolls slower than the page
  const bgY        = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY   = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOp  = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      id="hero"
    >
      {/* ── Background image (parallax) ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <Image
          src={BG_IMAGE}
          alt="Hans Infotech hero background"
          fill
          priority
          unoptimized
          className="object-cover object-center scale-110"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Overlay stack (darkens image so text pops) ── */}

      {/* Base dark tint */}
      <div className="absolute inset-0 z-[1] bg-[#04071A]/60" />

      {/* Top vignette — keeps navbar area very dark */}
      <div className="absolute inset-0 z-[2] bg-linear-to-b from-[#04071A]/80 via-transparent to-transparent" />

      {/* Bottom fade — blends into site bg seamlessly */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] h-48
                      bg-linear-to-t from-[#04071A] via-[#04071A]/70 to-transparent" />

      {/* Indigo/cyan radial glow — branding colour cast */}
      <div className="absolute inset-0 z-[3]
                      bg-[radial-gradient(ellipse_80%_55%_at_50%_55%,rgba(99,102,241,0.18)_0%,transparent_70%)]" />

      {/* ── Animated grid (subtle) ── */}
      <div
        className="absolute inset-0 z-[4] opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Floating colour orbs ── */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl pointer-events-none z-[5]"
          style={{
            width:  orb.size,
            height: orb.size,
            top:    orb.top,
            left:   orb.left,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{ y: [0, -28, 0], x: [0, 18, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 8 + i * 2, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ── Content ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     border border-indigo-400/40 bg-indigo-500/15
                     text-indigo-200 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4" />
          AI-Powered IT Solutions for Modern Enterprises
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6
                     drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
        >
          <span className="text-white">Transforming Ideas</span>
          <br />
          <span className="gradient-text">Into Digital Reality</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed
                     drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
        >
          Hans Infotech engineers intelligent software systems — from adaptive AI agents and
          cloud infrastructure to full-stack products — accelerating your business forward.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="/#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4
                       text-base font-semibold text-white rounded-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-cyan-500" />
            <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-cyan-400
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-600 to-cyan-500
                            blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
          </motion.a>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold
                       text-white/90 rounded-2xl border border-white/20 bg-white/10
                       hover:bg-white/20 hover:border-white/30 backdrop-blur-sm
                       transition-all duration-300"
          >
            Book a Free Call
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -3 }}
              className="flex flex-col items-center p-4 rounded-2xl
                         bg-white/8 border border-white/10 backdrop-blur-md"
            >
              <span className="text-3xl font-extrabold gradient-text">{stat.value}</span>
              <span className="text-xs text-white/60 mt-1 text-center">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
