import React from 'react'
import "./Services.css"
import Heading from "../common/heading/Heading"
import { services } from '../../data/data'

const Services = () => {
  return (
    <>
      <section className='services'>
        <div className="container">
          <Heading title="Services" />
          <div className="content grid3">

            {services.map((item, i) => (
              <div className="box">
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
