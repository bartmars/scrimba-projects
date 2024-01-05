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
          // eslint-disable-next-line no-unused-vars
          const allAnswers = ([...item.incorrect_answers, item.correct_answer]).sort((a, b) => Math.random() - 0.5)

          return ({
            id: item.id,
            question: decode(item.question),
            answers: allAnswers.map((answer, index) => {
              return {
                // TODO: Perhaps answer related properties are better placed here.
                // Requires rewriting of some functions
                id: item.id + index,
                answer: decode(answer),
                isSelected: false,
                isCorrect: answer === decode(item.correct_answer)
              }
            }),
            // correctAnswer: decode(item.correct_answer),
            // selectedAnswer: "",
            // isCorrect: false
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
    // TODO: Find a way to have one answer selected at a time
    const {name, id, checked, type, value} = event.target
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
    /* TODO: Need to map over answers = array */
    return (
      <Question
        key={nanoid()}
        id={item.id}
        question={item.question}
        answers={item.answers}
        selectedAnswer={item.answers}
        handleClick={handleClick}
      />
    )
  })

  return (
    <main>
      {!hasGameStarted && <Intro startGame={handleGameStatus}/>}
      {hasGameStarted && <div className="container">
        <form>
          {renderQuestionsData}
          {hasGameEnded && <p className="center">You scored {score} out of {questionsData.length}</p>}
          <div className='center'>
            {!hasGameEnded && <button type="button" className="btn center" onClick={handleSubmit}>Check answers</button>}
            {hasGameEnded && <button type="button" className="btn center" onClick={handleGameStatus}>Reset game</button>}
          </div>
        </form>
      </div>}
    </main>
  )
} 