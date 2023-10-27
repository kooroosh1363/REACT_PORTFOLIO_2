import React from 'react'
import Hero from '../hero/Hero'
import About from '../about/About'
import Services from "../service/Services"
import Counter from "../counter/Counter"
import Portfolio from '../portfolio/Portfolio'
import Testimonials from '../testimonial/Testimonials'

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Counter/>
      <Portfolio/>
      <Testimonials/>
    </>
  )
}

export default Home
