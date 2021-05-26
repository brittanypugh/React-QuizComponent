import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component { //Quiz component class version
    constructor(props){
        super(props);
        this.state = {
            quiz_position: 1
        }
    }
    render() {
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length);
        // const isQuizEnd = true;
        console.log("Are we at the end of the quiz? " + isQuizEnd);
        
        return (
        <div>
            {isQuizEnd ? <QuizEnd /> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} />}
        </div>
        )
    }
}

// function Quiz(){ //Quiz component function version
//     return (<div>la la la</div>);

export default Quiz;