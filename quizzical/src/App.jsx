import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'

import Intro from "./components/Intro"
import Question from "./components/Question"

export default function App() {
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [hasGameEnded, setHasGameEnded] = useState(true)
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
                answer: decode(answer),
                isSelected: false,
                isCorrect: answer === decode(item.correct_answer)
              }
            })
          })
        }))
      } catch (error) {
        console.error('Error while fetching data from API:', error);
      }
    }
    fetchData()
  }, [hasGameStarted])

  console.log(questionsData)

  function handleGameStatus() {
    setHasGameEnded(prevHasGameEnded => !prevHasGameEnded)
    setHasGameStarted(prevHasGameStarted => !prevHasGameStarted)
  }


  function handleClick(event) {
    const {id} = event.target
    setQuestionsData(prevQuestionsData => {
      return prevQuestionsData.map(question => {
        return {
          ...question,
          answers: question.answers.map(answer => {
            return id === answer.id ? {
              ...answer,
              isSelected: !answer.isSelected
            } : answer
          })
        }
      })
    })
  }

  function handleSubmit() {
    event.preventDefault()

    const updatedScore = questionsData.map(question => {
      return question.answers.map(answer => {
        if (answer.isSelected && answer.isCorrect) {
          setScore(prevScore => prevScore + 1)
        }
      })
    })

    setHasGameEnded(true)
    return updatedScore
  }

  const renderQuestionsData = questionsData.map(item => {
    return (
      <Question
        key={nanoid()}
        id={item.id}
        question={item.question}
        answers={item.answers}
        handleClick={handleClick}
        hasGameEnded={hasGameEnded}
      />
    )
  })

  return (
    <main>
      {!hasGameStarted && <Intro startGame={handleGameStatus}/>}
      {hasGameStarted && <form className="container">
          {renderQuestionsData}
          {hasGameEnded && <p className="center">You scored {score} out of {questionsData.length}</p>}
          <div className='center'>
            {!hasGameEnded && <button type="button" className="btn center" onClick={handleSubmit}>Check answers</button>}
            {hasGameEnded && <button type="button" className="btn center" onClick={handleGameStatus}>Reset game</button>}
          </div>
        </form>}
    </main>
  )
} 