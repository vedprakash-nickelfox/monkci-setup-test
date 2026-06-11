"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ParticleBackground from "@/components/ParticleBackground";

const contactCards = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@hansinfotech.com",
    sub: "We reply within 24 hours",
    href: "mailto:hello@hansinfotech.com",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 99999 99999",
    sub: "Mon–Fri, 9 AM – 7 PM IST",
    href: "tel:+919999999999",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Noida, India",
    sub: "Sector 62, Uttar Pradesh",
    href: "#",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat",
    sub: "9:00 AM – 7:00 PM IST",
    href: "#",
    gradient: "from-amber-500 to-orange-500",
  },
];

const faqs = [
  {
    q: "How quickly can you start on a project?",
    a: "We typically onboard new clients within 1–2 weeks of the initial scoping call, depending on team availability.",
  },
  {
    q: "Do you work with startups as well as enterprises?",
    a: "Absolutely. We serve everyone from early-stage startups building MVPs to large enterprises modernising legacy infrastructure.",
  },
  {
    q: "What engagement models do you offer?",
    a: "We offer fixed-price projects, time & material retainers, and dedicated team augmentation — whatever fits your needs.",
  },
  {
    q: "Can I see examples of past work?",
    a: "Yes — reach out via the form and we'll share relevant case studies under NDA if required.",
  },
];

export default function ContactPageClient() {
  return (
    <main className="relative min-h-screen bg-[#04071A]">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_20%,rgba(99,102,241,0.1)_0%,transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center text-center max-w-2xl mx-auto"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                Let&apos;s Work Together
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                <span className="text-white">Get in </span>
                <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                Have a project in mind? We&apos;d love to hear about it. Fill in the form and
                our team will get back to you within one business day.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.label}
                  href={card.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col gap-3 p-5 rounded-2xl glass-card hover:border-white/10 transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-linear-to-br ${card.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-0.5">
                      {card.label}
                    </p>
                    <p className="text-sm font-semibold text-white">{card.value}</p>
                    <p className="text-xs text-white/40 mt-0.5">{card.sub}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </section>

        {/* Main content: Form + FAQ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form — wider column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3 rounded-2xl glass-card p-8"
            >
              <h2 className="text-xl font-bold text-white mb-1">Send us a message</h2>
              <p className="text-sm text-white/40 mb-8">
                Fields marked with <span className="text-indigo-400">*</span> are required.
              </p>
              <ContactForm />
            </motion.div>

            {/* FAQ column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div>
                <h2 className="text-xl font-bold text-white mb-1">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-white/40">Quick answers before you write to us.</p>
              </div>

              <div className="flex flex-col gap-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="p-5 rounded-2xl glass-card"
                  >
                    <p className="text-sm font-semibold text-white mb-2">{faq.q}</p>
                    <p className="text-sm text-white/50 leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA nudge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="relative rounded-2xl overflow-hidden p-6"
              >
                <div className="absolute inset-0 bg-linear-to-br from-indigo-600/80 to-cyan-600/60" />
                <div className="relative z-10">
                  <p className="text-sm font-semibold text-white mb-1">
                    Prefer a call instead?
                  </p>
                  <p className="text-xs text-white/70 mb-4">
                    Book a free 30-minute discovery call with one of our solution architects.
                  </p>
                  <a
                    href="tel:+919999999999"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 px-4 py-2 rounded-xl transition-colors duration-200"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Schedule a Call
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
