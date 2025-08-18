import { About } from "@/components/about";
import { NavBar } from "@/components/navBar";
import { SkillSection } from "@/components/skills";


export default function Page() {
  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="mt-2 p-2 max-w-4xl w-full">
            <NavBar/>
      </div>
      <div className="p-2 max-w-4xl w-full">
           <About/>
      </div>
      <div className="p-2 max-w-4xl w-full">
           <SkillSection/>
      </div>
    </div>
  )
}