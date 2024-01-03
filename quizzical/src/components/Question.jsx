import React from "react"
import { nanoid } from 'nanoid'


export default function Question(props) {
    /*
        Returns Question components which uses a random ID to select one of the radio buttons generated.
        Random ID needs to be the same for the htmlFor property to avoid multiple selections.
    */
    const answers = props.answers.map(item => {
        return (
            <>
                <input
                    key={item.id}
                    type="radio"
                    id={item.id}
                    name={props.answers}
                    value={item.answer}
                    checked={item.isSelected === item}
                    onChange={(event) => props.handleChange(event)}
                />
                <label key={nanoid()} htmlFor={item.id} className="answer">{item.answer}</label>
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