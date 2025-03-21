import { techstacks } from "@/lib/constant/techstacks";
import Image from "next/image";
import SectionHeader from "../custom/section-header";

const Techstack = () => {
  return (
    <section id='techstack' className='techstack flex flex-col gap-2.5'>
      <SectionHeader title='Tech Stack & Tools' subtitle='The technologies and tools i use to design, develop, and bring ideas to life.' />
      <TechStackList />
    </section>
  );
};

const TechStackList = () => {
  return (
    <div className='techstack-list grid grid-cols-8 gap-2.5'>
      {techstacks.map((ts, index) => (
        <div className='bg-white-blur border-2 border-white py-8 px-5 rounded-lg flex flex-col items-center justify-between' key={index}>
          <Image width={ts.width} height={ts.height} src={ts.image} alt={ts.name} />
          <p className='mt-2.5'>{ts.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Techstack;
