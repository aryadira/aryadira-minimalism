import { SectionBlur, SectionHeader, WorkCard } from "../custom";
import seefluencer from "@/assets/imgs/work/seefluencer.png";

const workProjects = [
  { title: "FoodSaver", image: seefluencer, category: "App Development", year: 2023 },
  { title: "EcoFashion", image: seefluencer, category: "Branding", year: 2022 },
  { title: "MindSync", image: seefluencer, category: "AI & Machine Learning", year: 2025 },
  { title: "PANGAN+", image: seefluencer, category: "eCommerce", year: 2024 },
  { title: "CodeNest", image: seefluencer, category: "Web Development", year: 2023 },
  { title: "UrbanNest", image: seefluencer, category: "Interior Design", year: 2022 },
  { title: "Seefluencer", image: seefluencer, category: "Marketing & Influencers", year: 2024 },
  { title: "GenZealth", image: seefluencer, category: "Health & Wellness", year: 2025 },
  { title: "VIA Keyboard", image: seefluencer, category: "Hardware & Tech", year: 2023 },
  { title: "TravelHive", image: seefluencer, category: "Travel & Tourism", year: 2024 },
];

const Work = () => {
  return (
    <SectionBlur id='work' className='work'>
      <SectionHeader
        title='Work & Project'
        subtitle='A collection of my work and projects, where design meets functionality to create impactful digital experiences.'
      />
      <div className='work-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5'>
        {workProjects.map((project, index) => (
          <WorkCard key={index} title={project.title} category={project.category} year={project.year} image={project.image} />
        ))}
      </div>
    </SectionBlur>
  );
};

export default Work;
