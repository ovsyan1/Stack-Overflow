import React  from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {getUsers, sortUsersByName, sortUsersByReputation, sortUsersByCreation} from '../../redux/users_reducer';


class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.getUsers();
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }    
    render(){
        return (
            <>
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                onPageChanged={this.onPageChanged}
                sortUsersByName={this.props.sortUsersByName}
                sortUsersByReputation={this.props.sortUsersByReputation}
                sortUsersByCreation={this.props.sortUsersByCreation}
                // currentPage={this.props.currentPage}
                test={this.test}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        // currentPage: state.usersPage.currentPage,
    }
}

export default connect(
    mapStateToProps, 
    {
        getUsers, 
        sortUsersByName, 
        sortUsersByReputation,
        sortUsersByCreation
    })(UsersContainer)
