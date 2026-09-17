"use client";

import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from "lucide-react";

export default function EducationSection() {
  const educationData = [
    {
      institution: "Uttaranchal University, Dehradun",
      degree: "B.Tech in Computer Science & Engineering",
      duration: "Batch 2024 – 2028 (Expected Graduation: 2028)",
      location: "Dehradun, Uttarakhand, India",
      status: "Currently Pursuing (Year 2)",
      description: "Focusing on Data Structures & Algorithms, Object-Oriented Programming with Java, Database Management Systems, Operating Systems, Computer Networks, and Full-Stack Software Engineering.",
      coursework: [
        "Data Structures & Algorithms",
        "Object Oriented Programming (Java)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Web Technologies",
      ],
      current: true,
    },
    {
      institution: "Bihar School Examination Board (BSEB)",
      degree: "Class XII (Senior Secondary Education)",
      duration: "Completed",
      location: "Bihar, India",
      status: "Passed",
      description: "Science stream coursework focused on Mathematics, Physics, Chemistry, and Computer Application fundamentals.",
      coursework: ["Mathematics", "Physics", "Chemistry", "Computer Fundamentals"],
      current: false,
    },
    {
      institution: "Bihar School Examination Board (BSEB)",
      degree: "Class X (Secondary Education)",
      duration: "Completed",
      location: "Bihar, India",
      status: "Passed",
      description: "Secondary education with top marks in Mathematics and Science, building the base for analytical reasoning.",
      coursework: ["Mathematics", "Science", "English", "Social Science"],
      current: false,
    },
  ];

  return (
    <section id="education" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Academic milestones and computer science foundational coursework.
          </p>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-slate-300 dark:to-slate-800 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col sm:flex-row items-center ${isEven ? "sm:flex-row-reverse" : ""}`}>
                  
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full border-4 ${edu.current ? "border-blue-500 bg-slate-900" : "border-slate-400 dark:border-slate-700 bg-slate-800"} flex items-center justify-center shadow-md`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${edu.current ? "bg-cyan-400 animate-ping" : "bg-slate-300"}`}></div>
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-1/2 px-0 sm:px-8">
                    <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800/80 glow-card hover:border-blue-500/40 transition-all duration-300 space-y-4">
                      
                      {/* Status Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          edu.current
                            ? "bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/30"
                            : "bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300"
                        }`}>
                          <Award className="w-3 h-3" />
                          {edu.status}
                        </span>
                        
                        <div className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-blue-500" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>

                      {/* Institution & Degree */}
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                          {edu.institution}
                        </h3>
                        <div className="text-sm font-semibold text-indigo-600 dark:text-cyan-400 pt-1">
                          {edu.degree}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                          <MapPin className="w-3.5 h-3.5 text-rose-500" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Coursework Tags */}
                      <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                          Key Subjects:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
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
