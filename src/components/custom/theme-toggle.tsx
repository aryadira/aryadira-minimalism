import { Button } from "../ui/button";
import { Moon } from "lucide-react";

const ThemeToggle = () => {
  return (
    <div className='theme-toggle'>
      <Button className='mode'>
        <span>Dark Mode</span>
        <Moon />
      </Button>
    </div>
  );
};

export default ThemeToggle;
