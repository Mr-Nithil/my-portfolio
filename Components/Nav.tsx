import { Bars3Icon } from '@heroicons/react/16/solid'
import { UserIcon } from '@heroicons/react/20/solid';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react'

interface Props {
  openNav: () => void;
}

const Nav = ({openNav}:Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#02050a] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-[#EEEEEE] font-bold'>
                <span className='text-[#EEEEEE]'><UserCircleIcon className='w-[50px] h-[50px]'/></span>
            </h1>
            <div className='nav-link'>HOME</div>
            <div className='nav-link'>ABOUT</div>
            <div className='nav-link'>AREAS</div>
            <div className='nav-link'>EDUCATION & SKILLS</div>
            <div className='nav-link'>PROJECTS</div>
            <div className='nav-link'>CONTACT</div>
            <div onClick={openNav}> 
                <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300'/>
            </div>
        </div>
    </div>
  )
}

export default Nav