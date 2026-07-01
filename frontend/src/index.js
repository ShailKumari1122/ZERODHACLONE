import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingPage/home/HomePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from './landingPage/signup/Signup';
import AboutPage from './landingPage/about/AboutPage';
import ProductPage from './landingPage/product/ProductPage';
import PricingPage from './landingPage/pricing/PricingPage';
import SupportPage from './landingPage/support/SupportPage';

import Navbar from './/Navbar'
import Footer from './/Footer'
import NotFound from './NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>}/>

    </Routes>
    <Footer/>
  </BrowserRouter>
  
);


