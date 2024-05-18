/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'

import Question from './Question'

export default function Quiz(props) {
    const [ quizData, setQuizData ] = React.useState([])
    const [ quizActive, setQuizActive ] = React.useState(false)
    const [ score, setScore ] = React.useState(0)

    async function fetchData() {
        /*
            Retrieve data from API opentdb and return custom objects to quizData array.
            Object attributes are decoded from HTML special characters.
        */
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=5')
            if (response.ok) {
                const data = await response.json()
        
                setQuizData(data.results?.map((result, index) => {
                    const decodedIncorrectAnswers = result.incorrect_answers.map(incorrectAnswer => {
                        return decode(incorrectAnswer)
                    })
                    const decodedCorrectAnswer = decode(result.correct_answer)
                    const decodedQuestion = decode(result.question)

                    const allAnswers = ([...decodedIncorrectAnswers, decodedCorrectAnswer]).sort((a, b) => Math.random() - 0.5)
        
                    return ({
                        id: index,
                        question: decodedQuestion,
                        correctAnswer: decodedCorrectAnswer,
                        answers: allAnswers,
                        selectedAnswer: ''
                    })
                }))
                setQuizActive(true)
            }
        }
        catch(error) {
            console.log('Error while retrieving API data: ', error)
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    function handleChange(event) {
        const { value, name } = event.target
        const id = parseInt(name)

        setQuizData(prevQuizData => {
            return prevQuizData.map(question => {
                return question.id === id ? {...question, selectedAnswer: value} : question
            })
        })
    }

    function handleSubmit() {
        return quizData.map(question => {
            setQuizActive(false)
            return question.correctAnswer === question.selectedAnswer ? setScore(prevScore => prevScore + 1) : score
        })
        
    }

    function restartQuiz() {
        setQuizActive(true)
        setScore(0)
        fetchData()
    }

    const renderQuestions = quizData?.map(question => {
        return (
            <Question 
                key={nanoid()}
                id={question.id}
                question={question.question}
                answers={question.answers}
                correctAnswer={question.correctAnswer}
                selectedAnswer={question.selectedAnswer}
                handleChange={handleChange}
                disabled={quizActive}
            />
        )
    })

    return (
        <main>
            <div className='container app__questions'>
                {renderQuestions}
                {quizActive && <button type='button' className='btn btn__check-answer' onClick={handleSubmit}>Check answers</button>}
                {!quizActive && 
                    <div>
                        <p className='app__score'>
                            You scored {score}/{quizData.length} correct {score === 1 ? 'answer' : 'answers'}
                            <button type='button' className='btn btn__reset' onClick={restartQuiz}>Play again</button>
                        </p>
                    </div>
                }
            </div>
        </main>

    )
}