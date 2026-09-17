"use client";

import { User, Code2, Cpu, Brain, Layers, CheckCircle, Zap } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      title: "1+ Year Programming Experience",
      description: "Proficient in Core Java, Python, JavaScript, TypeScript, and SQL with a strong understanding of object-oriented principles.",
      icon: Code2,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Full-Stack Development",
      description: "Architected complete web applications including AI travel planners, interactive database maps, and seat reservation systems.",
      icon: Layers,
      color: "from-indigo-600 to-cyan-500",
    },
    {
      title: "200+ LeetCode DSA Solved",
      description: "Dedicated problem solver with expertise in Data Structures, Algorithms, Recursion, Backtracking, Dynamic Programming, and Trees.",
      icon: Brain,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Collaborative & Driven",
      description: "Hands-on experience in feature planning, database schema design, and building accessible UI components for real-world usability.",
      icon: Zap,
      color: "from-purple-600 to-indigo-600",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Passionate Engineering Student & <span className="gradient-text">Problem Solver</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Bridging theoretical computer science with modern full-stack web engineering.
          </p>
        </div>

        {/* Content Layout: Left Story + Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* First Person Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-blue-600"></span>
                My Engineering Journey
              </h3>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a Computer Science & Engineering undergraduate at Uttaranchal University. Over the past year, I have built a solid foundation in software engineering, mastering languages like <span className="font-semibold text-blue-600 dark:text-cyan-400">Java, Python, JavaScript, TypeScript, and SQL</span>.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                My passion lies in crafting high-performance, full-stack applications—ranging from AI-driven itinerary generators like <span className="font-semibold text-slate-900 dark:text-white">WanderAI</span> to interactive real-time seat management systems. I take pride in writing clean, scalable code and applying robust database operations using <span className="font-semibold text-indigo-600 dark:text-indigo-400">Prisma, MySQL, and SQLite</span>.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Beyond development, algorithm optimization is my daily routine. Having solved <span className="font-semibold text-blue-600 dark:text-cyan-400">200+ LeetCode problems</span>, I enjoy breaking down complex data structures and algorithmic challenges. I am actively seeking a Software Engineering Internship opportunity at <span className="font-bold text-blue-600 dark:text-cyan-300">Microsoft</span> where I can contribute to innovative engineering teams.
              </p>

              {/* Quick Checklist */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>B.Tech CSE Undergraduate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Full-Stack & Java OOP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>200+ DSA Problems Solved</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Microsoft Intern Target</span>
                </div>
              </div>

            </div>
          </div>

          {/* Key Metric Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80 glow-card hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} p-0.5 shadow-md`}>
                      <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                        <IconComp className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
