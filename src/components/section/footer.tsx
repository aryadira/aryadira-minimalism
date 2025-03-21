import bgDonut from "@/assets/imgs/bg-donut.png";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { SectionBlur } from "../custom";

const Footer = () => {
  return (
    <SectionBlur id='footer' className='footer relative overflow-hidden'>
      <Image src={bgDonut} alt='bg-donut' layout='fill' objectFit='cover' className='z-0' />
      <div className='footer-content relative z-10 flex flex-col items-center gap-6 py-24'>
        <div className='title-footer text-center'>
          <div className='title text-[42px] text-center leading-tight mb-6'>
            Looking for a designer & developer?
            <br />
            Let’s build something amazing!
          </div>
          <div className='subtitle text-base'>Crafting seamless experiences, one pixel at a time.</div>
        </div>
        <Button className='bg-black-gradient'>
          <span>Contact</span>
          <Phone />
        </Button>
      </div>
    </SectionBlur>
  );
};

export default Footer;
