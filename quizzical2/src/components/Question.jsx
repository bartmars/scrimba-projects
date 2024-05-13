/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { nanoid } from 'nanoid'
import className from 'classnames'

export default function Question(props) {
    const { 
        id, 
        question, 
        answers, 
        selectedAnswer,
        correctAnswer,
        handleChange,
        disabled
    } = props

    const renderAnswers = answers.map(answer => {
        let allClasses = className('answer')

        const isSelected = selectedAnswer === answer
        const isCorrect = selectedAnswer === correctAnswer

        if (!disabled && isSelected && isCorrect) {
            allClasses = className('answer', 'correct-answer')
        }
        // else if (!disabled && correctAnswer) {
        //     allClasses = className('answer', 'correct-answer')
        // }
        else if (!disabled && isSelected && !isCorrect) {
            allClasses = className('answer', 'wrong-answer')
        }
        else if (disabled && isSelected) {
            allClasses = className('answer', 'selected-answer')
        }
        else {
            allClasses = className('answer')
        }

        return (
            <label key={nanoid()} className={allClasses}>
                <input
                    type="radio"
                    value={answer}
                    name={id}
                    onChange={event => handleChange(event)}
                    checked={selectedAnswer === answer}
                    disabled={!disabled}
                />{answer}
            </label>
        )
    })

    return (
        <>
            <h2>{question}</h2>
            {renderAnswers}
        </>
    )
}