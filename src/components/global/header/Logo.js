import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Logo = () =>  {
    return (
        <div className="logo">
            <NavLink to="/#app">
                <span className="icon-sw-logo"></span>
                <span className="logo-text">React Watches</span>
            </NavLink>
        </div>
    )
}

export default Logo;