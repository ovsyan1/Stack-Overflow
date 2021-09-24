import React from 'react';
import classes from './Question.module.css';
import checkMark from '../../assets/images/CheckMark.svg';
import notCheckMark from '../../assets/images/not_check.svg';

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
            <div><img src={item?.owner.profile_image} alt="profile_image"/></div>
            <h3>{props.answers?.data?.items.length > 0 
                ? `${props.answers?.data?.items.length} Answers` 
                : `Please write your Answer`}</h3>
            <div>
                
                {props.answers?.data?.items.map(answer => {
                    return (
                        <div key={answer.answer_id}>
                            {answer.is_accepted ? <img src={checkMark} className={classes.checkMark} alt="check mark" /> : <img src={notCheckMark} className={classes.checkMark} alt="check mark" />} 
                            <div dangerouslySetInnerHTML={{ __html: answer.body }} />
                        </div>
                        )
                })}
            </div>

        </div>
    )
}

export default Questions;