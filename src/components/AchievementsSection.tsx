"use client";

import { Trophy, Code2, Flame, Sparkles } from "lucide-react";

export default function AchievementsSection() {
  const stats = [
    {
      label: "LeetCode DSA Solved",
      value: "200+",
      sub: "Arrays, DP, Recursion, Trees",
      icon: Flame,
      color: "from-amber-500 to-orange-600",
    },
    {
      label: "Full-Stack Web Apps",
      value: "3+",
      sub: "AI Travel, Study Center, Sudoku",
      icon: Code2,
      color: "from-blue-600 to-indigo-600",
    },
  ];

  const dsaTopicBreakdown = [
    { name: "Arrays & Strings", count: "50+ Solved", progress: "90%" },
    { name: "Dynamic Programming", count: "35+ Solved", progress: "75%" },
    { name: "Trees & Graphs", count: "40+ Solved", progress: "80%" },
    { name: "Recursion & Backtracking", count: "30+ Solved", progress: "85%" },
    { name: "Linked Lists & Stacks", count: "45+ Solved", progress: "88%" },
  ];

  return (
    <section id="achievements" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Problem Solving & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Quantitative metrics highlighting coding practice, project engineering, and algorithmic proficiency.
          </p>
        </div>

        {/* Stat Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80 glow-card hover:border-blue-500/40 transition-all duration-300 flex items-center gap-5"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.color} p-0.5 shadow-lg shrink-0`}>
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                    <IconComp className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {stat.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* LeetCode & Problem Solving Spotlight Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold">
                <Flame className="w-3.5 h-3.5" /> LeetCode Spotlight
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                200+ Algorithmic Problems Solved
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Consistency and continuous practice are key to algorithmic excellence. I solve problems daily on LeetCode with a sharp focus on optimizing time and space complexity, utilizing optimal data structures for every scenario.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 hover:bg-amber-400 transition-colors"
                >
                  <Sparkles className="w-4 h-4" /> View LeetCode Profile
                </a>
              </div>
            </div>

            {/* Right Topic Progress Bars */}
            <div className="lg:col-span-6 space-y-4 bg-slate-100/80 dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-between">
                <span>DSA Topic Proficiency</span>
                <span className="text-xs text-amber-500 font-mono">200+ Total Solved</span>
              </h4>

              {dsaTopicBreakdown.map((topic, tIdx) => (
                <div key={tIdx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <span>{topic.name}</span>
                    <span className="text-slate-500 font-mono">{topic.count}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-500"
                      style={{ width: topic.progress }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
