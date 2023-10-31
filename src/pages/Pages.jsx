import React from 'react'
import "./Pages.css"
import { Route, Routes } from "react-router-dom";
import Header from '../components/common/header/Header';
import Home from "../components/home/Home"
import About from "../components/about/About"
import Services from "../components/service/Services"
import Portfolio from '../components/portfolio/Portfolio';
import Testimonials from '../components/testimonial/Testimonials';
import Blog from '../components/blog/Blog';
import Contact from '../components/contact/Contact';
import Footer from '../components/common/footer/Footer';


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
                <Route path='/contact' element={<Contact />} />
                
            </Routes>
            <Footer/>
        </>
    )
}

export default Pages
