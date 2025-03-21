"use client";

import { DynamicIsland, Identity, Social, SwitchMode } from "@/components/custom";

export default function Home() {
  return (
    <div className='w-full bg-[#f5f5f5] px-2.5'>
      <header id='header' className='w-full grid grid-cols-3'>
        <div className='left-side'>
          <Identity />
        </div>
        <div className='middle flex items-center justify-center'>
          {/* Dynamic Island Navigation */}
          <DynamicIsland />
        </div>
        <div className='right-side flex items-center justify-end gap-2.5'>
          <SwitchMode />
          <Social />
        </div>
      </header>
      <section id='about' className='about'>
        About
      </section>
      <section id='techstack' className='techstack'>
        Techstack
      </section>
      <section id='work' className='work'>
        Work & Project
      </section>
      <footer id='footer' className='footer'>
        Footer
      </footer>
    </div>
  );
}
