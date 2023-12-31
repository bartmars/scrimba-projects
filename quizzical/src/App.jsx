// Check API documentation https://www.otriviata.com/

import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'


import Intro from "./components/Intro"
import Question from "./components/Question"

export default function App() {
  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [questionsData, setQuestionsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://www.otriviata.com/api.php?amount=5`)
      const data = await response.json()

      setQuestionsData(data.results.map(item => {
        const id = nanoid()
        const allAnswers = [...item.incorrect_answers, item.correct_answer]
        const correctAnswer = item.correct_answer
        const question = item.question

        return ({
          id: id,
          question: decode(question),
          answers: decode(allAnswers),
          correctAnswer: decode(correctAnswer),
          isSelected: false
        })
      }))

    }
    fetchData()
  }, [hasGameStarted])

  function handleGameStatus() {
    setHasGameStarted(prevHasGameStarted => !prevHasGameStarted)
  }

  function handleChange(event) {
    // const {id} = event.target
    // setQuestionsData(prevState => {
    //    return {
    //      ...prevState,
    //      [name]: value
    //    }
    // })

  }

  function handleSubmit(event) {
    event.preventDefault()
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
          <div className='center'>
            <button type="button" className="btn center">Check answers</button>
          </div>
        </form>
      </div>}
    </main>
  )
} 