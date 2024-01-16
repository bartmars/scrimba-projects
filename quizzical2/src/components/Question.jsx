import { useState } from "react"
import { nanoid } from "nanoid"

export default function Question(props) {
    const renderAnswers = props.answers.map(item => {
        return (
            <div key={nanoid()}>
                <input
                    type="radio"
                    className="radio-input"
                    key={nanoid()}
                    id={item}
                    name={props.answers}
                    value={item}
                    onChange={event => props.handleChange(event)}
                    disabled={props.isGameActive}
                />
                <label 
                    className="radio-label"
                    key={nanoid()} 
                    htmlFor={item}
                >{item}</label>
            </div>        

        )
    })

    return (
        <div className="question">
            <h2>{props.question}</h2>
            <fieldset className="answers">
                {renderAnswers}
            </fieldset>
        </div>
    )
}