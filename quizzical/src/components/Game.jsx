import React from "react"
import { nanoid } from 'nanoid'
import Question from "./Question"

export default function Game(props) {
    const renderQuestions = props.questions.map(item => {
        return (
            <Question 
                key={nanoid()}
                id={nanoid()} 
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