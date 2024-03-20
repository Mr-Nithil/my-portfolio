import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon, MapPinIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#348a8f]'>
                    <MapPinIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[#EEEEEE]'>Address</h1>
                    <p className='text-[17px] w-[90%] text-[#EEEEEE] opacity-60'>
                        29/E, Katugastara Gampaha.
                    </p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#348a8f]'>
                    <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[#EEEEEE]'>Phone</h1>
                    <p className='text-[17px] w-[90%] text-[#EEEEEE] opacity-60'>
                        +94717059404<br/>+94332233737
                    </p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#348a8f]'>
                    <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black'/>
                </div>
                <div>
                    <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[#EEEEEE]'>Email</h1>
                    <p className='text-[17px] w-[90%] text-[#EEEEEE] opacity-60'>
                        nithilsheshan@gmail.com
                    </p>
                </div>
            </div>
        </div>
        <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
            <div className='text-[18px] mb-[2rem] md:mb-0 text-[#EEEEEE] opacity-20'>
                Nithil Sheshan 2024 | All Rights Reserved
            </div>
            <div className='flex items-center space-x-10'>
                <p className='text-[18px] text-[#EEEEEE] opacity-20'>Terms & Conditions</p>
                <p className='text-[18px] text-[#EEEEEE] opacity-20'>Privacy Policy</p>
                <p className='text-[18px] text-[#EEEEEE] opacity-20'>Sitemap</p>
            </div>
        </div>
    </div>
  )
}

export default Footer