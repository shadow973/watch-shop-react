import React from 'react';

import Logo from './header/Logo';
import Navigation from './header/Navigation';
import Basket from './header/Basket';

const Header = () =>  {
    return (
        <header>
            <div className="header-wrapper">
                <Logo />

                <div className="menu">
                    <Navigation />
                    <Basket />
                </div>
            </div>
        </header>
    )
}

export default Header;