"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { BoxReveal } from "./magicui/box-reveal"

const projects = [
  {
    logo: "/matchwize.svg",
    title: "Matchwize",
    description:
      "matchwize analyzes your resume against job descriptions to give you a match score and actionable suggestions to improve your chances.",
    image: "/matchwize.webp",
    tags: ["Next.js", "Node.js", "Express.js", "Supabase", "Tailwind CSS", "Gemini API"],
    demoUrl: "https://matchwize.com/",
    githubUrl: "",
    features: [
      "Gemini API integration for resume analysis",
      "Supabase for data storage",
    ],
  },
  {
    logo: "/englishexpresswayLogo.svg",
    title: "English Expressway",
    description:
      "An online platform to join courses and buy ebooks to learn English, featuring role-based authentication and payment integration.",
    image: "/englishexpressway.webp",
    tags: ["Next.js", "NextAuth.js", "Tailwind CSS", "MongoDB", "Razorpay"],
    demoUrl: "https://www.englishexpressway.com/",
    githubUrl: "",
    features: [
      "Role-based authentication using NextAuth.js and JWT",
      "Integrated Razorpay for payment transactions",
      "Responsive landing page with course listings",
      "User dashboard for enrolled courses",
      "Admin dashboard for content management",
    ],
  }
]


export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h3 className="text-xl font-bold">{project.title}</h3>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-muted-foreground">{project.description}</p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </BoxReveal>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}