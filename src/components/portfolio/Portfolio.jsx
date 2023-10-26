import React, { useState } from 'react'
import "./Portfolio.css"
import { portfolio } from '../../data/data'
import { MdVisibility } from "react-icons/md";

const Portfolio = () => {

    const [list, setList] = useState(portfolio)

    return (
        <>
            <article>
                <div className="container">
                    <div className="btnCta">
                        text
                    </div>


                    <div className="content grid3">
                        {list.map((items) => (
                            <div className="box">
                                <div className="img">
                                    <img src={items.cover} alt="" />
                                </div>

                                <div className="overlay">
                                    <h3>{items.title}</h3>
                                    <span>{items.name}</span>

                                    <MdVisibility />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </>
    )
}

export default Portfolio
