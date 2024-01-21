import React, { useState } from "react"
import { nanoid } from "nanoid"


export default function RadioButton(props) {
    const [ answer, setAnswer ] = useState(props.answer)

    function toggleChange(event) {
        const { value } = event.target
        console.log('target value:', value)
        setAnswer(value)
        console.log('answer:', answer)
        console.log('answer:', answer)

        props.handleChange(event)
    }

    return (
        <span key={nanoid()} className="answer">
            <input
                type="radio"
                className="radio-input"
                key={nanoid()}
                id={props.id + props.answer}
                name={"question" + props.id}
                value={props.answer}
                onChange={(event) => toggleChange(event)}
                /* The line below, works! */
                // onChange={props.handleChange}
                checked={answer === props.answer}
                disabled={!props.isGameActive}
            />
            <label 
                className="radio-label"
                key={nanoid()} 
                htmlFor={props.id + props.answer}
            >{props.answer}</label>
        </span>
    )
}