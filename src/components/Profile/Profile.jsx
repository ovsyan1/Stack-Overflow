import React from 'react';
import classes from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={classes.profile_wrapper}>
            <img src={props.store.owners[0].img} alt="profile photo"/>
            <h2>{props.store.owners[0].name}</h2>
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