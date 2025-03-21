import { Button } from "../ui/button";
import { Moon } from "lucide-react";

const SwitchMode = () => {
  return (
    <div className='switch-mode'>
      <Button className='mode'>
        <span>Dark Mode</span>
        <Moon />
      </Button>
    </div>
  );
};

export default SwitchMode;
