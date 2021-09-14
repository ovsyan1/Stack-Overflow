import React from 'react';
import Question from './Question';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { getQuestionId } from '../../redux/oneQuestion_reducer';
import { getAnswersForQuestion } from '../../redux/answers_reducer';
import { withRouter } from 'react-router';
import Preloader from '../common/Preloader';

class QuestionContainer extends React.Component {
    
    refreshQuestion(){
        let questionId = this.props.match.params.questionId;
        this.props.getQuestionId(questionId);
        this.props.getAnswersForQuestion(questionId)
    }
    componentDidMount() {
        this.refreshQuestion();
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.questionId !== prevProps.match.params.questionId){
            this.refreshQuestion();
        }
    }
    render() {
        if(!this.props.question){
            return <Preloader />
        }
        return(
            <>
            <Question question={this.props.question} answers={this.props.answers}/>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    question: state.oneQuestion.question,
    answers: state.answersPage.answers
})

export default compose(connect(mapStateToProps, {getQuestionId, getAnswersForQuestion}), withRouter)(QuestionContainer);