import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { navlink } from '../../../data/data'
import logo from "../../../data/image/raad.png"
import  "./Header.css"
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {

  const [responsive, setResponsive] = useState(false)



  return (
    <>
      <header>
        <div className="container sbFlex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className={responsive ? "menuHide" : "nav"}>
            {navlink.map((links,i)=>(
              <Link to={links.url} key={i}>{links.text}</Link>
            ))}
          </div>

          <button className="toggle" onClick={() => setResponsive (!responsive)}>
            <GiHamburgerMenu className="icon"></GiHamburgerMenu>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
