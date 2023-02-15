import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./pages/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Errors from './pages/Errors'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {< Navbar />}>
          <Route index element = {< Home />}/>
          <Route path = "about" element = {< About />}/>
          <Route path = "menu" element = {< Menu />}/>
          <Route path = "checkout" element = {< Checkout />}/>
          <Route path = "contact" element = {< Contact />}/>
          <Route path = "*" element = {< Errors />}/>
        </Route>
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
