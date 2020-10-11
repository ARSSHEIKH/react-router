import React from 'react';
import { NavLink} from 'react-router-dom'
import './header.css'
const Header = () => {
    return (
        <div>
            <ul className="ulHeaderLinks row">
            
                    <li><NavLink to="/"><img src="" alt="" /></NavLink></li>
                    <li><NavLink exact activeClassName="header-active-Link" className="" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="header-active-Link" className="" to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="header-active-Link" className="" to="/contact">Contact</NavLink></li>
                    <li><NavLink activeClassName="header-active-Link" className="" id="lnkLogin" to="/login">Login</NavLink></li>
                    <li><NavLink activeClassName="header-active-Link" className="" id="lnkSignup" to="/signup">Sign Up</NavLink></li>

            </ul>
        </div>
        // {/* <Router>
        // <ul>
        //     <li> <NavLink exact activeClassName="header-active-Link"className="header-Link" to="/"><Home/></NavLink></li>
        //     <li> <NavLink activeClassName="header-active-Link" className="header-Link" to="/about"><About/></NavLink></li>
        //     {/* // <li> <NavLink activeClassName="header-active-Link" className="header-Link" to="/contact"><Contact/></NavLink></li>
        //     // <li> <NavLink activeClassName="header-active-Link" className="header-Link" to="/contact"><SignUpForm/></NavLink></li> */}

        // // </ul>
        // </Router> */}

    )
}

export default Header