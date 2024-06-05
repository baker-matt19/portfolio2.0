"use client";

import { useState } from 'react';
import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Contact from '@/components/contact';

export default function Home() {
  const isVisible = useState(true);

  return (
    <main className="flex flex-col items-center px-4">
      <Intro isVisible={true}/>
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
      
    </main>
  )
}
