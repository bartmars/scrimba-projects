import React from "react"
import { nanoid } from 'nanoid'


export default function Question(props) {
    const answers = props.answers.map(item => {
        const styles = {
            backgroundColor: props.selectedAnswer ? "#D6DBF5" : "transparent"
        }
        return (
            <>
                <label key={nanoid()} htmlFor={item.id} className="answer" style={styles}>
                    {item.answer}
                    <input
                        key={item.id}
                        type="radio"
                        id={item.id}
                        name={props.answers}
                        value={item.answer}
                        checked={props.selectedAnswer === item.answer}
                        onChange={event => props.handleChange(event, props.id)}
                    />
                </label>
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