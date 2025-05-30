import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(( )=>{
        
        const handleScroll = () => {
            // eslint-disable-next-line no-unused-vars
            const isScrolled = window.scrollY >10;    
            setScrolled(true)
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },[])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner'>
            <a href="#hero" className='logo'>
                Wellington | Portfolio
            </a>

            <nav className="desktop">
                <ul>
                    {navLinks.map(({name, link}) => (
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a href="#contact" className="contact-btn group">
                <div className="inner flex items-center justify-center">
                    <span >contato</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar
