import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

function About() {
  return (
    <div className="bg-[#02050a] pb-[4rem] pt-[4rem] md:pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap=[3rem] item-center justify-items-center">

            <div>
                <h1 className="text-[22px] font-bold uppercase text-[#348a8f] mb-[1rem]">
                    ABOUT ME
                </h1>
                <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-[#EEEEEE]">
                    ACTIVE <span className="text-[#ebd849]">LEADERSHIP</span>
                </h2>
                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <p className="text-[18px] text-slate-300 w-[80%]">
                    I&apos;m a self-passionate young man who always accepts any challenge and works hard to be the best version of myself. As a good team player, I actively listen to others, respect diverse perspectives, and collaborate effectively to achieve collective success. Additionally, I lead by example, fostering a positive environment where team members feel empowered to contribute their ideas and talents. By nurturing a culture of trust, accountability, and continuous learning, I strive to inspire those around me to reach their highest potential.
                    </p>
                </div>
                <button className="px-[2rem] hover:bg-[#ebd849] transition-all duration-200 py-[1rem] text-[18px] font-bold 
              uppercase bg-[#348a8f] text-[#EEEEEE] flex items-center space-x-2">
                <p>Download Cv</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-[#EEEEEE]"/>
              </button>
            </div>
            <div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
                <Image src="/images/u6.jpeg" alt="user" layout='fill' objectFit='contain' className='relative z-[11] w-[100%] h-[100%] object-contain'/>
                <div className="absolute w-[75%] h-[100%] z-[10] bg-[#348a8f] top-[-1.8rem] right-[1.8rem]">

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About