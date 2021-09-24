import React from 'react';
import Header from './Header';
import {connect} from 'react-redux'
import {search} from '../../redux/search_reducer';

class HeaderContainer extends React.Component {
    componentDidUpdate(){
        let value = this.props.currentValue
        this.props.search(value);
    }
    render(){
       return <Header />
    }
}

const mapStateToProps = (state) => ({
    currentValue: state.searchPage.word
})

export default connect(mapStateToProps, {search})(HeaderContainer);