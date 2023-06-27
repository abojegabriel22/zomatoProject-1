import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <>
            <header>
                <div className="brand">
                    developer funnel &nbsp;&nbsp;
                    <Link className='btn btn-info' to='/'>Home</Link>
                </div>
                <div className="social">
                    <a href="#">
                        <img src="https://i.ibb.co/YQpNwSZ/facebook.png" alt="facebook img" className="socialLogo"/>
                    </a>
                    <a href="#">
                        <img src="https://i.ibb.co/VHSf51F/instagram.png" alt="inst image" className="socialLogo"/>
                    </a>
                    <a href="#">
                        <img src="https://i.ibb.co/f8v7PyW/youtube.png" alt="youtube img" className="socialLogo"/>
                    </a>
                </div>
    </header>
        </>
    )
}
export default Header;