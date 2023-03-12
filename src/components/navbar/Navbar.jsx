import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/img/logo.svg';
import './navbar.css'

const Menu = () => (
<>
    <p><a href="#">Home </a></p>
    <p><a href="#StudiesNews">Studies </a></p>
    <p><a href="#HealthFeatures">Health </a></p>
    <p><a href="#CTA">Extras </a></p>
    <p><a href="#blog">Blog </a></p>
</>
)


const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="estress__navbar">
            <div className="estress__navbar-links">
                <div className="estress__navbar-links-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="estress__navbar-links_container">
                    <Menu />
                </div>
                </div>
                <div className="estress__navbar-sign">
                    <p>Sign in</p>
                    <button>Log in</button>
                </div>
                <div className="estress__navbar-menu">
                    {toggleMenu
                        ? 
                        <RiCloseLine color="#aad564" size={27} 
                        onClick={() => setToggleMenu(false)}/>
                        : <RiMenu3Line color="#aad564" size={27} 
                        onClick={() => setToggleMenu(true)}/>
                    }
                    {toggleMenu && 
                        (<div className="estress__navbar-menu_container scale-up-top">
                            <div className="estress__navbar-menu_container-links">
                                <Menu />
                                <div className="estress__navbar-menu_container-links-sign">
                                    <p>Sign in</p>
                                    <button>Log in</button>
                                </div>
                            </div>
                        </div>)
                    }
            </div>
        </div>
    )
}

export default Navbar
