import { Button } from "@/components/ui/button";
import { Camera, File, Palette, User } from "lucide-react";

const Interaction = () => {
  return (
    <div className='interaction my-5 flex items-center justify-between'>
      <div className='left-side flex items-center gap-2.5'>
        <Button className='bg-black text-white'>
          <span>Curriculum Vitae</span>
          <File />
        </Button>
        <div className='line inline-block w-[0.5px] h-5 bg-black'></div>
        <p>Click anything, you will get something!</p>
      </div>
      <div className='right-side flex items-center gap-2.5'>
        <Button className='bg-blue-gradient text-white'>
          <span>It's me</span>
          <Camera />
        </Button>
        <Button className='bg-purple-gradient text-white'>
          <span>My arts</span>
          <Palette />
        </Button>
        <Button className='bg-red-gradient text-white'>
          <span>Send anonymous</span>
          <User />
        </Button>
      </div>
    </div>
  );
};

export default Interaction;
