import React from "react";
import { FlipWords } from "./ui/flip-words";


export function FlipWordsDemo() {
  const words = ["Software Developer" , "Absolute Learner" , "Tech Enthusiast"];

  return (
      <div className="text-lg mx-auto text-muted-foreground dark:text-muted-foreground">
         Im &apos; a<FlipWords words={words}/> <br />
      </div>
  );
}
