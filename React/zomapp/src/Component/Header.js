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
                    <Link to='/register' className='btn btn-primary'>
                        <span className='glyphicon glyphicon-user'></span>Sign Up
                    </Link>&nbsp;
                    <Link to='/login' className='btn btn-success'>
                        <span className='glyphicon glyphicon-log-in'></span>Sign In
                    </Link>
                </div>
            </header>
        </>
    )
}
export default Header;