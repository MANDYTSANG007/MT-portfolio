import React from 'react';
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Portfolio3 from "./components/portfolio/Portfolio3";
import Contact from "./components/contact/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <Routes>
            <Route path="/mt-portfolio" element={<Home />} />
            <Route path="/Portfolio" element={<Portfolio3 />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
