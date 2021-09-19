import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Main.module.css';

const Main = (props) => {    
        return (
        <div className={classes.main_wrapper}>
            <h2>Top Questions</h2>
            <div className={classes.sort_wrapper}>
                <div onClick={() => props.sortYoungerQuestions()}>Newest</div>
                <div onClick={() => props.sortOldQuestions()}>Oldest</div>
                <div onClick={() => props.sortHotQuestions()}>Hot</div>
            </div>
            <hr></hr>
        <div>
            {props?.questions?.data?.items?.map((item, i) => {
                return (
                <div>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to={'/question/' + item.question_id}>
                    <h3 key={i + 2}>{item.title}</h3>
                    </NavLink>
                    {item.tags.map((tag, i) => {
                        return (
                            <span className={classes.tag_wrapper} key={i}>{tag}</span>
                        )
                    })}
                    <div className={classes.info_wrapper}>
                    <NavLink to={'/profile/' + item.owner.account_id}>
                        <span>{item.owner.display_name}</span>
                    </NavLink>
                    <span>reputation: {item.owner.reputation || 1}</span>
                    <span>{props.getDate(item.creation_date)}</span>
                    <span>{item.view_count} views</span>
                    <span className={item.is_answered
                        ?  classes.green
                        : classes.red}>{item.answer_count} answers</span>
                    </div>
                </div>
                )
            })}
        </div>
        </div>
    )
}

export default Main;