"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const services = [
  "Custom Agentic Development",
  "Cloud & DevOps Services",
  "Platform Engineering",
  "Data Engineering",
  "Product Engineering & Development",
  "Web & App Development",
  "UI/UX & Design",
  "Staff Augmentation",
  "Product Strategy & Consulting",
  "Digital Marketing",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // Replace with your actual form submission endpoint (Formspree, EmailJS, etc.)
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
    setForm(initialForm);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-white">Message Sent!</h3>
        <p className="text-white/60 max-w-xs text-sm">
          Thanks for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Full Name"
          name="name"
          type="text"
          placeholder="John Smith"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@company.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      {/* Company + Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Company"
          name="company"
          type="text"
          placeholder="Acme Inc. (optional)"
          value={form.company}
          onChange={handleChange}
        />
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-white/60 uppercase tracking-wider">
            Service Interested In
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white/80 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all appearance-none"
          >
            <option value="" className="bg-[#0D1224] text-white/60">
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-[#0D1224] text-white">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-white/60 uppercase tracking-wider">
          Message <span className="text-indigo-400">*</span>
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your project, goals, and timeline…"
          value={form.message}
          onChange={handleChange}
          className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-white/80 placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none ${
            errors.message ? "border-red-500/60" : "border-white/10 focus:border-indigo-500/60"
          }`}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs text-red-400"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="relative z-10 flex items-center gap-2">
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-cyan-500" />
        <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-white/60 uppercase tracking-wider">
        {label} {required && <span className="text-indigo-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-4 py-3 rounded-xl bg-white/5 border text-sm text-white/80 placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all ${
          error ? "border-red-500/60" : "border-white/10 focus:border-indigo-500/60"
        }`}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
