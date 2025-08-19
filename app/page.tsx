import { About } from "@/components/about";
import { EducationSection } from "@/components/educationSection";
import { NavBar } from "@/components/navBar";
import Projects from "@/components/projects";
import { SkillSection } from "@/components/skills";




export default function Page() {

  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="mt-2 p-2 w-full sticky top-0 z-50  transition-all duration-200 shadow backdrop-blur-sm flex justify-center">
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
          <div className="p-2 max-w-3xl w-full">
              <Projects/>
          </div>
      </div>
    </div>
  )
}