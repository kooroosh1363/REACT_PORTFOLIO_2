import React from 'react'
import "./Pages.css"
import { Route, Routes, Router, Switch } from "react-router-dom";
import Header from '../components/common/header/Header';
import Home from "../components/home/Home"

const Pages = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}

export default Pages
