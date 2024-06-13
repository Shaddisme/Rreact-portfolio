import React from 'react';
import './Footer.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
    return (
        <div className="footer">
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Shadrack Mwangi Gathuru. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Terms of services</p>
                    <p>Privacy policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
