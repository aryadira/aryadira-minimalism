import Image from "next/image";
import seefluencer from "@/assets/imgs/work/seefluencer.png";

const WorkCard = () => {
  return (
    <div className='work-card bg-white p-2.5 rounded-lg border border-[#eeeeee] hover:scale-105 cursor-pointer transition-all'>
      <figure className='border-8 border-white/70 shadow-sm rounded-lg overflow-hidden'>
        <Image src={seefluencer} alt='seefluencer' className='w-full h-full object-cover' />
      </figure>
      <div className='description flex items-center justify-between p-2.5'>
        <div className='title'>
          <div className='title text-2xl mb-2.5'>Seefluencer</div>
          <div className='subtitle text-base'>Design</div>
        </div>
        <div className='year'>2024</div>
      </div>
    </div>
  );
};

export default WorkCard;
