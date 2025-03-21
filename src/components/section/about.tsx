import { Interaction, Introduce } from "../custom";

const About = () => {
  return (
    <section id='about' className='w-full mb-10'>
      <Introduce />
      <Interaction />
    </section>
  );
};

export default About;
