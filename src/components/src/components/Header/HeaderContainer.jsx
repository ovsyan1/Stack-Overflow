import React from 'react';
import Header from './Header';
import {connect} from 'react-redux'
import {getAuthUserData} from '../../redux/auth_reducer';

class HeaderContainer extends React.Component {
    // componentDidMount(){
    //     this.props.getAuthUserData();
    // }
    render(){
       return <Header />
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);