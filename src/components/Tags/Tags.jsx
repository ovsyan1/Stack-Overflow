import React from 'react';
import classes from './Tags.module.css';

const Tags = (props) => {
    const getTagsInfo = props.tagsInfo.map(tag => {
        return (
            <div className={classes.tag_wrapper}>
                <div className={classes.tag_name}>{tag.tagName}</div>
                <p className={classes.txt}>{tag.text}</p>
                <div className={classes.statistic_wrapper}>
                <div className={classes.total_number}>{tag.totalNumberQuestion} questions</div>
                <div className={classes.total_number}>{tag.askedToday} asked today</div>
                </div>
            </div>
        )
    })
    return (
        <div className={classes.tags_page_wrapper}>
            <h2>Tags</h2>
            <p>A tag is a keyword or label that 
                categorizes your question with other, similar questions. Using the right tags makes 
                it easier for others to find and answer your question.
            </p>
            <input type="text" placeholder="Filter by tag name" />
            <div className={classes.sort_btn_wrapper}>
                <div>Popular</div>
                <div>Name</div>
                <div>New</div>
            </div>
            <div className={classes.tags_wrapper}>
            {getTagsInfo}
            </div>
        </div>
    ) 
}

export default Tags;