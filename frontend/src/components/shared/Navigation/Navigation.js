import React from 'react';
import style from './Navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight:'normal',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center'
    }

    const logoText = {
        marginLeft: '10px'
    }
    return (
        <nav className={`${style.navbar} container`}>
            <Link to="/" style={brandStyle}>
                <img src="/images/logo.png" alt="logo"/>
                <span style={logoText}>Codershouse</span>
            </Link>
        </nav>
    )
}

export default Navigation
