import React from 'react';
import './App.css';
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
