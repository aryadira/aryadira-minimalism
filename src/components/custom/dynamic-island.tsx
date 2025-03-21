import React, { useState } from "react";
import { motion } from "framer-motion";

const DynamicIsland = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className='dynamic-island min-w-32 min-h-7 hover:scale-110 bg-black text-white rounded-full flex items-center px-2.5 py-2.5/2 gap-2.5 cursor-pointer transition-all'
      onClick={() => setIsHovered(!isHovered)}
      animate={{ translate: 100 }}>
      <div className='circle size-2 rounded-full bg-green-400'></div>
      <motion.nav
        className={`navlist ${!isHovered && "hidden"}`}
        initial={{ opacity: 0, translate: 1 }}
        animate={{ opacity: isHovered ? 1 : 0, translate: isHovered ? 1 : 0.8 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}>
        <ul className='flex items-center gap-2'>
          <li className='hover:scale-120 transition-all'>Home</li>
          <li className='hover:scale-120 transition-all'>About</li>
          <li className='hover:scale-120 transition-all'>Work</li>
          <li className='hover:scale-120 transition-all'>Contact</li>
        </ul>
      </motion.nav>
    </motion.div>
  );
};

export default DynamicIsland;
