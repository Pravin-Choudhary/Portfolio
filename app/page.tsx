import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { EducationSection } from "@/components/educationSection";
import { NavBar } from "@/components/navBar";
import Projects from "@/components/projects";
import { SkillSection } from "@/components/skills";
import { InView } from "@/components/ui/in-view";
import { Copyright } from "lucide-react";




export default function Page() {

  return (
    <div className="flex flex-col items-center space-y-10 w-full">
      <div className="p-2 w-full sticky top-0 z-50 transition-all duration-200 shadow backdrop-blur-sm flex justify-center mt-2">
        <div className="max-w-4xl w-full flex justify-center ">
              <NavBar/>
        </div>
      </div>
      <div className="space-y-20">
        <section id="about">
          <div className="p-2 max-w-4xl w-full">
              <About/>
          </div>
        </section>
         <section id="skills">
          <div className="p-2 max-w-4xl w-full ">
              <SkillSection/>
          </div>
        </section>

         <section id="education">
           <InView
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.95,
              filter: 'blur(4px)',
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -350px 0px' }}
        >
          <div className="p-2 max-w-4xl w-full">
              <EducationSection/>
          </div>
        </InView>
      </section>
       <section id="projects">
          <div className="p-2 max-w-4xl w-full">
              <Projects/>
          </div>
        </section>
         <section id="contact">
          <div className="p-2 max-w-4xl w-full">
              <Contact/>
          </div>
         </section>
          <div className="p-2 max-w-4xl w-full flex justify-center">
                <p className="text-sm text-muted-foreground dark:text-muted-foreground flex gap-1 items-center"><Copyright height={15} width={15}/> 2025 Pravin Choudhary. All Right Reserved </p>
          </div>
      </div>
    </div>

  )
}