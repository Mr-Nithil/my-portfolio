import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'FrontEnd Development',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Backend Development',
        1500,
        'Machine Learning',
        1500,
        'Artificial Intelligence',
        1500,
        'Deep Learning',
        1500,
        'DevOps Engineering',
        1500
      ]}

      speed={50}
      className='text-[1rem] md:text-[2rem] text-[#348a8f] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect