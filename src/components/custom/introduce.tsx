import BlurText from "@/rb/text_animations/BlurText/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Introduce = () => {
  return (
    <div className='introduce text-5xl leading-relaxed font-light mb-2.5 mt-5 text-justify w-full'>
      I am a passionate UI/UX Designer and Full-Stack Developer with a strong focus on creating intuitive, user-friendly, and high-performance digital
      experiences. With expertise in both design and development, I bridge the gap between aesthetics and functionality, ensuring seamless and
      engaging user interactions.
      {/* <BlurText
        text='I am a passionate UI/UX Designer and Full-Stack Developer with a strong focus on creating intuitive, user-friendly, and high-performance digital experiences. With expertise in both design and development, I bridge the gap between aesthetics and functionality, ensuring seamless and engaging user interactions.'
        delay={50}
        animateBy='words'
        direction='bottom'
        onAnimationComplete={handleAnimationComplete}
      /> */}
    </div>
  );
};

export default Introduce;
