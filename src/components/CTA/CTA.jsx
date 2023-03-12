import React from 'react'
import './cta.css'

const CTA = () => {
    return (
        <div className="estress__cta" id="CTA">
            <div className="estress__cta-content">
                <p>Be connected</p>
                <h3>Subscribe to our newsletter</h3>
                <div className="estress__cta-content__input">
                    <input type="email" placeholder="enter your email"></input>
                    <button type="button">Get Started</button>
                </div>
            </div>
            <div className="estress__cta-emailbtn">

            </div>
        </div>
    )
}

export default CTA
