import { techstacks } from "@/lib/constant/techstacks";
import Image from "next/image";
import { SectionBlur, SectionHeader } from "../custom";

const Techstack = () => {
  return (
    <SectionBlur id='techstack' className='techstack flex flex-col gap-2.5 bg-white-blur border-2 border-white p-5 rounded-xl'>
      <SectionHeader title='Tech Stack & Tools' subtitle='The technologies and tools i use to design, develop, and bring ideas to life.' />
      <TechStackList />
    </SectionBlur>
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
