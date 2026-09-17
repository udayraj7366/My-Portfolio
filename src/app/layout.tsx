import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uday Raj | Software Engineer Portfolio",
  description: "Computer Science & Engineering undergraduate at Uttaranchal University. Full-stack developer proficient in Java, TypeScript, Next.js, and DSA with 200+ LeetCode problems solved. Seeking Software Engineering Internship at Microsoft.",
  keywords: [
    "Uday Raj",
    "Software Engineer Intern",
    "Microsoft Internship",
    "Computer Science Student",
    "Full-Stack Developer",
    "Java Developer",
    "Next.js Portfolio",
    "TypeScript",
    "LeetCode DSA",
    "Dehradun",
  ],
  authors: [{ name: "Uday Raj", url: "https://github.com/udayraj7366" }],
  openGraph: {
    title: "Uday Raj | Software Engineer",
    description: "Full-Stack Developer & CS Undergraduate. 200+ LeetCode solved. Target: Software Engineering Internship @ Microsoft.",
    type: "website",
    url: "https://github.com/udayraj7366",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-blue-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
