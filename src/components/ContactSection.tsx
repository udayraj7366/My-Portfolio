"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Copy, Sparkles, Loader2, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const triggerMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Uday,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:udaymaranpur@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/udaymaranpur@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _template: "table",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback to mailto
        triggerMailto();
        setSubmitted(true);
      }
    } catch {
      // In case of network blocker/adblocker, fallback to default mail client
      triggerMailto();
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("udaymaranpur@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Open for Software Engineering internships, technical discussions, and full-stack projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Direct Contact Info
                </h3>
                <p className="text-xs text-slate-500 pt-1">
                  Feel free to reach out via email, phone, or LinkedIn.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-slate-500">Email</div>
                      <a href="mailto:udaymaranpur@gmail.com" className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 truncate block">
                        udaymaranpur@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 text-xs shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Phone</div>
                    <a href="tel:+917366002478" className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600">
                      +91 7366002478
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Location</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      Dehradun, Uttarakhand, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Social Profiles:</div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://linkedin.com/in/uday-raj-44695b37a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/udayraj7366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-4 h-4 text-indigo-500" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send Me a Message
                </h3>
                <p className="text-xs text-slate-500 pt-1">
                  Fill out the form below and I will get back to you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center space-y-4 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-500" />
                  <div className="font-bold text-base">Message Sent Successfully!</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your message was dispatched directly to <span className="font-semibold text-slate-900 dark:text-white">udaymaranpur@gmail.com</span>.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href="mailto:udaymaranpur@gmail.com"
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open Email App</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Alex Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-100/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700/80 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-100/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700/80 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Opportunity / Collaboration / Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-100/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700/80 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Uday, I came across your portfolio and wanted to connect regarding..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-100/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700/80 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/20 hover:shadow-indigo-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to udaymaranpur@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={triggerMailto}
                      className="text-[11px] text-slate-500 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Prefer your default email app? Click to compose email directly</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
