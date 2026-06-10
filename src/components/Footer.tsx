"use client";

import { motion } from "framer-motion";
import { Zap, Mail, MessageCircle, Rss, Code } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Services: [
    "Custom Agentic Development",
    "Cloud & DevOps",
    "Platform Engineering",
    "Data Engineering",
    "Product Engineering",
    "Web & App Development",
    "UI/UX & Design",
    "Staff Augmentation",
    "Product Strategy",
    "Digital Marketing",
  ],
  Company: ["About Us", "Careers", "Blog", "Case Studies", "Press Kit"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  { icon: MessageCircle, label: "Twitter / X", href: "#" },
  { icon: Rss, label: "LinkedIn", href: "#" },
  { icon: Code, label: "GitHub", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@hansinfotech.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-100 h-75 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-white">Hans</span>
                <span className="gradient-text"> Infotech</span>
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              Transforming businesses with intelligent IT solutions—from AI agents to cloud
              infrastructure, we engineer what&apos;s next.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Hans Infotech. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built with Next.js · TypeScript · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
