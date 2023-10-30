import React from 'react'
import "./Testmonials.css"
import { testimonials } from '../../data/data'
import { BiSolidQuoteAltRight } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <>
            <section className="testimonials hero">
                <div className="container">
                    <Slider {...settings}>
                        {testimonials.map((val) => (
                            <div className="box" >
                                <i data-aos="zoom-in-down">
                                    <BiSolidQuoteAltRight />
                                </i>
                                <p data-aos="zoom-out-up">{val.text}</p>

                                <div className="img">
                                    <img src={val.image} alt="" data-aos="zoom-in-up" />
                                </div>

                                <h3 data-aos="fade-out-up">{val.name}</h3>
                                <label data-aos="zoom-out-up">{val.post}</label>

                            </div>
                        ))}
                    </Slider>

                </div>
            </section>
        </>
    )
}

export default Testimonials
