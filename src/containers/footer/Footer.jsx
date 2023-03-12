import React from 'react'
import logo from '../../assets/img/logo.svg'
import './footer.css'

const Footer = () => {
    return (
        <div className="estress__footer section__padding">

            <div className="estress__footer-links">
                <div className="estress__footer-links_logo">
                    <p> Copyright All Rights Reserved</p>
                    <img src={logo} alt="logo "/>
                </div>
                <div className="estress__footer-links_div">
                    <h4>Links</h4>
                    <p>Studies</p>
                    <p>Health</p>
                    <p>Extras</p>
                    <p>Blog</p>
                </div>
                <div className="estress__footer-links_div">
                    <h4>About us</h4>
                    <p>Experience</p>
                    <p>Privacy Policies</p>
                    <p>Contact</p>
                </div>
                <div className="estress__footer-links_div">
                    <h4>More info</h4>
                    <p>Sign in</p>
                    <p>Log in</p>
                </div>
            </div>

            <div className="estress__footer-copyright">
                <p>Copyright ©2023 All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
