import React from 'react'
import './header.css'
import pictur from '../../assets/img/mainpic.png'

const Header = () => {
    return (
        <div className="estress__header" id="home">
            <div className="estress__header-content">
                <h1 className="gradient__text">
                    Learn how to deal with stress in the most healthy way posible!
                </h1>
                <p>With so many situations going on in the world and the 
                    personal challenges we face, it's normal to feel 
                    stressed, but we're here to help you fight that and
                    learn how to deal with anxiety and stress!
                </p>

                <div className="estress__header-content__input">
                    <button type="button"> Get Started</button>
                </div>

                <div className="estress__header-content__people">
                    <img />
                    <p>Join our community</p>
                </div>
            </div>
            <div className="estress__header-image">
                <img className="estress__header-image" src={pictur} alt="womans"/>
            </div>
        </div>
    )
}

export default Header
