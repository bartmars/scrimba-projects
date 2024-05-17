import React from "react"
import { nanoid } from "nanoid"

export default function Question(props) {
    const answers = props.answers.map(item => {
        const styles = {
            backgroundColor:
                /* correct answer */
                props.hasGameEnded && item.isSelected && item.isCorrect ? "#94D7A2" :
                /* wrong answer */
                props.hasGameEnded && item.isSelected && !item.isCorrect ? "#F8BCBC" : 
                /* selected answer */
                item.isSelected ? "#D6DBF5" : "", 
            border:
                props.hasGameEnded && item.isSelected && item.isCorrect ? "none" :
                props.hasGameEnded && item.isSelected && !item.isCorrect ? "none" :
                props.hasGameEnded ? "#4D5B9E 1px solid" : ""
        }

        return (
            /* 
                Don't use id attribute in input element and htmlFor attribute in label 
                element when wrapping input element, inside the label element
            */
            <label key={nanoid()} className="answer" style={styles}>
                <input
                    name={props.id}
                    value={item.answer}
                    onChange={(event) => props.handleChange(event, props.id)}
                    // onChange={(event) => console.log(item.id)}
                    checked={props.id === item.answer}
                    disabled={props.hasGameEnded}
                    type="radio"
                />
                {item.answer}
            </label>
        )
    })

    return (
        <div className="question">
            <h2>{props.question}</h2>
            <fieldset key={nanoid()} className="answers">
                {answers}
            </fieldset>
        </div>
    )
}