import React from 'react'
import "./Pages.css"
import { Route, Routes, Router, Switch } from "react-router-dom";
import Header from '../components/common/header/Header';
import Home from "../components/home/Home"
import About from "../components/about/About"
import Services from "../components/service/Services"
import Portfolio from '../components/portfolio/Portfolio';
import Testimonials from '../components/testimonial/Testimonials';
import Blog from '../components/blog/Blog';


const Pages = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path='/blog' element={<Blog />} />
                
            </Routes>
        </>
    )
}

export default Pages
