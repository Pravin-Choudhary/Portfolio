import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://pravinchoudhary.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Pravin Choudhary | Software & AI Agent Developer",
    template: "%s | Pravin Choudhary",
  },
  description: "Portfolio of Pravin Choudhary, a Software Developer and GenAI/Agentic-AI Developer based in Pune, India. View projects like Codium and Notebook LM.",
  keywords: [
    "Pravin Choudhary",
    "Software Developer",
    "GenAI Developer",
    "Agentic-AI Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Pune",
    "India",
    "Codium",
    "Notebook LM",
    "Rapid Rocket",
  ],
  authors: [{ name: "Pravin Choudhary", url: "https://github.com/Pravin-Choudhary" }],
  creator: "Pravin Choudhary",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Pravin Choudhary | Software & AI Agent Developer",
    description: "Portfolio of Pravin Choudhary, a Software Developer and GenAI/Agentic-AI Developer based in Pune, India. View projects like Codium and Notebook LM.",
    siteName: "Pravin Choudhary Portfolio",
    images: [
      {
        url: "/codium.webp",
        width: 1200,
        height: 630,
        alt: "Pravin Choudhary - Software & AI Agent Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pravin Choudhary | Software & AI Agent Developer",
    description: "Portfolio of Pravin Choudhary, a Software Developer and GenAI/Agentic-AI Developer based in Pune, India. View projects like Codium and Notebook LM.",
    creator: "@Pravin__Dev",
    images: ["/codium.webp"],
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Pravin Choudhary",
    "alternateName": "Pravin__Dev",
    "jobTitle": "Software Developer & AI Agent Developer",
    "url": baseUrl,
    "image": `${baseUrl}/codium.webp`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressCountry": "India"
    },
    "email": "pravin.devv@gmail.com",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "MIT Arts, Commerce & Science College (MITACSC), Pune",
      "sameAs": "https://mitacsc.ac.in/"
    },
    "sameAs": [
      "https://github.com/Pravin-Choudhary",
      "https://www.linkedin.com/in/pravin-choudhary-945658375/",
      "https://x.com/Pravin__Dev"
    ],
    "knowsAbout": [
      "Software Development",
      "Frontend Development",
      "Full Stack Development",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Tailwind CSS",
      "Generative AI",
      "Agentic-AI"
    ],
    "description": "Pravin Choudhary is a Software Developer and GenAI/Agentic-AI Developer who builds highly optimized web applications and intelligent AI interfaces."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
