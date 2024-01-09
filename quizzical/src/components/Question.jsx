import React from "react"
import { nanoid } from "nanoid"
// import "../index.css"

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
                element when wrapping input inside the label 
            */
            <label key={nanoid()} className="answer" style={styles}>
                <input
                    name={props.id}
                    value={item.answer}
                    onChange={(event) => props.handleChange(event)}
                    checked={item.id === event.target.value}
                    disabled={props.hasGameEnded}
                    className="answer"
                    type="radio"
                />
                {item.answer}
            </label>
        )
    })

    return (
        <div className="question">
            <h3>{props.question}</h3>
            <fieldset key={nanoid()} className="answers">
                {answers}
            </fieldset>
        </div>
    )
}