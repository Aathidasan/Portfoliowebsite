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
  Radio,
  Zap,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import TiltCard3D from "@/components/ui/TiltCard3D";

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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="space-y-8 relative">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-2">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>TRANSMISSION CHANNEL // DIRECT ACCESS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
          Initiate Direct Collaboration
        </h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-xl">
          I am actively seeking software engineering and Java Full Stack opportunities. Transmit a dispatch or connect across professional channels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Contact Info Column (5 cols) */}
        <div className="md:col-span-5 space-y-4">
          {/* Quick Copy Email Card */}
          <TiltCard3D
            intensity={8}
            glowColor="rgba(6, 182, 212, 0.25)"
            className="p-5"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                Direct Electronic Mail
              </span>

              <div className="flex items-center justify-between gap-2">
                <div className="truncate">
                  <p className="text-sm font-bold text-white truncate">
                    {PERSONAL_INFO.email}
                  </p>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Guaranteed response within 24h
                  </p>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-all flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedEmail && (
                <p className="text-xs text-cyan-400 font-mono">
                  ✔ Address copied to clipboard!
                </p>
              )}
            </div>
          </TiltCard3D>

          {/* Network Channels Card */}
          <TiltCard3D
            intensity={8}
            glowColor="rgba(139, 92, 246, 0.25)"
            className="p-5"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider block">
                Network Coordinates
              </span>

              <div className="space-y-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-zinc-300 hover:text-white transition-colors text-xs font-mono"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn Network</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/[0.04] text-zinc-300 hover:text-white transition-colors text-xs font-mono"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-pink-400" />
                    <span>GitHub Artifacts</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                <div className="flex items-center justify-between p-2.5 text-zinc-400 text-xs font-mono">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-zinc-500" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard3D>
        </div>

        {/* Contact Form Column (7 cols) */}
        <div className="md:col-span-7">
          <TiltCard3D
            intensity={6}
            glowColor="rgba(236, 72, 153, 0.2)"
            className="p-6 sm:p-8"
          >
            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-950/50">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Transmission Dispatched
                </h3>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  Thank you for reaching out. Your dispatch has been received and logged.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Send another dispatch
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-400">
                      IDENTIFIER / NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Recruit Lead"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] text-white placeholder-zinc-600 text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-400">
                      RETURN ADDRESS / EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="lead@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] text-white placeholder-zinc-600 text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-400">
                    SUBJECT TOPIC
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="Full Stack Opportunity / Technical Interview"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] text-white placeholder-zinc-600 text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-400">
                    DISPATCH CONTENT *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Hi Aathidasan, we reviewed your Java & AI portfolio..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/[0.08] text-white placeholder-zinc-600 text-xs font-mono focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs text-rose-400 font-mono">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-mono font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-950/50 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "TRANSMITTING..." : "DISPATCH TRANSMISSION"}</span>
                </button>
              </form>
            )}
          </TiltCard3D>
        </div>
      </div>
    </section>
  );
}
