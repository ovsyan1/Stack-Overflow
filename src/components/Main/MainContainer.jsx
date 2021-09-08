import React from 'react';
import Main from './Main';
import {connect} from 'react-redux';
import { getAllQuestions, sortYoungerQuestions, sortOldQuestions } from '../../redux/questions_reducer';

class MainContainer extends React.Component {
    componentDidMount() {
        this.props.getAllQuestions();
    }
    getDate = (date) => {
        let seconds = new Date(date * 1000);
        let myDate = {
            hour: seconds.getHours(),
            minute: seconds.getMinutes(),
            day: seconds.getDate(),
            month: seconds.getMonth() + 1,
            year: seconds.getFullYear()
        }
    
        function zero(a){ 
            return String(a).length === 1 ? '0' + a : a
        }
    
        return myDate.hour + ':' + myDate.minute + ' ' + zero(myDate.day) + '.' + zero(myDate.month) + '.' + myDate.year;
    }
    render() {
      return <Main questions={this.props.questions} 
                getDate={this.getDate}
                sortYoungerQuestions={this.props.sortYoungerQuestions}
                sortOldQuestions={this.props.sortOldQuestions}
                />
    }
}

let mapStateToProps = (state) => {
    return {
        questions: state.mainPage.questions
    }
}

export default connect(mapStateToProps, {getAllQuestions, sortYoungerQuestions, sortOldQuestions})(MainContainer);