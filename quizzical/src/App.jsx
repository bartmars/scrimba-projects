// Check API documentation https://www.otriviata.com/

import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'


import Intro from "./components/Intro"
import Question from "./components/Question"

export default function App() {
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [questionsData, setQuestionsData] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.otriviata.com/api.php?amount=5`)
        const data = await response.json()
  
        setQuestionsData(data.results.map(item => {
          const allAnswers = [...item.incorrect_answers, item.correct_answer]
  
          return ({
            id: nanoid(),
            question: item.question,
            answers: allAnswers.map(answer => {
              return {
                id: nanoid(),
                answer: answer
              }
            }),
            isSelected: false,
            correctAnswer: item.correct_answer,
            selectedAnswer: ""
          })
        }))
      } catch (error) {
        console.error('Error while fetching data from API:', error);
      }
    }
    fetchData()
  }, [])

  console.log(questionsData)

  function handleGameStatus() {
    setHasGameStarted(prevHasGameStarted => !prevHasGameStarted)
  }

  function handleChange(event) {
    const {id, name, type, value, checked} = event.target

    setQuestionsData(prevQuestionsData => {
      const updatedQuestion = prevQuestionsData.map(question => {
        if (question.correctAnswer === value) {
          return {
            ...question,
            selectedAnswer: value
          }
        } else {
          return question
        }
      })
      return updatedQuestion
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const updatedScore = questionsData.map(question => {
      if (question.selectedAnswer !== "") {
        setScore(prevScore => prevScore + 1)
      }
    })
    return updatedScore
  }

  const renderQuestionsData = questionsData.map(item => {
    return (
      <Question
        key={item.id}
        id={item.id}
        question={item.question}
        answers={item.answers}
        correctAnswer={item.correctAnswer}
        isSelected={item.isSelected}
        handleChange={handleChange}
      />
    )
  })

  return (
    <main>
      {!hasGameStarted && <Intro startGame={handleGameStatus}/>}
      {hasGameStarted && <div className="content container">
        <form onSubmit={handleSubmit}>
          {renderQuestionsData}
          <p>You scored {score} out of {questionsData.length}</p>
          <div className='center'>
            <button type="button" className="btn center" onClick={handleSubmit}>Check answers</button>
          </div>
        </form>
      </div>}
    </main>
  )
} 