import React, { useState } from 'react'
import "./Portfolio.css"
import { portfolio } from '../../data/data'
import { MdVisibility } from "react-icons/md";
import Heading from '../common/heading/Heading';

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]

const Portfolio = () => {

    const [list, setList] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)
    console.log(setCategory);

    const itemFilter = (category) => {
        const itemNew = portfolio.filter((item) => item.category === category)
        setList(itemNew)

        if (category === "all") {
            setList(portfolio)
        }
    }

    return (
        <>
            <article>
                <div className="container">
                    <Heading title="Portfolio" />

                    <div className="btnCta">
                        {category.map((category) => (
                            <button className='btnInit' onClick={() => itemFilter
                                (category)} data-aos="fade-down">
                                {category}
                            </button>
                        ))}
                    </div>


                    <div className="content grid3">
                        {list.map((items) => (
                            <div className="box" data-aos="fade-up">
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
