import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Programmer',
        1500,
        'Web Developer',
        1500,
        'Volunteer',
        1500
      ]}

      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#29A8DF] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect