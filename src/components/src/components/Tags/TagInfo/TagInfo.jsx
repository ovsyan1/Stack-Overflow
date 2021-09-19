import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { compose } from 'redux';
import {getTagWiki, getTagFAQ} from '../../../redux/tags_reducer';
import { withRouter } from 'react-router';
import classes from './TagInfo.module.css';
import Preloader from '../../common/Preloader';

class TagInfo extends React.Component {
    componentDidMount(){
        let tag = this.props.match.params.tagName;
        this.props.getTagWiki(tag);
        this.props.getTagFAQ(tag);
    }
    render(){
        if(!this.props.tagWiki || ! this.props.tagInfo){
            return <Preloader />
        }
        return (
        <div>
            <h1>Questions tagged [{this.props.tagWiki?.data?.items[0].tag_name}]</h1>
            <div className={classes.wikis_wrapper}>
            {this.props.tagWiki?.data?.items[0].excerpt}
            </div>
            <div className={classes.faq_questions_wrapper}>
                {this.props.tagInfo?.data?.items.map((item, i) => {
                    return (
                        <div>
                            <div key={i}>
                                {item.title}
                            </div>
                            <div className={classes.tags_info_wrapper}>
                                {item.tags.map(tag => {
                                    return <div>{tag}</div>
                                })}
                            </div>
                            <div className={item.is_answered ? classes.green : classes.red}>
                                {item.answer_count} answers
                            </div>
                            <div>
                                <NavLink to={'/profile/' + item.owner.account_id}>
                                <div>
                                    {item.owner.display_name}
                                </div>
                                <div>
                                    <img src={item.owner.profile_image} alt="profile_image"/>
                                </div>
                                </NavLink>
                                <div>
                                    reputation: 
                                    {item.owner.reputation}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
    }
}

let mapStateToProps = (state) => ({
    tagWiki: state.tagsPage.tagWiki,
    tagInfo: state.tagsPage.tagInfo
})

export default compose(connect(mapStateToProps, {getTagWiki, getTagFAQ}), withRouter)(TagInfo);