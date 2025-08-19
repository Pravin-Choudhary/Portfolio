import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { EducationSection } from "@/components/educationSection";
import { NavBar } from "@/components/navBar";
import Projects from "@/components/projects";
import { SkillSection } from "@/components/skills";
import { Copyright } from "lucide-react";




export default function Page() {

  return (
   
    <div className="flex flex-col items-center space-y-10">
      <div className="mt-2 p-2 w-full sticky top-0 z-50 transition-all duration-200 shadow backdrop-blur-sm flex justify-center">
        <div className="max-w-4xl w-full flex justify-center ">
              <NavBar/>
        </div>
      </div>
      <div className="space-y-20">
          <div className="p-2 max-w-4xl w-full">
              <About/>
          </div>
          <div className="p-2 max-w-4xl w-full">
              <SkillSection/>
          </div>
          <div className="p-2 max-w-4xl w-full">
              <EducationSection/>
          </div>
          <div className="p-2 max-w-4xl w-full">
              <Projects/>
          </div>
          <div className="p-2 max-w-4xl w-full">
              <Contact/>
          </div>
          <div className="p-2 max-w-4xl w-full flex justify-center">
                <p className="text-sm text-muted-foreground dark:text-muted-foreground flex gap-1 items-center"><Copyright height={15} width={15}/> 2025 Pravin Choudhary. All Right Reserved </p>
          </div>
      </div>
    </div>

  )
}