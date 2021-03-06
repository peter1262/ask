import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({randomUser, handleRandom}) => {

    const loginRegex = /(login|register)/
    let leftButton = (
        <div className='left'>
            <Link to="/login" className='my'>내 애스크</Link>
            <a onClick={handleRandom}><i className="material-icons">shuffle</i></a>
        </div>
    )
    let rightButton = (
        <div className='right'>
            <Link to='/' className="loginB">로그인</Link>
        </div>
    )
    if (loginRegex.test(window.location.href)) {
        leftButton = undefined
        rightButton = undefined
    }
    return (
        <div className="header">
            {leftButton}
                <Link to='/' className='logo'>ASKED</Link>
            {rightButton}
        </div>
    );
};

export default Header;