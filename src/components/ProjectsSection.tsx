"use client";

import { useState } from "react";
import { FolderGit2, ExternalLink, Github, Sparkles, Layers, CheckCircle2, MapPin, Eye, X } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tech: string[];
  bullets: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  accent: string;
  details: {
    overview: string;
    architecture: string;
    keyHighlights: string[];
  };
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "wanderai",
      title: "Full-Stack AI Travel Planner – WanderAI",
      category: "Full-Stack AI Application",
      tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Leaflet"],
      bullets: [
        "Built and deployed a full-stack AI-powered travel planning app generating personalized itineraries",
        "Itinerary planning based on destination, dates, group size, budget, and interests",
        "Interactive maps, route planning, local recommendations, budget tracking",
        "Conversational AI assistant and collaborative trip-planning features",
      ],
      liveUrl: "https://fullstack-ai-traviling.vercel.app/",
      githubUrl: "https://github.com/udayraj7366",
      featured: true,
      accent: "from-blue-600 to-indigo-600",
      details: {
        overview: "WanderAI leverages generative AI prompt pipelines to construct complete day-by-day travel schedules tailored to budget and travel preferences. Features interactive map layers powered by Leaflet.",
        architecture: "Next.js App Router API Routes, Prisma ORM database models for itinerary persistence, dynamic Leaflet map rendering, and Tailwind UI.",
        keyHighlights: [
          "Dynamic budget breakdown graph",
          "Interactive map pins with geolocation",
          "Real-time itinerary generation",
          "Shareable trip links",
        ],
      },
    },
    {
      id: "sudoku",
      title: "Sudoku Game & Solver",
      category: "Algorithmic Web App",
      tech: ["HTML", "CSS", "JavaScript"],
      bullets: [
        "Interactive Sudoku app with clean, responsive UI",
        "Validation logic for rows, columns, and 3x3 grid boxes",
        "Difficulty selection, new game generator, solution-checking, hint functionality",
        "Backtracking algorithm implemented to solve complex puzzles automatically",
      ],
      liveUrl: "https://github.com/udayraj7366",
      githubUrl: "https://github.com/udayraj7366",
      featured: false,
      accent: "from-cyan-500 to-blue-600",
      details: {
        overview: "A clean client-side Sudoku application featuring state validation, custom difficulty board generators, and an integrated recursive Backtracking solver.",
        architecture: "Vanilla JS modular ES6 functions, DOM event handling, grid matrix validation algorithms, and CSS grid styling.",
        keyHighlights: [
          "Recursive Backtracking algorithm execution",
          "Instant cell error highlighting",
          "Step-by-step hint engine",
          "Mobile touch keyboard for numbers",
        ],
      },
    },
    {
      id: "study-center",
      title: "Library Management – Study Center",
      category: "Full-Stack System",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "SQLite"],
      bullets: [
        "Full-stack Study Centre and Library Management System",
        "Real-time seat reservation interactive maps for study desks",
        "Two-step OTP registration and security workflow",
        "Structured relational database operations via Prisma and SQLite",
      ],
      liveUrl: "https://github.com/udayraj7366",
      githubUrl: "https://github.com/udayraj7366",
      featured: true,
      accent: "from-purple-600 to-indigo-600",
      details: {
        overview: "An enterprise-grade study room and library seat allocation portal designed to streamline student registration, seat bookings, and membership subscriptions.",
        architecture: "Next.js App Router, Prisma ORM over SQLite database, OTP auth pipeline, responsive interactive SVG seat grids.",
        keyHighlights: [
          "Interactive desk availability map",
          "Two-step SMS/Email OTP validation",
          "Admin desk management dashboard",
          "Relational schema for student logs",
        ],
      },
    },
  ];

  return (
    <section id="projects" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Software Engineering <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Full-stack web applications, database systems, and algorithmic problem-solving tools.
          </p>
        </div>

        {/* 3-Column Desktop Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-200 dark:border-slate-800/80 glow-card hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header Gradient Banner */}
              <div className={`h-3 bg-gradient-to-r ${project.accent}`}></div>

              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Category & Featured Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action CTA Buttons */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                      title="Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-600/20 hover:bg-blue-500 transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
            <div className="glass-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-200/60 dark:bg-slate-800/60 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-semibold border border-blue-500/20">
                    {t}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Project Overview</h4>
                  <p>{selectedProject.details.overview}</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Architecture & Tech Details</h4>
                  <p>{selectedProject.details.architecture}</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Key Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {selectedProject.details.keyHighlights.map((kh, kIdx) => (
                      <li key={kIdx} className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{kh}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer CTAs */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-semibold"
                >
                  <Github className="w-4 h-4" /> GitHub Repository
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-600/20"
                >
                  <ExternalLink className="w-4 h-4" /> Open Live App
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
