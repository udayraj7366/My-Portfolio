# Uday Raj — Personal Portfolio Website 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.js.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, high-performance portfolio website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed with glassmorphism aesthetics, responsive layouts, dynamic theme switching (Dark/Light mode), interactive project showcases, and a working contact delivery system.

---

## 👨‍💻 About Me

I am a **Computer Science & Engineering student at Uttaranchal University**, passionate about:
- **Core Languages**: Java, TypeScript, JavaScript, Python, SQL
- **Backend & Full-Stack**: Next.js, Node.js, REST APIs, Prisma ORM, MySQL
- **Problem Solving**: 200+ Data Structures & Algorithms challenges solved on LeetCode
- **Building Practical Applications**: AI-powered solutions, algorithms visualization, and clean UI engineering

---

## ✨ Key Features

- **🎨 Modern Glassmorphism UI**: Curated color palette, sleek dark/light mode toggle, and micro-interactions powered by Framer Motion.
- **⚡ Next.js 15 App Router**: Server and client component optimization, fast routing, and clean component architecture.
- **💼 Interactive Project Showcase**:
  - **[WanderAI](https://fullstack-ai-traviling.vercel.app/)** — Full-stack AI-driven itinerary planner with Leaflet mapping and budget calculation.
  - **Sudoku Solver** — Algorithmic solver using recursive backtracking.
- **📄 Interactive Resume Modal**: Clean, printable resume view directly in the browser with print and download support.
- **📬 Working Contact Form**: Integrated with FormSubmit AJAX and direct mail client fallbacks to dispatch messages directly to `udaymaranpur@gmail.com`.
- **📱 Fully Responsive**: Pixel-perfect adaptability across mobile, tablet, and desktop screens.
- **🔍 SEO Optimized**: Complete meta tags, OpenGraph previews, and semantic HTML structure.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js 15 (App Router), React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, PostCSS |
| **Icons** | Lucide React |
| **Animations** | Framer Motion, CSS Keyframes |
| **Form Handling** | FormSubmit API + Mailto Fallback |
| **Deployment** | Vercel / GitHub |

---

## 📂 Project Structure

```bash
My-Portfolio/
├── public/                 # Static assets (favicons, SVGs)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles & Tailwind configuration
│   │   ├── layout.tsx      # Root layout & SEO metadata
│   │   └── page.tsx        # Main single-page portfolio layout
│   └── components/
│       ├── Navbar.tsx             # Responsive sticky navigation & theme toggle
│       ├── HeroSection.tsx        # Hero banner with dynamic typing headline
│       ├── AboutSection.tsx       # Bio, skills overview, and journey timeline
│       ├── SkillsSection.tsx      # Categorized skill badges and proficiency
│       ├── ProjectsSection.tsx    # Project grid with live demo links & modals
│       ├── AchievementsSection.tsx# Algorithmic milestones & LeetCode breakdown
│       ├── CertificationsSection.tsx# Industry certifications & credentials
│       ├── EducationSection.tsx   # Academic background & coursework
│       ├── ContactSection.tsx     # Contact details & working message form
│       ├── ResumeModal.tsx        # Printable resume view modal
│       ├── Footer.tsx             # Footer links & copyright notice
│       └── ThemeScript.tsx        # Theme state persistence script
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed:
- **Node.js**: `v18.17.0` or higher (recommended: Node `v20+`)
- **npm** or **pnpm** / **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/udayraj7366/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
npm run build
npm run start
```

---

## 🌐 Live Projects & Links

- **WanderAI Live App**: [https://fullstack-ai-traviling.vercel.app/](https://fullstack-ai-traviling.vercel.app/)
- **GitHub Profile**: [@udayraj7366](https://github.com/udayraj7366)
- **LinkedIn**: [Uday Raj](https://linkedin.com/in/uday-raj-44695b37a)
- **Email**: [udaymaranpur@gmail.com](mailto:udaymaranpur@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
