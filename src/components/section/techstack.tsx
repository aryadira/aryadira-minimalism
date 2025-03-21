import { techstacks } from "@/lib/constant/techstacks";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { SectionBlur, SectionHeader } from "../custom";
import { useEffect } from "react";

const Techstack = () => {
  return (
    <SectionBlur id='techstack' className='techstack flex flex-col gap-2.5 bg-white-blur border-2 border-white p-5 rounded-xl'>
      <SectionHeader title='Tech Stack & Tools' subtitle='The technologies and tools I use to design, develop, and bring ideas to life.' />
      <TechStackList />
    </SectionBlur>
  );
};

const TechStackList = () => {
  const controls = useAnimation(); // Kontrol animasi

  useEffect(() => {
    controls.start({ x: ["0%", "-100%"] });
  }, [controls]);

  return (
    <div className='overflow-hidden w-full'>
      <motion.div className='flex gap-5' animate={{ x: ["0%", "-100%"] }} transition={{ ease: "linear", repeat: Infinity, duration: 20 }}>
        {[...techstacks, ...techstacks].map((ts, index) => (
          <div
            className='bg-white-blur border-2 border-white py-8 px-5 rounded-lg flex flex-col items-center justify-between min-w-[150px]'
            key={index}>
            <Image width={ts.width} height={ts.height} src={ts.image} alt={ts.name} />
            <p className='mt-2.5'>{ts.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Techstack;
