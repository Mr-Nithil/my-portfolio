import React from 'react'

interface Props {
    title: string;
    year: string;
}

const SkillsItem = ({title,year}: Props) => {
  return (
    <div className='mb-[3rem] md:mb-[6rem]'>
        <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]'>
            {year}
        </span>
        <h1 className='mt-[2rem] uppercase font-bold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
            {title}
        </h1>
        <p className='text-[#a1a1a1] font-normal w-[90%] text=[17px] opacity=80'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&epos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
    </div>
  )
}

export default SkillsItem