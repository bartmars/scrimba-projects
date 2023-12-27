// eslint-disable-next-line no-unused-vars
import React from "react"

// {
//     "type": "multiple",
//     "difficulty": "hard",
//     "category": "General Knowledge",
//     "question": "If you planted the seeds of Quercus robur, what would grow?",
//     "correct_answer": "Trees",
//     "incorrect_answers": [
//         "Grains",
//         "Vegetables",
//         "Flowers"
//     ]
// }

{/* <input 
type="radio"
id=${question.id} // matches to label
name="question-4" // needs to be same across all possible answers
value="Italy" // get saved
/>
<label htmlFor={question.id} className="answer">{question.}</label>` */}

export default function Game(props) {
    return (
        <div className="content">
            <div className="container">
                <form>
                    <div className="question">
                        <h3 className="question-setup">{props.questionSetup.question}</h3>
                        <fieldset>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    )
}