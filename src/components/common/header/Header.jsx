import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
      <header>
        <div className="container sbFlex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="nav">
            {navli}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
