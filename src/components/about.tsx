import {
  Download,
  Github,
  Linkedin,
  LinkedinIcon,
  Mail,
  MapPin,
  Twitter,
  TwitterIcon,
} from "lucide-react";
import { FlipWordsDemo } from "./flip-words";
import { Button } from "./ui/button";
import { Hero } from "./hero";
import { Highlight } from "./ui/hero-highlight";
import { AnimatedGroup } from "./ui/animated-group";
import Link from "next/link";

export function About() {
  return (
    <>
      <div className="grid sm:grid-cols-3 space-y-15 sm:space-y-0 sm:space-x-4 p-2 ">
        <div className=" pl-0 sm:p-2 sm:px-6 space-y-2 sm:col-span-2">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  filter: "blur(12px)",
                  y: -60,
                  rotateX: 90,
                },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 1,
                  },
                },
              },
            }}
          >
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl tracking-tight font-[600]">
                Pravin Choudhary
              </h1>
              <FlipWordsDemo />
            </div>
          </AnimatedGroup>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  filter: "blur(12px)",
                  y: -60,
                  rotateX: 90,
                },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 1,
                  },
                },
              },
            }}
          >
            <div>
              <div className="text-muted-foreground dark:text-muted-foreground flex-col justify-center pl-0 p-2 space-y-2 ">
                <div className="flex items-center space-x-2 ">
                  <Mail className="flex items-center h-[18px] w-[18px]" />
                  <p className="flex items-center text-sm sm:text-base">
                    pravinchoudhary.aesxa29@gmail.com
                  </p>
                </div>
                <div className="flex items-center space-x-2 ">
                  <MapPin className="flex items-center h-[18px] w-[18px]" />
                  <p className="flex items-center text-sm sm:text-base">
                    Pune,India.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedGroup>
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  filter: "blur(12px)",
                  y: -60,
                  rotateX: 90,
                },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 1,
                  },
                },
              },
            }}
          >
            <div className="text-wrap">
              <p className="text-muted-foreground dark:text-muted-foreground pl-0 p-2 px-4 text-sm sm:text-base font-normal sm:text-[16px]">
                A goal-oriented software developer with experience in building
                web applications using modern technologies like{" "}
                <Highlight className="text-black dark:text-white">
                  {" "}
                  React, Next.js, and more.
                </Highlight>{" "}
                Seeking to leverage my technical skills to deliver exceptional
                user experiences
              </p>
            </div>
          </AnimatedGroup>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  filter: "blur(12px)",
                  y: -60,
                  rotateX: 90,
                },
                visible: {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 1,
                  },
                },
              },
            }}
          >
            <div className="pl-0 space-x-3 flex items-center ">
              <Button size={"lg"}>
                <Download className="h-4 w-4 sm:h-6 sm:w-6" />{" "}
                <p className="flex items-center text-sm font-medium sm:text-base">
                  Resume
                </p>
              </Button>

              <Link href="https://github.com/Pravin-Choudhary" target="_blank">
                <Button variant={"outline"} className="cursor-pointer">
                  <Github />
                </Button>
              </Link>

              <Link href="https://github.com/Pravin-Choudhary" target="_blank">
                <Button variant={"outline"} className="cursor-pointer">
                  <Mail />
                </Button>
              </Link>

              <Link href="https://github.com/Pravin-Choudhary" target="_blank">
                <Button variant={"outline"} className="cursor-pointer">
                  <TwitterIcon />
                </Button>
              </Link>

              <Link href="https://www.linkedin.com/in/pravin-choudhary-945658375/" target="_blank">
                <Button variant={"outline"} className="cursor-pointer">
                  <LinkedinIcon />
                </Button>
              </Link>
            </div>
          </AnimatedGroup>
        </div>

        <div className="sm:col-span-1">
          <Hero />
        </div>
      </div>
    </>
  );
}
