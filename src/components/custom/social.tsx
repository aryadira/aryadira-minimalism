import github from "@/assets/imgs/github.png";
import instagram from "@/assets/imgs/ig.png";
import linkedin from "@/assets/imgs/linkedin.png";
import Image from "next/image";

const Social = () => {
  return (
    <div className='social bg-white flex items-center gap-1.5 p-1.5 rounded-sm cursor-pointer hover:scale-110 shadow-xs transition-all'>
      <span className='hover:scale-120 transition-all'>
        <a href='https://www.instagram.com/aryaadrh/' target='_blank'>
          <Image src={instagram} width={24} height={24} alt='instagram' />
        </a>
      </span>
      <span className='hover:scale-120 transition-all'>
        <a href='https://github.com/aryadira' target='_blank'>
          {" "}
          <Image src={github} width={24} height={24} alt='github' />
        </a>
      </span>
      <span className='hover:scale-120 transition-all'>
        <a href='https://www.linkedin.com/in/aryadira/' target='_blank'>
          <Image src={linkedin} width={24} height={24} alt='linkedin' />
        </a>
      </span>
    </div>
  );
};

export default Social;
