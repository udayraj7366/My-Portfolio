"use client";

import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, Building2, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="glass-card max-w-4xl w-full rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-8 relative my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Header Action Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="font-bold text-base text-slate-900 dark:text-white">
              Uday Raj — Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="bg-white text-slate-900 p-8 rounded-xl shadow-inner space-y-6 font-sans text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-300 pb-4 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                UDAY RAJ
              </h1>
              <p className="text-blue-700 font-semibold text-xs sm:text-sm pt-0.5">
                Computer Science & Engineering Undergraduate | Software Engineering Intern Aspirant
              </p>
              <p className="text-slate-600 text-xs pt-1">
                Dehradun, Uttarakhand, India
              </p>
            </div>

            <div className="text-xs space-y-1 text-slate-700 text-right sm:text-right">
              <div>Email: <a href="mailto:udaymaranpur@gmail.com" className="text-blue-600 font-medium">udaymaranpur@gmail.com</a></div>
              <div>Phone: <a href="tel:+917366002478" className="text-blue-600 font-medium">+91 7366002478</a></div>
              <div>LinkedIn: <a href="https://linkedin.com/in/uday-raj-44695b37a" className="text-blue-600 font-medium">uday-raj-44695b37a</a></div>
              <div>GitHub: <a href="https://github.com/udayraj7366" className="text-blue-600 font-medium">udayraj7366</a></div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-slate-900">Uttaranchal University, Dehradun</div>
                <div className="text-slate-700 italic">B.Tech in Computer Science & Engineering</div>
              </div>
              <div className="text-right text-slate-600 font-mono text-xs">
                Batch 2024 – 2028 (Exp: 2028)
              </div>
            </div>
            <div className="flex justify-between items-start pt-1">
              <div>
                <div className="font-bold text-slate-900">Bihar School Examination Board (BSEB)</div>
                <div className="text-slate-700 italic">Class XII & Class X (Science Stream)</div>
              </div>
              <div className="text-right text-slate-600 font-mono text-xs">
                Completed
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><span className="font-bold text-slate-900">Languages:</span> Java, C, Python, JavaScript, TypeScript, PHP</div>
              <div><span className="font-bold text-slate-900">Databases:</span> MySQL, SQL, Prisma ORM, SQLite, JDBC</div>
              <div><span className="font-bold text-slate-900">Web Stack:</span> Next.js, React, HTML5, CSS3, Tailwind CSS</div>
              <div><span className="font-bold text-slate-900">Java Stack:</span> Core Java, OOP Architecture, Servlets, JSP</div>
              <div><span className="font-bold text-slate-900">Tools:</span> Git, GitHub, VS Code, Eclipse, MySQL Workbench</div>
              <div><span className="font-bold text-slate-900">CS Core:</span> DSA, DBMS, OS, Computer Networks, Software Engineering</div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Key Projects
            </h2>

            <div>
              <div className="flex justify-between font-bold text-slate-900">
                <a
                  href="https://fullstack-ai-traviling.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 underline-offset-2 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>WanderAI – Full-Stack AI Travel Planner</span>
                  <ExternalLink className="w-3 h-3 text-blue-500" />
                </a>
                <span className="text-xs font-normal text-slate-600">Next.js, TypeScript, Prisma, Tailwind, Leaflet</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 pt-1">
                <li>Engineered a full-stack AI travel planner generating personalized day-by-day itineraries based on budget and group size.</li>
                <li>Integrated Leaflet map routes, budget calculation graphs, and AI recommendation features.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between font-bold text-slate-900">
                <span>Sudoku Game & Backtracking Solver</span>
                <span className="text-xs font-normal text-slate-600">HTML, CSS, JavaScript</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 pt-1">
                <li>Built an interactive Sudoku game featuring real-time grid cell validation algorithms and difficulty settings.</li>
                <li>Implemented a recursive Backtracking algorithm for step-by-step puzzle solution calculation.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between font-bold text-slate-900">
                <span>Study Center & Library Management System</span>
                <span className="text-xs font-normal text-slate-600">Next.js, TypeScript, Tailwind, Prisma, SQLite</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 pt-1">
                <li>Developed a study center seat reservation web app with real-time desk availability map.</li>
                <li>Implemented two-step OTP registration workflow and structured database schema using Prisma ORM.</li>
              </ul>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Certifications & Achievements
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
              <li><span className="font-bold text-slate-900">HackerRank Certified:</span> Software Engineer Intern & Software Engineer Role Certifications (Sept 2026).</li>
              <li><span className="font-bold text-slate-900">Microsoft Course:</span> Power BI for Beginners — Simplilearn/SkillUp (Code: 9275222).</li>
              <li><span className="font-bold text-slate-900">LeetCode Problem Solving:</span> Solved <span className="font-bold text-blue-700">200+ programming problems</span> with emphasis on Data Structures, Algorithms, DP, and Backtracking.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
