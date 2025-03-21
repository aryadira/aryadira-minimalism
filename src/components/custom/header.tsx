import React from "react";

import { DynamicIsland, Identity, Social, ThemeToggle } from "@/components/custom";

const Header = () => {
  return (
    <header id='header' className='w-full grid grid-cols-3'>
      <div className='left-side'>
        <Identity />
      </div>
      <div className='middle flex items-center justify-center'>
        {/* Dynamic Island Navigation */}
        <DynamicIsland />
      </div>
      <div className='right-side flex items-center justify-end gap-2.5'>
        <ThemeToggle />
        <Social />
      </div>
    </header>
  );
};

export default Header;
