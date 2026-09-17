"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin, Phone, Code2 } from "lucide-react";

interface HeroSectionProps {
  onOpenResume: () => void;
}

const titles = ["Full-Stack Developer", "CS Undergraduate", "DSA Enthusiast"];

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setCurrentText(
          fullText.substring(0, isDeleting ? currentText.length - 1 : currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-cyan-400/10 dark:bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-6 text-left">
          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hi, I'm{" "}
              <span className="gradient-text drop-shadow-sm">Uday Raj</span>
            </h1>
            
            {/* Rotating Typing Subtitle */}
            <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl font-mono text-slate-700 dark:text-slate-300">
              <span className="text-indigo-600 dark:text-cyan-400 font-semibold mr-2">&gt;</span>
              <span className="font-semibold text-slate-900 dark:text-white">{currentText}</span>
              <span className="w-2.5 h-6 bg-blue-600 dark:bg-cyan-400 ml-1 inline-block animate-blink"></span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Computer Science & Engineering student at <span className="font-semibold text-slate-900 dark:text-white">Uttaranchal University</span>, passionate about <span className="font-semibold text-blue-600 dark:text-cyan-400">Java</span>, <span className="font-semibold text-blue-600 dark:text-cyan-400">backend development</span>, data structures, and algorithmic problem solving. I enjoy building practical projects and continuously improving my software development skills.
          </p>

          {/* Location & Quick Contact Pills */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400 pt-1">
            <div className="flex items-center gap-1.5 bg-slate-200/50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>Dehradun, Uttarakhand, India</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-200/50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-300/50 dark:border-slate-700/50">
              <Code2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>Uttaranchal University</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700/80 text-slate-900 dark:text-white font-semibold text-sm shadow-sm hover:border-blue-500/50 hover:bg-slate-300/80 dark:hover:bg-slate-700/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Download className="w-4 h-4 text-blue-500" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-transparent text-slate-700 dark:text-slate-300 font-semibold text-sm hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Connect:</span>
            <a
              href="https://github.com/udayraj7366"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/uday-raj-44695b37a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:udaymaranpur@gmail.com"
              aria-label="Send Email"
              className="p-2.5 rounded-lg bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+917366002478"
              aria-label="Call Phone"
              className="p-2.5 rounded-lg bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
