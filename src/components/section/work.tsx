import { SectionBlur, SectionHeader, WorkCard } from "../custom";

const Work = () => {
  return (
    <SectionBlur id='work' className='work'>
      <SectionHeader
        title='Work & Project'
        subtitle='A collection of my work and projects, where design meets functionality to create impactful digital experiences.'
      />
      <div className='work-content grid grid-cols-4 gap-2.5'>
        <WorkCard />
      </div>
    </SectionBlur>
  );
};

export default Work;
