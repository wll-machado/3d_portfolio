import React from 'react'
import TitleHeader from '../components/TitleHeader'
import {  techStackImgs } from '../constants'


const TechStack = () => {
  return (
    <div className='flex-center section-padding' id='skills'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader title='Tech Stack Preferidas' sub='Minhas competências' />

        <div className="tech-grid">
            {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="padding-x mb-8 w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
