/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { nanoid } from 'nanoid'

export default function Question(props) {
    const answers = props.answers.map(item => {
        const styles = {
            backgroundColor: 
                item.isSelected && item.isCorrect ? "#94D7A2" : /* correct answer */
                item.isSelected && !item.isCorrect ? "#F8BCBC" : /* wrong answer */
                item.isSelected ? "#D6DBF5" : "" /* selected answer */
        }



        return (
            <>
                <label key={nanoid()} htmlFor={item.id} className="answer" style={styles}>
                    {item.answer}
                    <input
                        key={nanoid()}
                        type="radio"
                        id={item.id}
                        name={props.id}
                        value={item.answer}
                        onClick={event => props.handleClick(event, props.id)}
                        // checked={props.answers}
                        // onChange={event => props.handleChange(event, item.id)}
                        // onClick={event => props.checkAnswer(event)}
                    />
                </label>
            </>
        )
    })

    return (
        <div className="question">
            <h3 className="question-setup">{props.question}</h3>
            <fieldset key={nanoid()} className="answers">
                {answers}
            </fieldset>
        </div>
    )
}