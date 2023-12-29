import React from "react"

import Question from "./Question"

export default function Game(props) {

    console.log('Game:', props.questions)

    const renderQuestions = props.questions.map(item => {
        return (
            <Question 
                key={item.id}
                id={item.id} 
                question={item.question} 
                answers={item.answers} 
                correctAnswer={item.correctAnswer} 
            />
        )
    })

    return (
        <div className="content">
            <div className="container">
                <form>
                    {renderQuestions}
                </form>
            </div>
        </div>
    )
}