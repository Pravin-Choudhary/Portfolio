import { AnimatedTabsHover } from "@/animated-tabs";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";
import { Button } from "./ui/button";
import Link from "next/link";

export function NavBar(){
    return (
        <div className="flex justify-between items-center w-full">
            <div className="text-2xl font-medium tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-600">
                <Link href='/'>Portfolio</Link>
            </div>
            <div className="p-2 max-w-[120px] md:max-w-md w-full flex justify-between items-center">
                <div>
                    <Button variant={"ghost"} asChild>
                        <AnimatedThemeToggler/>
                    </Button>
                </div>
                 <div><AnimatedTabsHover/></div>
            </div>
        </div>
    )
}