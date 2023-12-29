import React from "react"

export default function Question(props) {
    // console.log('Question:', props.answers)

    const answers = props.answers.map(item => {
        return (
            <>
                <input
                    key={props.id} 
                    type="radio"
                    id={item.id}
                    name={item.id}
                    value={item.answers}
                />
                <label htmlFor={item.id} className="item">{item.answer}</label>   
            </>         
        )
    })

    return (
        <div className="question">
            <h3 className="question-setup">{props.question}</h3>
            <fieldset>
                {answers}
            </fieldset>
        </div>
    )
}