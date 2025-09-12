import React from "react";
import { FlipWords } from "./ui/flip-words";


export function FlipWordsDemo() {
  const words = ["Software Developer" , "GenAI Dev" , "Agentic-AI Dev" , "Absolute Learner" , "Tech Enthusiast"];

  return (
      <div className="text-lg mx-auto text-muted-foreground dark:text-muted-foreground">
         I &apos;m an<FlipWords words={words}/> <br />
      </div>
  );
}
