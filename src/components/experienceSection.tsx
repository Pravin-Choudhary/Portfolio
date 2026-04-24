"use client"
import { useState } from "react";
import { Badge } from "./ui/badge";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "Rapid Rocket LLP",
    role: "Frontend Developer Intern",
    location: "Remote",
    period: "Oct 2025 – Present",
    description: [
      "Developed responsive web applications using React.js, Next.js, and TypeScript, delivering 15+ reusable components and implementing modern frontend architecture that reduced code duplication by 40%",
      "Integrated REST APIs and implemented state management solutions, achieving 35% improvement in page load performance through optimization techniques and code splitting",
      "Collaborated with backend developers to ensure seamless end-to-end functionality and managed version control using Git/GitHub, performing code reviews for 10+ pull requests weekly",
      "Deployed applications on Vercel and optimized build processes, reducing deployment time by 30%",
    ],
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Figma", "Vercel"],
    logo: "/rapid_rocket.webp",
    logoPad: "p-0",
  },
  {
    company: "IntelliSuite Technologies",
    role: "Freelance Full Stack Developer",
    location: "Remote",
    period: "Sep 2025 – Oct 2025",
    description: [
      "Built full-stack business website using React.js, Next.js, Node.js, and Express.js, improving page responsiveness by 40% and load time by 1.5x through performance optimization",
      "Developed and integrated REST APIs for email automation using Resend, processing 500+ client communications monthly with 99.9% system uptime",
      "Deployed and managed application on GoDaddy with seamless performance across all devices, demonstrating strong DevOps and deployment skills",
      "Applied object-oriented programming principles and resolved 15+ performance bottlenecks using browser DevTools",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "Resend", "GoDaddy", "DevTools"],
    logo: "/intellisuite.png",
    logoPad: "p-2",
  },
];

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="pl-0 sm:p-2 sm:px-6 space-y-6">
      <h1 className="text-3xl sm:text-[32px] tracking-normal font-[600] px-1 text-foreground">
        Experience
      </h1>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-b border-zinc-800 pb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left flex gap-4 sm:gap-6 group py-4 items-start focus:outline-none"
            >
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-full bg-white overflow-hidden flex items-center justify-center border border-zinc-200 ${exp.logoPad}`}>
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Header Content */}
              <div className="flex-grow pt-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                      {exp.company}
                      <motion.span
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        className="text-muted-foreground"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </h4>
                    <p className="text-muted-foreground font-medium text-sm sm:text-base">{exp.role}</p>
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-500 font-medium mt-1 sm:mt-0">
                    {exp.period}
                  </div>
                </div>
              </div>
            </button>

            {/* Expandable Description */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pl-16 sm:pl-18 pr-4 pb-4">
                    {/* Bullet Points */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((point, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed flex gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2.5">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-zinc-900/50 text-zinc-300 border-zinc-800 hover:bg-zinc-800 px-3 py-0.5 rounded-md text-xs font-normal transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
