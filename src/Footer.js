import React from 'react'
import './Footer.css'
import wave_top from './imgs/wave_top.png';
import logo from './imgs/Group.svg'

function Footer() {
    return (
        <div className="footer">
            <img src={wave_top} alt="" />
            <div className="footer_question">
                <div>
                    <h1>Need to test COVID-19?</h1>
                    <p>Just make an appointment then we'll come to you to collect your samples</p>
                </div>
                <div className="btn">
                    <p>Get Appointment</p>
                </div>
            </div>
            <div className="footer_menu">
                <div className="menu_logo">
                <img src={ logo } alt="logo" />
                <p className="header_logo">covid-19</p>
                </div>
                <div className="menu_list">
                    <p>Symptoms</p>
                    <p>Treatment</p>
                    <p>Doctor</p>
                    <p>Blog</p>
                </div>
            </div>
            <div className="copyright">
                &copy;copyright 2020 Covid-19. All rights reserved
            </div>
        </div>
    )
}

export default Footer
