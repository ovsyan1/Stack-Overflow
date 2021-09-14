import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/images/logo_stackoverflow.png';

const Header = () => {
    return(
        <header className={classes.header}>
            <img src={logo} alt='logo' className={classes.logo}></img>
            <input type="text" placeholder="Search..." />
            <img className={classes.avatar} src="https://image.pngaaa.com/93/4052093-middle.png" alt="avatar" />
            <span>Login</span>
        </header>
    )
}

export default Header;