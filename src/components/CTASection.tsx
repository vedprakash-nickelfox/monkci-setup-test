"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-br from-indigo-600/90 via-violet-600/80 to-cyan-500/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Floating orbs inside CTA */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-10 md:p-16">
            {/* Left */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
                  Let&apos;s Build Together
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                  Ready to transform
                  <br />
                  your business?
                </h2>
                <p className="text-white/70 text-base max-w-lg leading-relaxed">
                  Talk to our experts. We&apos;ll understand your vision and propose the best
                  technology strategy — no commitment needed.
                </p>
              </motion.div>
            </div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center lg:items-end gap-4"
            >
              <motion.a
                href="mailto:hello@hansinfotech.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-indigo-700 font-bold text-base shadow-2xl hover:shadow-white/20 transition-all duration-300"
              >
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a
                  href="mailto:hello@hansinfotech.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@hansinfotech.com
                </a>
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 99999 99999
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
