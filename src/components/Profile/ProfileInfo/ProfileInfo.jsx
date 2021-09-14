import React from 'react';
import classes from '../Profile.module.css';
import Preloader from '../../common/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    console.log(props);
    return (
        <div className={classes.profile_wrapper}>
            <img src='https://www.dallalii.com/img/admin/avatar5.png' alt="profile photo"/>
            {/* <img src={props.profile.data.items[0].profile_image || 'https://www.dallalii.com/img/admin/avatar5.png'} alt="img"/> */}
            {/* <h2>{props.profile.data.items[0].display_name}</h2> */}
            <div>history of reputation</div>
            <div>posts</div>
            <div>questions</div>
            <div>answers</div>
            <div>comments</div>
            <div>tags</div>
        </div>
    )
}
export default ProfileInfo;