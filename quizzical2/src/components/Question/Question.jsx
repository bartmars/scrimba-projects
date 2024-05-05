/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react' 
import { nanoid } from 'nanoid'

const QuestionContext = React.createContext()

export default function Question({ children, question, answers, correctAnswer }) {    
    return (
        <QuestionContext.Provider value={{ question, answers, correctAnswer }}>
            <Question.Text>{question}</Question.Text>
            <Question.Answer>{children}</Question.Answer>
        </QuestionContext.Provider>
    )
}

export { QuestionContext }