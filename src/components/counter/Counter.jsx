import React from 'react'
import { project } from '../../data/data'
import "./Counter.css"
import CountUp from 'react-countup'

const Counter = () => {
    return (
        <>
            <div className="hero counter">
                <div className="container grid3 grid4">
                    {project.map((item, i) => (
                        <div className="box" data-aos="fade-down-right">
                            <i>{item.icon}</i>
                            <h1 className='heading'>

                                <CountUp enableScrollSpy duration={2} end={item.num} />
                            </h1>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Counter
