import React from 'react';
// import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../common/Preloader';
import classes from './Profile.module.css';

const Profile = (props) => {
    if(!props.profile){
        return <Preloader />
    }
       return(
        <div className={classes.profile_wrapper}>
            {/* <img src='https://www.dallalii.com/img/admin/avatar5.png' alt="profile photo"/> */}
            <img src={props.profile.data.items[0].profile_image} alt="profile photo" />
            <h2>{props.profile.data.items[0].display_name}</h2>
            <div>{props.profile.data.items[0].is_employee ? 'Have work' : 'Looking for work'}</div>
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
