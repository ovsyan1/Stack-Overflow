import React from 'react';
import classes from './Main.module.css';

const Main = (props) => {
    console.log(props.owners)
    const userName = props.owners.map(item => {
        return <div key={item.key}>{item.name} - {item.reputation} - {item.date}</div>
    })
    return (
        <div className={classes.main_wrapper}>
            <h2>Top Questions</h2>
            <div className={classes.tag_wrapper}>
                <div>Interesting</div>
                <div>Bountied</div>
                <div>Hot</div>
                <div>Week</div>
                <div>Month</div>
            </div>
            <hr></hr>
            <div>
            {userName}
            </div>
        </div>
    )
}

export default Main;