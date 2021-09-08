import React from 'react';
import classes from './Main.module.css';

const Main = (props) => {
        return (
        <div className={classes.main_wrapper}>
            <h2>Top Questions</h2>
            <div className={classes.sort_wrapper}>
                <div onClick={() => props.sortYoungerQuestions()}> New Questions</div>
                <div onClick={() => props.sortOldQuestions()}>Old Questions</div>
                <div>Hot</div>
                <div>Week</div>
                <div>Month</div>
            </div>
            <hr></hr>
        <div>
            {props?.questions?.data?.items?.map((item, i) => {
                return (
                <div>
                    <h3 key={i + 2}>{item.title}</h3>
                    {item.tags.map((tag, i) => {
                        return (
                            <span className={classes.tag_wrapper}>{tag}</span>
                        )
                    })}
                    <div className={classes.info_wrapper}>
                    <span>{item.owner.display_name}</span>
                    <span>reputation: {item.owner.reputation || 1}</span>
                    <span>{props.getDate(item.creation_date)}</span>
                    </div>
                </div>
                )
            })}
        </div>
        </div>
    )
}

export default Main;