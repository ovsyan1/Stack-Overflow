import React from 'react';
import classes from './Footer.module.css'
import logo from '../../assets/images/logo_stackoverflow.png';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className={classes.wrapper}>
            <div>
            <img src={logo} alt="footer-logo" className={classes.logo}/>
            </div>
            <div className={classes.links_wrapper}>
                <NavLink style={{textDecoration: 'none'}} to={'/users'}>
                    <p>Users</p>
                </NavLink>
                <NavLink style={{textDecoration: 'none'}} to={'/tags'}>
                    <p>Tags</p>
                </NavLink>
                <NavLink style={{textDecoration: 'none', textAlign:'center'}} to={'/main'}>
                    <p>Questions</p>
                </NavLink>
            </div>
            <div>
                <p>Copyright © 2021 Kyrylo Ovsiannik</p>
            </div>
        </div>
    )
}

export default Footer;