import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <>
                <footer>
        <p className="footText">&copy; Developer Funnel 2023</p>
        <hr/>
        <div className="footDiv">
            <ul>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footDiv">
            <ul>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
        
        <div className="footDiv noBorder">
            <ul>
                
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
    </footer>
        </>
    )
}
export default Footer;