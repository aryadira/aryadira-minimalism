"use client";

import Image from "next/image";

import blueCircleGradient from "@/assets/imgs/Blue - Gradient Burst@2x.svg";
import violetCircleGradient from "@/assets/imgs/Violet - Gradient Burst.svg";

import { Header } from "@/components/custom";
import { About, Footer, Techstack, Work } from "@/components/section";
import FadeContent from "@/rb/animations/FadeContent/FadeContent";

export default function Home() {
  return (
    <div className='home relative w-full max-w-[1440px]'>
      {/* Background Gradient */}

      {/* blue left top */}
      <Image width={2000} src={violetCircleGradient} alt='blue' className='absolute top-0 left-0 -translate-1/2 z-0 pointer-events-none' />

      {/* blue right mid */}
      <Image width={2000} src={blueCircleGradient} alt='blue' className='absolute right-0 translate-x-1/2 z-0 pointer-events-none' />

      {/* violet right mid */}
      <Image width={2000} src={violetCircleGradient} alt='blue' className='absolute top-0 left-0 translate-1/2 z-0 pointer-events-none' />

      {/* blue left mid  */}
      <Image width={2000} src={blueCircleGradient} alt='violet' className='absolute right-0 -translate-x-1/2 z-0 pointer-events-none' />

      {/* violet left bottom */}
      <Image
        width={2000}
        src={violetCircleGradient}
        alt='blue'
        className='absolute left-7 -bottom-[400px] -translate-x-1/2 z-0 pointer-events-none'
      />

      {/* blue right bottom */}
      <Image width={2000} src={blueCircleGradient} alt='blue' className='absolute right-0 bottom-0 translate-x-1/2 z-0 pointer-events-none' />

      <div className='content w-full px-2.5 flex flex-col gap-2.5 z-10 relative'>
        {/* Content */}
        <FadeContent blur={true} duration={1000} easing='ease-out' initialOpacity={0}>
          <Header />
        </FadeContent>
        <FadeContent blur={true} duration={1200} easing='ease-out' initialOpacity={0}>
          <About />
        </FadeContent>
        <FadeContent blur={true} duration={1300} easing='ease-out' initialOpacity={0}>
          <Techstack />
        </FadeContent>
        <FadeContent blur={true} duration={1400} easing='ease-out' initialOpacity={0}>
          <Work />
        </FadeContent>
        <FadeContent blur={true} duration={1500} easing='ease-out' initialOpacity={0}>
          <Footer />
        </FadeContent>
      </div>
    </div>
  );
}
