import React from 'react';
import classes from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={classes.profile_wrapper}>
            <img src='https://www.dallalii.com/img/admin/avatar5.png' alt="profile photo"/>
            <h2>owners name</h2>
            <div>history of reputation</div>
            <div>posts</div>
            <div>questions</div>
            <div>answers</div>
            <div>comments</div>
            <div>tags</div>
        </div>
    )
}

export default Profile;