import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
    const infoAboutUsers = props.owners.map(u => {
        return (
        <div className={classes.users_box_wrapper}>
            <img src={u.img} alt="avatar"/>
            <div>
            <div>{u.name}</div>
            <div>{u.location}</div>
            <div>{u.reputation}</div>
            <div>{u.favoriteTags}</div>
            </div>
        </div>
        
        )
    })

    return (
        <div className={classes.users_wrapper}>
            <h3>Users</h3>
            <input type="text" placeholder="Search..." />
            <div className={classes.tag_wrapper}>
                <div>Reputation</div>
                <div>New users</div>
                <div>Voters</div>
                <div>Editors</div>
                <div>Moderators</div>
            </div>
            {infoAboutUsers}
        </div>
    )
}

export default Users;