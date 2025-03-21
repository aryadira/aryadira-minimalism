"use client";

import Header from "@/components/custom/header";
import SectionHeader from "@/components/custom/section-header";
import About from "@/components/section/about";
import Techstack from "@/components/section/techstack";
import Footer from "@/components/section/footer";

import Image from "next/image";
import SectionBlur from "@/components/custom/section-blur";

import blueCircleGradient from "@/assets/imgs/Blue - Gradient Burst@2x.svg";
import violetCircleGradient from "@/assets/imgs/Violet - Gradient Burst.svg";

import seefluencer from "@/assets/imgs/work/seefluencer.png";
import Work from "@/components/section/work";

export default function Home() {
  return (
    <div className='home relative oveflow-hidden'>
      {/* Background Gradient */}

      {/* blue left top */}
      <Image width={2000} src={violetCircleGradient} alt='blue' className='absolute top-0 left-0 -translate-1/2 z-0 pointer-events-none' />

      {/* blue right mid */}
      <Image width={2000} height={1000} src={blueCircleGradient} alt='blue' className='absolute right-0 translate-x-1/2 z-0 pointer-events-none' />

      {/* violet right mid */}
      <Image width={2000} src={violetCircleGradient} alt='blue' className='absolute top-0 left-0 translate-1/2 z-0 pointer-events-none' />

      {/* blue left mid  */}
      <Image width={2000} height={1000} src={blueCircleGradient} alt='violet' className='absolute right-0 -translate-x-1/2 z-0 pointer-events-none' />

      {/* violet left bottom */}
      <Image
        width={2000}
        src={violetCircleGradient}
        alt='blue'
        className='absolute left-7 -bottom-[400px] -translate-x-1/2 z-0 pointer-events-none'
      />

      <div className='content w-full px-2.5 max-w-[1440px] flex flex-col gap-2.5 z-10 relative'>
        {/* Content */}
        <Header />
        <About />
        <Techstack />
        <Work />
        <Footer />
      </div>
    </div>
  );
}
