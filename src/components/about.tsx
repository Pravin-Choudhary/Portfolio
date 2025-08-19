import { Download, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { FlipWordsDemo } from "./flip-words";
import { Button } from "./ui/button";
import { Hero } from "./hero";

export function About(){
    return (
    <>
    <div className="grid sm:grid-cols-3 space-y-8 sm:space-y-0 sm:space-x-4 p-2 ">

       <div className=" pl-0 sm:p-2 sm:px-6 space-y-2 sm:col-span-2">
            <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl tracking-tight font-[600]">Pravin Choudhary</h1>
                <FlipWordsDemo/>
            </div>
            <div>
                <div className="text-muted-foreground dark:text-muted-foreground flex-col justify-center pl-0 p-2 space-y-2 " >
                    <div className="flex items-center space-x-2 "> 
                        <Mail className="flex items-center h-[18px] w-[18px]"/> 
                        <p className="flex items-center text-md">pravinchoudhary.aesxa29@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-2 "> 
                        <MapPin className="flex items-center h-[18px] w-[18px]"/> 
                        <p className="flex items-center text-md">Pune,India.</p>
                    </div>
                </div>
            </div>
            <div className="text-wrap">
                <p className="text-muted-foreground dark:text-muted-foreground flex justify-center pl-0 p-2 px-5 text-md font-normal sm:text-[16px]">
                    A goal-oriented software developer with experience in building web applications using modern technologies 
                    like React, Next.js, and more. Seeking to leverage my technical skills to deliver exceptional user experiences
                </p>
            </div>

            <div className="pl-0 space-x-3 flex items-center ">
                    <Button size={"lg"}><Download className="h-6 w-6"/> <p className="flex items-center text-base">Resume</p></Button>
                    <Button variant={"outline"}><Github/></Button>
                    <Button variant={"outline"}><Mail/></Button>
                    <Button variant={"outline"}><Twitter/></Button>
                    <Button variant={"outline"}><Linkedin/></Button>
            </div>
        </div>

        <div className="sm:col-span-1">
                <Hero/>
        </div>
    </div>
    </>
    )
}