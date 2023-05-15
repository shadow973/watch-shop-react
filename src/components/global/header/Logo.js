import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function Logo () {
    return (
        <div className="logo">
            <NavLink to="/#app">
                <span className="icon-sw-logo"></span>
                <span className="logo-text">React Watches</span>
            </NavLink>
        </div>
    )
}

