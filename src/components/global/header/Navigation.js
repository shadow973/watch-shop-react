import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Logo = () =>  {
    return (
        <ul className="menu-item nav">
            <li className="nav-item"><NavLink to="/#app">Home</NavLink></li>
            <li className="nav-item">
                <span>Shop</span>
                <ul className="sub-menu">
                    <li className="category-item"><NavLink to="/Vintage#app">Vintage</NavLink></li>
                    <li className="category-item"><NavLink to="/Extant#app">Extant</NavLink></li>
                    <li className="category-item"><NavLink to="/Steampunk#app">Steampunk</NavLink></li>
                    <li className="category-item all"><NavLink to="/allproducts#app">All Products</NavLink></li>
                </ul>
            </li>

            <li className="nav-item"><NavLink to="/aboutus#app">About us</NavLink></li>
            <li className="nav-item"><NavLink to="/contact#app">Contact</NavLink></li>
        </ul>
    )
}

export default Logo;