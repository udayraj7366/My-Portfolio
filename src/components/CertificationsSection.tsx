"use client";

import { Award, CheckCircle2, ShieldCheck, ExternalLink, Building2 } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "HackerRank Role Certification: Software Engineer Intern",
      issuer: "HackerRank",
      date: "September 2026",
      code: "Certified Role Test",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Code Quality"],
      verified: true,
      color: "from-emerald-500 to-teal-600",
      icon: ShieldCheck,
    },
    {
      title: "HackerRank Role Certification: Software Engineer",
      issuer: "HackerRank",
      date: "September 2026",
      code: "Certified Role Test",
      skills: ["Software Engineering Principles", "Algorithmic Efficiency", "System Design Fundamentals"],
      verified: true,
      color: "from-blue-600 to-indigo-600",
      icon: Award,
    },
    {
      title: "Power BI for Beginners — Microsoft Course",
      issuer: "Simplilearn / SkillUp",
      date: "October 2025",
      code: "9275222",
      skills: ["Data Analytics", "Power BI Dashboards", "Data Visualization", "Microsoft Ecosystem"],
      verified: true,
      color: "from-amber-500 to-orange-600",
      icon: Building2,
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Credentials & <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Industry role certifications validated by HackerRank and Microsoft learning partners.
          </p>
        </div>

        {/* Certifications Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const IconComp = cert.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800/80 glow-card hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Badge & Issuer */}
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${cert.color} text-white shadow-md`}>
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" /> Verified
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {cert.title}
                    </h3>
                    <div className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 pt-1">
                      {cert.issuer}
                    </div>
                  </div>

                  {/* Code & Date */}
                  <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
                    <div><span className="font-semibold text-slate-700 dark:text-slate-300">Issued:</span> {cert.date}</div>
                    <div><span className="font-semibold text-slate-700 dark:text-slate-300">Cert Code:</span> <code className="font-mono text-slate-800 dark:text-slate-200">{cert.code}</code></div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-200/60 dark:bg-slate-800 text-[10px] font-medium text-slate-700 dark:text-slate-300 border border-slate-300/40 dark:border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Link */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Official Credential</span>
                  <a
                    href="https://linkedin.com/in/uday-raj-44695b37a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-cyan-400 font-semibold hover:underline"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
