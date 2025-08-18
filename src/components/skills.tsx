import { BackendLanguage } from "./backend-languages";
import { CodingLanguage } from "./coding-language";
import { DatabasesLanguage } from "./databases-language";
import { ToolsAndPlatform } from "./tools-platform";

export function SkillSection(){
    return(
        <>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl sm:text-[32px] tracking-normal font-[600]">My Skills</h1>
                </div>
                <div>
                    <p className="text-muted-foreground dark:text-muted-foreground text-sm sm:text-base">
                        Technologies and tools I've worked with throughout my projects.
                    </p>
                </div>
                <div>
                        <h3 className="text-xl sm:text-[22px] tracking-normal font-[500]">Languages</h3>
                </div>
                <div><CodingLanguage/></div>
                <div>
                    <h3 className="text-xl sm:text-[22px] tracking-normal font-[500]">Backend</h3>
                </div>
                <div><BackendLanguage/></div>
                <div>
                    <h3 className="text-xl sm:text-[22px] tracking-normal font-[500]">Databases</h3>
                </div>
                <div><DatabasesLanguage/></div>
                 <div>
                    <h3 className="text-xl sm:text-[22px] tracking-normal font-[500]">Tools & Platform</h3>
                </div>
                <div><ToolsAndPlatform/></div>
            </div>
        </>
    )
}