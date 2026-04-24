import { Badge } from "./ui/badge";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    institution: "MIT Arts, Commerce & Science College (MITACSC), Pune",
    degree: "BCA(Science), Computer Applications",
    period: "Passing out 2026",
    details: "8.55 CGPA",
    icon: <GraduationCap className="w-6 h-6 text-zinc-800 dark:text-zinc-900" />,
  }
];

export function EducationSection() {
  return (
    <div className="pl-0 sm:p-2 sm:px-6 space-y-6">
      <h1 className="text-3xl sm:text-[32px] tracking-normal font-[600] px-1 text-foreground">
        Education
      </h1>

      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <div key={index} className="relative flex gap-6 sm:gap-8 group">
            {/* Minimal Icon with White Background */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-200 dark:border-white/10">
                {edu.icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow pt-1">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                    {edu.institution}
                  </h4>
                  <p className="text-muted-foreground font-medium text-sm sm:text-[15px]">{edu.degree}</p>
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 font-medium mt-1 sm:mt-0.5 whitespace-nowrap">
                  {edu.period}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge
                  className="bg-zinc-900/50 text-zinc-300 border-zinc-800 hover:bg-zinc-800 px-3 py-0.5 rounded-md text-xs font-normal transition-colors"
                >
                  {edu.details}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}