import React from 'react'
import "./Pages.css"
import { Route, Routes, Router, Switch } from "react-router-dom";
import Header from '../components/common/header/Header';
import Home from "../components/home/Home"
import About from "../components/about/About"
import Services from "../components/service/Services"
import Portfolio from '../components/portfolio/Portfolio';


const Pages = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/portfolio' element={<Portfolio />} />
                
            </Routes>
        </>
    )
}

export default Pages
