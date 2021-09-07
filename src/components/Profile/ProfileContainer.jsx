import React from 'react';
import Profile from './Profile';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserProfile } from '../../redux/profile_reducer';


class  ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
    }
    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
    )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose(
    connect
    (mapStateToProps, {getUserProfile}), 
    withRouter
)(ProfileContainer);