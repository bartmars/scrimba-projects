/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { nanoid } from 'nanoid'

import { QuestionContext } from './Question' 

export default function QuestionAnswer({ children }) {
    const [ state, setState ] = React.useState(null)
    const [ isCorrectAnswer, setIsCorrectAnswer ] = React.useState(null)
    const { answers, correctAnswer } = React.useContext(QuestionContext)

    const renderAnswers = answers.map(answer => {
        const handleClick = (event) => {
            if (event.target.value === answer) {
                setState(prevState => !prevState)
            }
        }
          
        return (
            <button 
                key={nanoid()} 
                type="button" 
                onClick={handleClick}
                value={answer}
            >{answer}</button>
        )
    })

    return (
        <h2>{renderAnswers}</h2>
    )
}