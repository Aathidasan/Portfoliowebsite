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
  Linkedin,
  Globe,
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
    <section id="contact" className="py-24 px-6 border-t border-white/10 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Signature Contact Header (Matching Reference Site) */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            I'm currently looking to join a cross-functional software engineering team that values building impactful solutions, or have an opportunity in mind? Let's connect.
          </p>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-lg sm:text-xl text-purple-400 hover:text-purple-300 font-medium transition-colors inline-block"
          >
            {PERSONAL_INFO.email}
          </a>

          {/* Social Icons Strip (Matching Reference Site) */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {PERSONAL_INFO.linkedin && (
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/60 transition-all text-white hover:text-purple-300 shadow-lg shadow-purple-950/50"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/60 transition-all text-white hover:text-purple-300 shadow-lg shadow-purple-950/50"
              aria-label="Email Aathidasan"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/60 transition-all text-white hover:text-purple-300 shadow-lg shadow-purple-950/50"
              aria-label="Call Aathidasan"
            >
              <Phone className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/60 transition-all text-white hover:text-purple-300 shadow-lg shadow-purple-950/50"
              aria-label="Portfolio Platform"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Message Composer Card */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-2 text-center">
            Send an Direct Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-white/70 mb-6 text-center">
            Send a message regarding opportunities, full-time roles, or software projects.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl bg-purple-950/60 border border-purple-500/40 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
              <p className="text-xs sm:text-sm text-white/80">
                Your email client has been prepared with your inquiry addressed to{" "}
                <strong className="text-purple-300">{PERSONAL_INFO.email}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="mt-2 px-4 py-2 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/20"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-white/80 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Hiring Manager"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-white/80 mb-1">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-white/80 mb-1">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: undefined });
                  }}
                  placeholder="e.g. Entry-Level Java Full Stack Developer Role"
                  className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500"
                />
                {errors.subject && <p className="text-xs text-rose-400 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-white/80 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Describe your role or opportunity..."
                  className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 resize-y"
                />
                {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-purple-900/50 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Opening Email..." : "Send Message"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
