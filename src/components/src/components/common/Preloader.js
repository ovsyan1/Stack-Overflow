import React from 'react';
import rocket from '../../assets/images/Rocket.gif';
import classes from './Preloader.module.css';

const Preloader = () => {
    return (
        <div>
            <img src={rocket} alt='preloader' className={classes.preloader}/>
        </div>
    )
}

export default Preloader;