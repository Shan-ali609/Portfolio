"use client"

import HappyClient from "@/components/HappyClient";
import Hero from "@/components/Hero";
import Hprojectsection from "@/components/Hprojectsection";
import Quotes from "@/components/Quotes";
import Skills from "@/components/Skills";
import Worktogether from "@/components/Worktogether";

export default function Home() {
  return (
   <div>
    <Hero />
    <Skills />
    <Hprojectsection />
    <HappyClient />
    <Quotes />
    <Worktogether />
   </div>
  );
}
