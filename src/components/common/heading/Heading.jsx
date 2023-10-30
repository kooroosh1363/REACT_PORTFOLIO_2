import React from 'react'
import "./Heading.css"



const Heading = ({title}) => {
  return (
    <>
      <h2 className='heading' data-aos="fade-in-zoom">{title}</h2>
    </>
  )
}

export default Heading
