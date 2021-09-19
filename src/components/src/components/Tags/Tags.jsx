import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Tags.module.css';

const Tags = (props) => {
    return (
        <div className={classes.tags_page_wrapper}>
            <h2>Tags</h2>
            <p>A tag is a keyword or label that 
                categorizes your question with other, similar questions.<br/> Using the right tags makes 
                it easier for others to find and answer your question.
            </p>
            <input type="text" placeholder="Filter by tag name" />
            <div className={classes.sort_btn_wrapper}>
                <div onClick={() => props.getAllTags()}>Popular</div>
                <div onClick={() => props.sortByName()}>Name</div>
                <div onClick={() => props.sortByActivity()}>Activity</div>
            </div>
            <div className={classes.tags_wrapper}>
                {props.tags?.data?.items.map((tag, i) => {
                   return <div key={i} className={classes.tag_page_wrapper}>
                       <NavLink to={'/tags/' + tag.name}>
                       <div className={classes.name}>{tag.name}</div>
                       </NavLink>
                       <div className={classes.count}>{tag.count}</div>
                       <div className={classes.count}>questions</div>
                       </div>
                })}
            </div>
        </div>
    ) 
}

export default Tags;