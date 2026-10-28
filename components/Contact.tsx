"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="space-y-8">
      {/* Section Header */}
      <div>
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
          Get In Touch
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
          Let's Build Something Together
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-xl">
          I'm actively seeking entry-level software engineering and Java Full Stack roles. Drop me a line or connect directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Contact Info Column (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          {/* Quick Copy Email Card */}
          <div className="framer-card p-5 space-y-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Direct Contact
            </span>

            <div className="flex items-center justify-between gap-2">
              <div className="truncate">
                <p className="text-sm font-semibold text-white truncate">
                  {PERSONAL_INFO.email}
                </p>
                <p className="text-xs text-zinc-500 font-mono mt-0.5">
                  Fastest response
                </p>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-colors flex-shrink-0"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {copiedEmail && (
              <p className="text-xs text-emerald-400 font-mono">
                ✓ Email copied to clipboard!
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="framer-card p-5 space-y-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Profiles & Network
            </span>

            <div className="space-y-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-white/[0.04] text-zinc-300 hover:text-white transition-colors text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-purple-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg hover:bg-white/[0.04] text-zinc-300 hover:text-white transition-colors text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub Repositories</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <div className="flex items-center justify-between p-2 text-zinc-400 text-xs">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-zinc-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column (7 cols) */}
        <div className="md:col-span-7 framer-card p-6 sm:p-7">
          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Message Sent!
              </h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs text-purple-400 hover:text-purple-300 font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-400">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-400">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-400">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Job Opportunity / Project Collaboration"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-400">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Hi Aathidasan, I came across your portfolio..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-rose-400 font-mono">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 font-medium text-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
