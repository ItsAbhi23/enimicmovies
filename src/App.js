import React from 'react'
import Single from "./Single"
import Home from './Home'
import Error from './Error'
import About from './About'
import "./App.css"
import Footer from './footer'
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/About" element={<About />} />
        <Route path="/movie/:id" element={<Single />} />
        <Route Path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;