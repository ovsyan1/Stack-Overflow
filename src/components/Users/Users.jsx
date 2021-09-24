import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / 5)
    let pages = [];
    for(let i = 1; i <= pagesCount;i++){
        pages.push(i);
    }
    return (
        <div className={classes.users_wrapper}>
            <h3>Users</h3>
            <input type="text" placeholder="Search..." />
            <div className={classes.tag_wrapper}>
                <div onClick={() => props.sortUsersByReputation()}>Reputation</div>
                <div onClick={() => props.sortUsersByName()}>Sort users by name</div>
                <div onClick={() => props.sortUsersByCreation()}>By creation date</div>
            </div>
            <div>
                {pages.map((page, i) => {
                    return (
                        <span 
                            className={props.currentPage === page ? classes.selectedPage : classes.pages} 
                            key={i} 
                            onClick={(e) => props.onPageChanged(page)}>
                            {page}
                        </span>
                    )
                })}
            </div>
            <div className={classes.user_box}>
            {
            props?.users?.map(u => (
                <NavLink to={'/profile/' + u.account_id} key={u.account_id}>
                    <div className={classes.user_wrapper}>
                        <div>
                            <img src={u.profile_image} alt={u.profile_image} />
                        </div>
                        <p>{u.display_name}</p>
                        <p>Reputation:{u.reputation}</p>
                        <p>{u.location}</p>
                    </div>
                </NavLink>
            ))
            }
            </div>
        </div>
    )
}

export default Users;