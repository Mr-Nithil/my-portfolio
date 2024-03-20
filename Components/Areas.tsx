import { CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Areas() {
  return (
    <div className="bg-[#222831] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className='text-[#ebd849]'>Areas</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className='w-[6rem] mx-auto text-[#EEEEEE]' />
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
              Fullstack
            </h1>
            <p className='text-[15px] text-[#d3d2d2] font-normal'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&epos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className='w-[6rem] mx-auto text-[#EEEEEE]' />
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
              ML
            </h1>
            <p className='text-[15px] text-[#d3d2d2] font-normal'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&epos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className='w-[6rem] mx-auto text-[#EEEEEE]' />
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
              AI
            </h1>
            <p className='text-[15px] text-[#d3d2d2] font-normal'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&epos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Areas