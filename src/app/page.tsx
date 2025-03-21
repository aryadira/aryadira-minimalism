"use client";

import Header from "@/components/custom/header";
import About from "@/components/section/about";
import Techstack from "@/components/section/techstack";

export default function Home() {
  return (
    <div className='w-full bg-[#f5f5f5] px-2.5 max-w-[1440px]'>
      <Header />
      <About />
      <Techstack />
      <section id='work' className='work'>
        Work & Project
      </section>
      <footer id='footer' className='footer'>
        Footer
      </footer>
    </div>
  );
}
