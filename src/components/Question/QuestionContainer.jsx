import React from 'react';
import Question from './Question';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { getQuestionId } from '../../redux/oneQuestion_reducer';
import { withRouter } from 'react-router';

class QuestionContainer extends React.Component {
    componentDidMount() {
        let questionId = this.props.match.params.questionId;
        this.props.getQuestionId(questionId)
    }
    render() {
        return(
            <>
            <Question question={this.props.question}/>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    question: state.oneQuestion.question
})

export default compose(connect(mapStateToProps, {getQuestionId}), withRouter)(QuestionContainer);