import React from 'react';
import classes from './Question.module.css';

const Questions = (props) => {
    let item = props.question?.data?.items[0];
    return (
        <div className={classes.questions_wrapper}>
            <h2>{item?.title}</h2>
            <div>views: {item?.view_count}</div>
            <div className={classes.tags_info_wrapper}>{item?.tags.map(tag => <div key={tag}>{tag}</div>)}</div>
            <div className={item?.is_answered ? classes.green : classes.red}>{item?.answer_count} answers</div>
            <div>{props.getDate(item?.creation_date)}</div>
            <div>{item?.owner.display_name}</div>
            <div>{item?.owner.reputation} reputation</div>
            <div><img src={item?.owner.profile_image} alt="profile image"/></div>
            <h3>{props.answers?.data?.items.length > 0 
                ? `${props.answers?.data?.items.length} Answers` 
                : `Please write your Answer`}</h3>
            <div>
                {props.answers?.data?.items.map(answer => {
                    return <div>{answer.body.replace(/\s+/, '')}</div>
                })}
            </div>
        </div>
    )
}

export default Questions;