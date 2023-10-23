import React from 'react'
import { home } from '../../data/data'
import Typewriter from "typewriter-effect"
import  "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val,i)=>(
            <div className="containerHero">
                <h3>{val.text}</h3>

                <h1>
                    <Typewriter 
                    options = {{ strings: [ `${val.name}`, `${val.post}`, `${val.design}`],
                    autoStart:true,
                    loop:true,
                     }} />
                </h1>

                <p>{val.desc}</p>

                <button className="btnInit">
                    Download Cv
                </button>
            </div>
        ))}
      </section>
    </>
  )
}

export default Hero
