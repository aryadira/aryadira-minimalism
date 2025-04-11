import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionBlur, SectionHeader, WorkCard } from "../custom";
import { Button } from "../ui/button";
import { workProjects } from "@/lib/constant/workProjects";
import instagram from "@/assets/imgs/ig.png";
import Image from "next/image";

const workTab = [
  { name: "All Work", key: "all" },
  { name: "Design", key: "design" },
  { name: "Development", key: "development" },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredWork =
    activeTab === "all"
      ? workProjects
      : workProjects.filter((work) => (Array.isArray(work.accessor) ? work.accessor.includes(activeTab) : work.accessor === activeTab));

  return (
    <SectionBlur id='work' className='work'>
      <SectionHeader
        title='Work & Project'
        subtitle='A collection of my work and projects, where design meets functionality to create impactful digital experiences.'
      />

      {/* 🔥 Tab Navigation */}
      <div className='work-tab mb-4 flex items-center gap-2.5'>
        {workTab.map((tab) => (
          <Button
            key={tab.key}
            className={`rounded-full transition-all duration-300 ${activeTab === tab.key ? "bg-black-gradient text-white" : "bg-white"}`}
            onClick={() => setActiveTab(tab.key)}>
            {tab.name}
          </Button>
        ))}
        <a href='https://www.instagram.com/dira.sign/' target='_blank'>
          <Button className={`rounded-full transition-all duration-300 bg-instagram text-white`}>
            <Image src={instagram} width={24} height={24} alt='instagram' />
            See More On Instagram
          </Button>
        </a>
      </div>

      {/* 🔥 Work List with Animation */}
      <motion.div
        className='work-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5'
        key={activeTab} // Memastikan animasi dipicu saat tab berubah
        initial={{ opacity: 0 }} // Muncul dengan fade-in
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} // Hilang dengan fade-out
        transition={{ duration: 2 }} // Durasi efek
      >
        <AnimatePresence mode='wait'>
          {filteredWork.map((work, index) => (
            <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <WorkCard title={work.title} category={work.category} year={work.year} image={work.image} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionBlur>
  );
};

export default Work;
