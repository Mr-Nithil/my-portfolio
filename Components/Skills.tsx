import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

function Skills() {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <h1 className='heading'>
            Education & <span className='text-[#ebd849]'>Skills</span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <SkillsItem title="BSc. Computer Engineering" year="2021 - Present"  description="University of Ruhuna" />
            <SkillsItem title="Basic Graphic Designing" year="2021 - 2022" description="Wijaya Graphics, Sri Lanka"/>
            <SkillsItem title="G.C.E Advanced Level (2019)" year="2017 - 2019" description={"St. Peter\'s College Gampaha Branch - 2 A's & 1B"} />
            <SkillsItem title="G.C.E Ordinary Level (2016)" year="2006 - 2016" description={"St. Peter\'s College Gampaha Branch - 9 A's"}/>
            <SkillsLanguage skill1="ASP.net" skill2="Flutter / Dart" skill3="React" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/>
            <SkillsLanguage skill1="HTML / CSS / JS" skill2="Tailwind CSS / Next JS / TS" skill3="Angular" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/>
            <SkillsLanguage skill1="Java" skill2="Springboot" skill3="C#" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/>
            <SkillsLanguage skill1="MySQL" skill2="PostgreSQL" skill3="Firebase" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/>
            <SkillsLanguage skill1="ML" skill2="Python" skill3="C++" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/>
            <SkillsLanguage skill1="GIT" skill2="JIRA" skill3="DOCKER" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/>
        </div>
    </div>
  )
}

export default Skills