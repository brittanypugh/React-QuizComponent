import React, { Component } from 'react';

let quizData = require('./quiz_data.json');

const Quiz extends React.Component { //Quiz component class version
    constructor(props){
        super(props);
        this.state = {
            quiz_position: 1
        }
    }
    render() {
        return (
        <div><div className="QuizQuestion"></div></div>
        );
}

// function Quiz(){ //Quiz component function version
//     return (<div>la la la</div>);

export default Quiz;