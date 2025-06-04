import React, { useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


const MoreCase = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    

   
    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
         projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                },
            }
        );
    })

        gsap.fromTo(
            sectionRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        )
    }, [])

  return (
    <section ref={sectionRef } id='work' className='app-showcase mt-0'>
      <div className="w-full">
        <div className="showcaselayout">
            {/* //left */}
            <div className="first-project-wrapper" ref={project1Ref}>
                <div className="image-wrapper">
                    <img src="/images/project4.png" alt="Ryde" />
                </div>
                <div className="text-content">
                    <h2>Efood - plataforma de e-commerce
                        <a className='text-blue-800' href="https://e-food-silk.vercel.app" target="_blank"> acesse</a>
                    </h2>

                    <p className="text-white-50 md:text-xl">
                        Aplicação construida com React e Styles Component
                    </p>
                </div>
            </div>

            {/* //right */}

            <div className="project-list-wrapper overflow-hidden">
                <div className="project" ref={project2Ref}>
                    <div className='image-wrapper bg-[#ffefdb]'><img src="/images/project5.png" alt="hospital" /></div>
                    <h2>EPlay - Game store  -  <a className='text-blue-800' href="https://eplay-react-two.vercel.app" target="_blank"> acesse</a> </h2>
                </div>
                
                <div className="project" ref={project3Ref}>
                    <div className='image-wrapper bg-[#ffe7eb]'><img src="/images/gh.png" alt="portfolio" /></div>
                    <h2>Mais projetos - github <a className='text-blue-800' href="https://github.com/wll-machado" target="_blank">acesse</a></h2>
                </div>
            </div>
            
        </div>
      </div>
    </section>
  )
}

export default MoreCase;
