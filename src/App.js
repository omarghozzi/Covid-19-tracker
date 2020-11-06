import React, { useEffect } from 'react';
import './App.css';
import Cases from './Cases';
import './Header.css';
import Present from './Present';
import logo from './imgs/Group.svg'
import Symptoms from './Symptoms';
import MenuMobile from './MenuMobile';


function App() {

  return (
    <div className="app">
      <div className="top">
        <div className="header">
          <div className="header_left">
            <img src={logo} alt="logo" />
            <p className="header_logo">covid-19</p>
          </div>
          <MenuMobile />
          <div className="header_right">
            <p>Symptoms</p>
            <p>Treatment</p>
            <p>Doctor</p>
            <p>Blog</p>
            <p className="phone">Call: (943)412-1505</p>
          </div>
        </div>
        <Present />
      </div>
      <Cases />
      <Symptoms />
    </div>
  );
}

export default App;
