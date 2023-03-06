import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/img/logo.svg';
import './navbar.css'

const Menu = () => (
<>
    <p><a href="#home">Home </a></p>
    <p><a href="#home">Studies </a></p>
    <p><a href="#home">Health </a></p>
    <p><a href="#home">Effects </a></p>
    <p><a href="#blog">Blog </a></p>
</>
)


const Navbar = () => {
const [toggle, setToggle] = useState(false);

    return (
        <div className="estress__navbar">
            <div className="estress__navbar-links">
                <div className="estress__navbar-links-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="estress__navbar-links_container">
                    <Menu />
                </div>
                <div className="estress__navbar-sign">
                    <p>Sign in</p>
                    <button>Log in</button>
                </div>
                <div className="estress__navbar-menu">
                {toggle 
                    ? 
                    <RiCloseLine color="#fff" size={27} 
                    onClick={() => setToggle(false)}/>
                    : <RiMenu3Line color="#fff" size={27} 
                    onClick={() => setToggle(true)}/>
                }
                {toggle && 
                    (<div className="estress__navbar-menu_container scale-up-top">
                        <div className="estress__navbar-menu_container-links">
                        <Menu />
                        <div className="estress__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button>Log in</button>
                        </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
