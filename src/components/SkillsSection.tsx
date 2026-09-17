"use client";

import { useState } from "react";
import { Code, Database, Cpu, Wrench, Search, Layers, Server, ShieldCheck, CheckCircle, Terminal } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: Code,
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "Java", level: "Advanced", desc: "Core Java, OOP, Collections, Multi-threading" },
        { name: "Python", level: "Proficient", desc: "Scripting, Automation, Data Manipulation" },
        { name: "JavaScript", level: "Advanced", desc: "ES6+, Async/Await, DOM, Event Loop" },
        { name: "TypeScript", level: "Advanced", desc: "Strict Types, Generics, Interfaces" },
        { name: "C", level: "Intermediate", desc: "Pointers, Memory Management, Structs" },
        { name: "PHP", level: "Intermediate", desc: "Backend Server Logic & Form Processing" },
      ],
    },
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      icon: Cpu,
      color: "from-indigo-600 to-cyan-500",
      skills: [
        { name: "Arrays & Strings", level: "Advanced", desc: "Two Pointers, Sliding Window, Prefix Sum" },
        { name: "Searching & Sorting", level: "Advanced", desc: "Binary Search, QuickSort, MergeSort" },
        { name: "Recursion & Backtracking", level: "Advanced", desc: "N-Queens, Sudoku Solver, Permutations" },
        { name: "Linked Lists", level: "Advanced", desc: "Singly, Doubly, Cycle Detection" },
        { name: "Stacks & Queues", level: "Advanced", desc: "Monotonic Stack, Queue via Stacks" },
        { name: "Trees & Binary Search Trees", level: "Advanced", desc: "Traversals, BFS/DFS, BST Operations" },
        { name: "Dynamic Programming", level: "Proficient", desc: "Memoization, Tabulation, Knapsack, DP on Grids" },
      ],
    },
    {
      id: "web",
      title: "Web Technologies",
      icon: Layers,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "React", level: "Advanced", desc: "Hooks, Custom Hooks, Context API, Virtual DOM" },
        { name: "Next.js", level: "Advanced", desc: "App Router, SSR, SSG, Server Actions, API Routes" },
        { name: "HTML5 & CSS3", level: "Advanced", desc: "Semantic Elements, Flexbox, CSS Grid, Responsive Design" },
        { name: "JavaScript (Web)", level: "Advanced", desc: "Fetch API, DOM Manipulation, Promises" },
        { name: "PHP Web", level: "Intermediate", desc: "Server-side rendering, Session Management" },
      ],
    },
    {
      id: "databases",
      title: "Databases & ORM",
      icon: Database,
      color: "from-blue-600 to-purple-600",
      skills: [
        { name: "MySQL", level: "Advanced", desc: "Complex Joins, Indexing, Triggers, Views" },
        { name: "SQL", level: "Advanced", desc: "DDL, DML, DCL, Subqueries, Stored Procedures" },
        { name: "Prisma ORM", level: "Advanced", desc: "Schema Design, Migrations, Type-safe Queries" },
        { name: "SQLite", level: "Proficient", desc: "Embedded Lightweight Relational Storage" },
        { name: "JDBC", level: "Proficient", desc: "Java Database Connectivity API & PreparedStatement" },
      ],
    },
    {
      id: "java-stack",
      title: "Java Technologies",
      icon: Server,
      color: "from-amber-500 to-orange-600",
      skills: [
        { name: "Core Java", level: "Advanced", desc: "OOP Principles, Inheritance, Polymorphism, Encapsulation" },
        { name: "OOP Architecture", level: "Advanced", desc: "Design Patterns, SOLID Principles, Interface Segregation" },
        { name: "JDBC API", level: "Advanced", desc: "Database Connectivity, Transaction Management" },
        { name: "Servlets", level: "Proficient", desc: "HTTP Request Processing, Filter Chains" },
        { name: "JSP (JavaServer Pages)", level: "Proficient", desc: "Dynamic HTML Rendering with Java Beans" },
      ],
    },
    {
      id: "tools",
      title: "Developer Tools",
      icon: Wrench,
      color: "from-purple-600 to-pink-600",
      skills: [
        { name: "Git", level: "Advanced", desc: "Branching, Merging, Rebase, Commit Management" },
        { name: "GitHub", level: "Advanced", desc: "Pull Requests, Code Reviews, Actions, Repository Setup" },
        { name: "VS Code", level: "Advanced", desc: "Debugging, Extensions, Workspace Config" },
        { name: "Eclipse IDE", level: "Proficient", desc: "Java Enterprise & Desktop Application Setup" },
        { name: "MySQL Workbench", level: "Proficient", desc: "EER Diagrams, Query Execution, Database Admin" },
      ],
    },
    {
      id: "fundamentals",
      title: "CS Fundamentals",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-600",
      skills: [
        { name: "DSA", level: "Advanced", desc: "Algorithmic Efficiency & Time/Space Complexity Analysis" },
        { name: "DBMS", level: "Advanced", desc: "Normalization (1NF-3NF/BCNF), ACID Properties, ER Modeling" },
        { name: "Operating Systems", level: "Proficient", desc: "Process Scheduling, Threads, Deadlocks, Memory Management" },
        { name: "Computer Networks", level: "Proficient", desc: "TCP/IP, OSI Model, HTTP/HTTPS, DNS, Sockets" },
        { name: "Cybersecurity Fundamentals", level: "Intermediate", desc: "Authentication, Hashing, Encryption, Input Sanitization" },
        { name: "Software Engineering", level: "Advanced", desc: "Agile, SDLC, Modular Design, Testing & Code Cleanliness" },
      ],
    },
  ];

  const filteredCategories = skillCategories.map((cat) => ({
    ...cat,
    skills: cat.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.desc.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(
    (cat) =>
      (activeCategory === "all" || cat.id === activeCategory) &&
      cat.skills.length > 0
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Matrix & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Categorized technical stack, algorithmic tools, and core computer science concepts.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pill Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 max-w-full overflow-x-auto pb-2 md:pb-0">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g., Java, DP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/60 dark:border-slate-700/60 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

        </div>

        {/* Category Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 glass-card rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="text-slate-500 dark:text-slate-400 text-sm">No skills found matching "{searchQuery}"</p>
            </div>
          ) : (
            filteredCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div key={cat.id} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${cat.color} text-white shadow-md`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {cat.skills.length} Items
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="glass-card rounded-xl p-4 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between group"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
