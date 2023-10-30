import React from 'react'
import "./About.css"
import { about } from '../../data/data'
import Heading from "../common/heading/Heading"



const About = () => {
    return (
        <>
            <section className='about'>
                <div className="container flex">
                    {about.map((val, i) => (
                        <>
                        <div className="left">
                            <img src={val.cover} alt="" data-aos="fade-right"/>
                        </div>

                        <div className="right" data-aos="fade-left">
                            <Heading title='About Me'/>

                            <p>{val.desc}</p>
                            <p>{val.desc1}</p>

                            <button>Download CV</button>
                            <button className='btnInit'>Download CV</button>
                        </div>
                        </>
                    ))}
            
        
                </div>
            </section>
        </>
    )
}

export default About
