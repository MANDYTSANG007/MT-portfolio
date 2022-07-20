import React from 'react';
import './App.css';
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
// import Portfolio2 from "./components/portfolio/Portfolio2";
import Portfolio3 from "./components/portfolio/Portfolio3";
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
            <Route path="/Portfolio" element={<Portfolio3 />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
