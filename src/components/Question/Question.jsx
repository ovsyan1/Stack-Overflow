import React from 'react';
import classes from './Question.module.css';

const Questions = (props) => {
    let item = props.question?.data?.items[0];
    return (
        <div className={classes.questions_wrapper}>
            <h2>{item?.title}</h2>
            <div>views {item?.view_count}</div>
        </div>
    )
}

export default Questions;