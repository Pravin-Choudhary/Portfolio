import { AnimatedTabsHover } from "@/animated-tabs";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";
import { Button } from "./ui/button";

export function NavBar(){
    return (
        <div className="flex justify-between items-center">
            <div className="text-2xl font-medium tracking-normal">Portfolio</div>
            <div className="p-2 max-w-[120px] md:max-w-md w-full flex justify-between items-center">
                <div>
                    <Button variant={"ghost"}>
                        <AnimatedThemeToggler/>
                    </Button>
                </div>
                 <div><AnimatedTabsHover/></div>
            </div>
        </div>
    )
}