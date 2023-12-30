import React from "react"
import { nanoid } from 'nanoid'

export default function Question(props) {
    /*
        Returns Question components which uses a random ID to select one of the radio buttons generated.
        Random ID needs to be the same for the htmlFor property to avoid multiple selections.
    */
    const answers = props.answers.map(item => {
        const answerId = nanoid()
        return (
            <>
                <input
                    key={nanoid()}
                    type="radio"
                    id={answerId}
                    name={props.answers}
                    value={item}
                />
                <label htmlFor={answerId} className="answer">{item}</label>
            </>
        )
    })

    return (
        <div className="question">
            <h3 className="question-setup">{props.question}</h3>
            <fieldset className="answers">
                {answers}
            </fieldset>
        </div>
    )
}