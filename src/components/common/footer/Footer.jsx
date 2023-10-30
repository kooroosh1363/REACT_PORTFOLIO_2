import React from 'react'
import { social } from '../../../data/data'
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <footer>
                {social.map((item) => (
                    <>
                        <i>{item.icon}</i>
                    </>
                ))}

                <p>All Right  2023</p>
            </footer>
        </>
    )
}

export default Footer
