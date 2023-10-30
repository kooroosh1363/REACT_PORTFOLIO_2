import React from 'react'
import { social } from '../../../data/data'
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <footer>
                {social.map((item) => (
                    <>
                        <i data-aos="zoom-in">{item.icon}</i>
                    </>
                ))}

                <p data-aos="zoom-in-right">All Right  2023</p>
            </footer>
        </>
    )
}

export default Footer
