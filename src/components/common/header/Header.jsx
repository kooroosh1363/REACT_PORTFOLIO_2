import React from 'react'
import {Link} from 'react-router-dom'
import { navlink } from '../../../data/data'
import logo from "../../../data/image/raad.png"
import  "./Header.css"
const Header = () => {
  return (
    <>
      <header>
        <div className="container sbFlex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="nav">
            {navlink.map((links,i)=>(
              <Link to={links.url} key={i}>{links.text}</Link>
            ))}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
