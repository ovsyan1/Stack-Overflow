import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/main' activeClassName={classes.active}>Main page</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}>Users page</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/tags' activeClassName={classes.active}>Tags page</NavLink>
            </div>
        </div>
    )
}

export default Navbar;