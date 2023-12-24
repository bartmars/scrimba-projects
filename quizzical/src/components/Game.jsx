// eslint-disable-next-line no-unused-vars
import React from "react"

export default function Game() {
    return (
        <div className="content">
            <div className="container">
                <form>
                    <div className="question">
                        <h3 className="question-setup">In which country was the caesar salad invented?</h3>
                        <fieldset>
                            <input 
                                type="radio"
                                id="question-4-1" // matches to label
                                name="question-4" // needs to be same across all possible answers
                                value="Italy" // get saved
                            />
                            <label htmlFor="question-4-1" className="answer answer-wrong">Italy</label>
                            <input 
                                type="radio"
                                id="question-4-2" // matches to label
                                name="question-4" // needs to be same across all possible answers
                                value="Portugal" // get saved
                            />
                            <label htmlFor="question-4-2" className="answer">Portugal</label>
                            <input 
                                type="radio"
                                id="question-4-3" // matches to label
                                name="question-4" // needs to be same across all possible answers
                                value="Mexico" // get saved
                            />
                            <label htmlFor="question-4-3" className="answer answer-correct">Mexico</label>
                            <input 
                                type="radio"
                                id="question-4-4" // matches to label
                                name="question-4" // needs to be same across all possible answers
                                value="France" // get saved
                            />
                            <label htmlFor="question-4-4" className="answer">France</label>
                        </fieldset>
                    </div>
                    <div className="question">
                        <h3 className="question-setup">In which country was the caesar salad invented?</h3>
                        <fieldset>
                            <input 
                                type="radio"
                                id="question-5-1" // matches to label
                                name="question-5" // needs to be same across all possible answers
                                value="Italy" // get saved
                            />
                            <label htmlFor="question-5-1" className="answer answer-wrong">Italy</label>
                            <input 
                                type="radio"
                                id="question-5-2" // matches to label
                                name="question-5" // needs to be same across all possible answers
                                value="Portugal" // get saved
                            />
                            <label htmlFor="question-5-2" className="answer">Portugal</label>
                            <input 
                                type="radio"
                                id="question-5-3" // matches to label
                                name="question-5" // needs to be same across all possible answers
                                value="Mexico" // get saved
                            />
                            <label htmlFor="question-5-3" className="answer answer-correct">Mexico</label>
                            <input 
                                type="radio"
                                id="question-5-4" // matches to label
                                name="question-5" // needs to be same across all possible answers
                                value="France" // get saved
                            />
                            <label htmlFor="question-5-4" className="answer">France</label>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    )
}