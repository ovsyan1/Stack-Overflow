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
            <img src={props.profile?.data?.items[0]?.profile_image || 'https://i.pinimg.com/564x/ff/c2/37/ffc2379c099c0b25bb7e6afaba5748fb.jpg'} alt="profile photo" />
            <div>{props.profile?.data?.items[0]?.display_name}</div>
            <div>reputation: {props.profile?.data?.items[0]?.reputation}</div>
            <div>{props.profile?.data.items[0]?.is_employee ? 'Have work' : 'Looking for work'}</div>
            <div>
                <img src="https://i.pinimg.com/564x/33/ca/7b/33ca7b74a25bfddd73b94f61f5d24beb.jpg" alt="gold medal" className={classes.medals}/>
                {props.profile?.data.items[0]?.badge_counts.gold || 0}
                <div>gold badges</div>
            </div>
            <div>
                <img src="https://i.pinimg.com/564x/dc/1a/21/dc1a213d5a749f2b045220f75c214854.jpg" alt="silver medal" className={classes.medals}/>
                {props.profile?.data?.items[0]?.badge_counts?.silver || 0}
                <div>silver badges</div>
            </div>
            <div>
                <img src="https://i.pinimg.com/564x/c5/1a/ba/c51aba809294cfe792617534e680ea96.jpg" alt="bronze medal" className={classes.medals} />
                {props.profile?.data?.items[0]?.badge_counts?.bronze || 0}
                <div>bronze badges</div>
            </div>
        </div>
    ) 
}

export default Profile;
