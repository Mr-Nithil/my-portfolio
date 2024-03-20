import React from 'react'

interface Props {
    title: string;
    year: string;
    description: string;
}

const SkillsItem = ({title,year,description}: Props) => {
  return (
    <div className='mb-[2rem] md:mb-[4rem]'>
        <span className='px-[2rem] text-[#348a8f] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#348a8f]'>
            {year}
        </span>
        <h1 className='mt-[2rem] uppercase font-bold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-[#EEEEEE]'>
            {title}
        </h1>
        <p className='text-[#a1a1a1] font-normal w-[90%] text-[21px] opacity-80'>
        {description}
        </p>
    </div>
  )
}

export default SkillsItem