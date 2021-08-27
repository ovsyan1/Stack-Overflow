import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return(
        <header className={classes.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'></img>
            <input type="text" placeholder="Search..." />
            <img className={classes.avatar} src="https://image.pngaaa.com/93/4052093-middle.png" alt="avatar" />
            <span>Login</span>
        </header>
    )
}

export default Header;