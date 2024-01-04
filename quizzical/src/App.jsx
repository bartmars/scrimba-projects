import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'

import Intro from "./components/Intro"
import Question from "./components/Question"

export default function App() {
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [hasGameEnded, setHasGameEnded] = useState(false)
  const [questionsData, setQuestionsData] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    // TODO: Prevent initial API request to retrieve questions before starting quiz
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.otriviata.com/api.php?amount=5`)
        const data = await response.json()
  
        setQuestionsData(data.results.map(item => {
          const allAnswers = ([...item.incorrect_answers, item.correct_answer]).sort((a, b) => Math.random() - 0.5)
  
          return ({
            id: item.id,
            question: decode(item.question),
            answers: allAnswers.map((answer, index) => {
              return {
                id: item.id + index,
                answer: decode(answer)
              }
            }),
            isSelected: false,
            correctAnswer: decode(item.correct_answer),
            selectedAnswer: ""
          })
        }))
      } catch (error) {
        console.error('Error while fetching data from API:', error);
      }
    }
    fetchData()
  }, [hasGameStarted])

  useEffect(() => {
    console.log('questionsData:', questionsData)
  }, [questionsData])

  function handleGameStatus() {
    setHasGameStarted(prevHasGameStarted => !prevHasGameStarted)
  }

  /* IT WORKS!!! */
  function handleChange(event, questionId) {
    const {name, value} = event.target
    setQuestionsData(prevQuestionsData => {
      return prevQuestionsData.map(question => {
        return question.id === questionId ? {
          ...question,
          isSelected: true,
          selectedAnswer: value
        } : question
      })
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const updatedScore = questionsData.map(question => {
      if (question.selectedAnswer !== "") {
        if (question.selectedAnswer === question.correct_answer) {
          setScore(prevScore => prevScore + 1)
        }
      }
    })

    setHasGameEnded(true)
    return updatedScore
  }

  const renderQuestionsData = questionsData.map(item => {
    // TODO: answers are not highlighted when selected
    return (
      <Question
        key={nanoid()}
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
      {hasGameStarted && <div className="container">
        <form onSubmit={handleSubmit}>
          {renderQuestionsData}
          {hasGameEnded && <p className="center">You scored {score} out of {questionsData.length}</p>}
          <div className='center'>
            <button type="button" className="btn center" onClick={handleSubmit}>Check answers</button>
          </div>
        </form>
      </div>}
    </main>
  )
} 