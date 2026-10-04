"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = "Please provide your name";
    }

    if (!formData.email.trim()) {
      errs.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email format";
    }

    if (!formData.subject.trim()) {
      errs.subject = "Please enter a subject";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const subjectEncoded = encodeURIComponent(formData.subject);
    const bodyEncoded = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bento Contact Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>OPEN FOR ROLES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build <span className="gradient-accent">Something</span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2.5 leading-relaxed">
                I'm currently looking for entry-level opportunities where I can apply my Java, programming, web development, and AI skills while continuing to grow as a software developer.
              </p>
            </div>

            {/* Micro Bento Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Bento */}
              <div className="bento-card p-4 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="block text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Bento */}
              <div className="bento-card p-4 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="block text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  aria-label="Copy phone number"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Bento */}
              <div className="bento-card p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                    Location
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Portfolio Link Bento */}
              <div className="bento-card p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                    Portfolio App
                  </span>
                  <p className="text-xs font-mono text-cyan-300 truncate max-w-[200px] sm:max-w-xs mt-0.5">
                    aathidasan-ai-portfoli-craft.lovable.app
                  </p>
                </div>
                <a
                  href={PERSONAL_INFO.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Open portfolio in new tab"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bento-card p-6 sm:p-8 relative">
              <h3 className="text-xl font-bold text-white mb-1.5">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to dispatch an email inquiry directly to Aathidasan.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your email client has been opened with your inquiry addressed to{" "}
                    <strong className="text-cyan-300">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-3 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-slate-300 mb-1.5"
                      >
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Hiring Manager"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                          errors.name ? "border-rose-500" : "border-white/10"
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-slate-300 mb-1.5"
                      >
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="name@company.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                          errors.email ? "border-rose-500" : "border-white/10"
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="e.g. Entry-Level Java Developer Opportunity"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        errors.subject ? "border-rose-500" : "border-white/10"
                      }`}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-slate-300 mb-1.5"
                    >
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Describe your team, role, or project..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/40 border text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-y ${
                        errors.message ? "border-rose-500" : "border-white/10"
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:shadow-indigo-600/50 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Opening Email..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
