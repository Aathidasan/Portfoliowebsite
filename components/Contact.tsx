"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
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
    }, 400);
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
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                06 / GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Something
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                I'm currently looking for entry-level opportunities where I can apply my Java, programming, web development, and AI skills while continuing to grow as a software developer.
              </p>
            </div>

            {/* Direct Details Cards */}
            <div className="space-y-2.5 pt-2">
              {/* Email */}
              <div className="studio-card p-4 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email"
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/10"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="studio-card p-4 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:underline"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  aria-label="Copy phone"
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/10"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="studio-card p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                    Location
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Portfolio Link */}
              <div className="studio-card p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                    Portfolio Platform
                  </span>
                  <p className="text-xs font-mono text-zinc-300 truncate max-w-[200px] sm:max-w-xs mt-0.5">
                    aathidasan-ai-portfoli-craft.lovable.app
                  </p>
                </div>
                <a
                  href={PERSONAL_INFO.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/10"
                  aria-label="Open portfolio"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="studio-card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-zinc-400 mb-5">
                Fill in the details below to dispatch an email inquiry directly to Aathidasan.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-zinc-950 border border-white/10 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/20 text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Message Prepared!
                  </h4>
                  <p className="text-xs text-zinc-400 max-w-md mx-auto">
                    Your native email client has been prepared with your inquiry addressed to{" "}
                    <strong className="text-white">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="btn-secondary-outline px-4 py-2 text-xs font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-zinc-400 mb-1"
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
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-black border text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-white transition-colors ${
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

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-zinc-400 mb-1"
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
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-black border text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-white transition-colors ${
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

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono text-zinc-400 mb-1"
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
                      placeholder="e.g. Entry-Level Java Developer Role"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-black border text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-white transition-colors ${
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

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-zinc-400 mb-1"
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
                      placeholder="Describe the opportunity or project..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-black border text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-white transition-colors resize-y ${
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-white w-full py-3 text-sm flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
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
