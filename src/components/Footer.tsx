"use client";

import { ArrowUp, Github, Linkedin, Mail, Heart, Building2, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          
          {/* Left Brand */}
          <div className="md:col-span-5 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-lg text-white">Uday Raj</span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm">
              Computer Science & Engineering student at Uttaranchal University. Passionate about Java, backend development, data structures, and algorithmic problem solving.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-3">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 hover:text-white transition-all shadow-md"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Uday Raj. All rights reserved. Built with Next.js, TypeScript & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/udayraj7366"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/uday-raj-44695b37a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:udaymaranpur@gmail.com"
              aria-label="Email Me"
              className="hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
