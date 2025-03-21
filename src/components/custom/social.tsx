import github from "@/assets/imgs/github.png";
import instagram from "@/assets/imgs/ig.png";
import x from "@/assets/imgs/xlogo.png";
import Image from "next/image";

const Social = () => {
  return (
    <div className='social bg-white flex items- gap-1.5 p-1.5 rounded-sm cursor-pointer hover:scale-110 shadow-xs transition-all'>
      <span className='hover:scale-120 transition-all'>
        <Image src={instagram} width={24} height={24} alt='instagram' />
      </span>
      <span className='hover:scale-120 transition-all'>
        <Image src={github} width={24} height={24} alt='github' />
      </span>
      <span className='hover:scale-120 transition-all'>
        <Image src={x} width={24} height={24} alt='x' />
      </span>
    </div>
  );
};

export default Social;
