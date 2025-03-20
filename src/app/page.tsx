"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full bg-[#f5f5f5] px-2.5'>
      <header id='header' className='w-full bg-red-100 flex justify-between items-center'>
        <div className='left-side'>
          <div className='identity'>
            <p className='name capitalize text-base'>arya dira hernanda</p>
            <p className='aka capitalize text-sm text-[#555555]'>designer & Developer</p>
          </div>
        </div>
        <div className='middle'>
          {/* Dynamic Island Navigation */}
          <motion.div
            className='dynamic-island min-w-32 min-h-7 bg-black text-white rounded-full flex items-center px-2.5 py-2.5/2 gap-2.5 cursor-pointer'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            transition={{ duration: 1 }}>
            <div className='circle size-2 rounded-full bg-green-400'></div>
            <motion.nav
              className={`navlist ${!isHovered && "hidden"}`}
              initial={{ opacity: 0, translate: 1 }}
              animate={{ opacity: isHovered ? 1 : 0, translate: isHovered ? 1 : 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}>
              <ul className='flex items-center gap-2'>
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
            </motion.nav>
          </motion.div>
        </div>
        <div className='right-side'>
          <div className='switch-mode'></div>
          <div className='social'></div>
        </div>
      </header>
      <section id='about' className='about'>
        About
      </section>
      <section id='techstack' className='techstack'>
        Techstack
      </section>
      <section id='work' className='work'>
        Work & Project
      </section>
      <footer id='footer' className='footer'>
        Footer
      </footer>
    </div>
  );
}
