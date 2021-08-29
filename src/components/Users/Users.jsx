import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {

    const getUsersFromAPI = props.users.map(u => {
        return <div key={u.closed_beta_date}>{u.name}</div>
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
            {getUsersFromAPI}
        </div>
    )
}

export default Users;