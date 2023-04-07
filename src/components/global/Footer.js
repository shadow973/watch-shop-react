import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="footer-wrapper">
                    <div className="footer-column footer-info">
                        <ul className="footer-info-list">
                            <li className="footer-info-item"><NavLink to="/aboutus#app">About us</NavLink></li>
                            <li className="footer-info-item"><NavLink to="/terms#terms">Terms & Conditions</NavLink></li>
                            <li className="footer-info-item"><NavLink to="/terms#shipping">Shipping</NavLink></li>
                            <li className="footer-info-item"><NavLink to="/terms#returns">Returns</NavLink></li>
                            <li className="footer-info-item"><NavLink to="/terms#warranty">Warranty</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-column footer-social">
                        <span className="footer-social-contact">Contact</span>
                        <div className="footer-social-icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://facebook.com"><i className="fab fa-facebook-square"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com"><i className="fab fa-twitter-square"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;