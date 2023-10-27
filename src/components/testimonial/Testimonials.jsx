import React from 'react'
import "./Testmonials.css"
import { testimonials } from '../../data/data'
import { BiSolidQuoteAltRight } from "react-icons/bi";


const Testimonials = () => {
  return (
    <>
      <div className="testimonials hero">
        <div className="container">
            {testimonials.map((val)=>(
                <div className="box">
                    <i>
                        <BiSolidQuoteAltRight/>
                        <p>{val.text}</p>

                        <div className="img">
                            <img src={val.image} alt="" />
                        </div>

                        <h3>{val.name}</h3>
                        <label>{val.post}</label>
                    </i>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Testimonials
