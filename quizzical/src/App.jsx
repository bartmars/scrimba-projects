// Check API documentation https://www.otriviata.com/

import { useState, useEffect } from 'react'
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

import Intro from "./components/Intro"
// import Game from "./components/Game"
import Question from "./components/Question"

export default function App() {

  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://www.otriviata.com/api.php?amount=5`)
      const data = await response.json()

      setQuestions(data.results.map(item => {
        const id = nanoid()
        const allAnswers = [...item.incorrect_answers, item.correct_answer]
        const correctAnswer = item.correct_answer
        const question = item.question

        return {
          id: id,
          question: decode(question),
          answers: decode(allAnswers),
          correctAnswer: decode(correctAnswer)
        }
      }))

    }
    fetchData()
  }, [hasGameStarted])

  function handleGameStatus() {
    setHasGameStarted(prevHasGameStarted => !prevHasGameStarted)
  }

  const renderQuestions = questions.map(item => {
    return (
      <Question
        key={nanoid()}
        id={item.id}
        question={item.question}
        answers={item.answers}
        correctAnswer={item.correctAnswer}
      />
    )
  })

  return (
    <main>
      {!hasGameStarted && <Intro startGame={handleGameStatus}/>}
      {hasGameStarted && <div className="content container">
        <form>
          {hasGameStarted && renderQuestions}
        </form>
      </div>}
    </main>
  )
} 