"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "AI/ML" },
  { name: "LangChain", category: "AI/ML" },
  { name: "OpenAI / Anthropic", category: "AI/ML" },
  { name: "AWS", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Kafka", category: "Streaming" },
  { name: "GraphQL", category: "API" },
];

const categoryColor: Record<string, string> = {
  Frontend: "text-cyan-400 bg-cyan-400/10",
  Language: "text-indigo-400 bg-indigo-400/10",
  Backend: "text-green-400 bg-green-400/10",
  "AI/ML": "text-purple-400 bg-purple-400/10",
  Cloud: "text-blue-400 bg-blue-400/10",
  DevOps: "text-orange-400 bg-orange-400/10",
  Database: "text-pink-400 bg-pink-400/10",
  Streaming: "text-amber-400 bg-amber-400/10",
  API: "text-teal-400 bg-teal-400/10",
};

export default function TechSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">
            Our Technology Stack
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Powered by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:border-white/10 transition-all duration-200 cursor-default"
            >
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${categoryColor[tech.category] || "text-white/40 bg-white/5"}`}>
                {tech.category}
              </span>
              <span className="text-sm text-white/80 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
