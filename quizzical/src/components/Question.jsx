import React from "react"
import { nanoid } from 'nanoid'

export default function Question(props) {   
    const answers = props.answers.map(item => {
        
        const styles = {
            backgroundColor: 
                props.hasGameEnded && item.isSelected && item.isCorrect ? "#94D7A2" : /* correct answer */
                props.hasGameEnded && item.isSelected && !item.isCorrect ? "#F8BCBC" : /* wrong answer */
                item.isSelected ? "#D6DBF5" : "", /* selected answer */
            border:
                props.hasGameEnded && item.isSelected && item.isCorrect ? "none" : 
                props.hasGameEnded && item.isSelected && !item.isCorrect ? "none" : 
                props.hasGameEnded ? "#4D5B9E 1px solid" : ""            
        }
    
        return (
            <label key={nanoid()} htmlFor={item.id} className="answer" style={styles}>
                {item.answer}
                <input
                    type="radio"
                    id={props.id}
                    name={item.id}
                    value={item.answer}
                    onChange={(event) => props.handleChange(event)}
                    checked={item.id === event.target.value}
                    disabled={props.hasGameEnded}
                />
            </label>
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