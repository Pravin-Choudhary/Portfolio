import { AnimatedTabsHover } from "@/animated-tabs";
import { ModeToggle } from "./toggle-mode";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";

export function NavBar(){
    return (
        <div className="flex justify-between items-center">
            <div className="text-2xl font-medium tracking-normal">Portfolio</div>
            <div className="p-2 max-w-md w-full flex justify-between items-center">
                <div><AnimatedTabsHover/></div>
                <div><AnimatedThemeToggler/></div>
            </div>
        </div>
    )
}