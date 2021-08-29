import React  from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {getUsers} from '../../redux/users_reducer';
import { compose } from 'redux';


class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.getUsers();
    }

    render(){
        return (
            <>
            <Users users={this.props.users}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users.items
    }
}

export default connect(mapStateToProps, {getUsers})(UsersContainer)
