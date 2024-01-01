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
          const id = nanoid()
          const allAnswers = [...item.incorrect_answers, item.correct_answer]
          const correctAnswer = item.correct_answer
          const question = item.question
  
          return ({
            id: id,
            question: question,
            answers: allAnswers,
            correctAnswer: correctAnswer,
            isSelected: false
          })
        }))
      } catch (error) {
        console.error('Error while fetching data from API:', error);
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    /* Needs this to accurately see the currect state of score */
    console.log(score)
  }, [score])

  function handleGameStatus() {
    setHasGameStarted(prevHasGameStarted => !prevHasGameStarted)
  }

  function handleChange(event, array) {
    const {id, name, type, value, checked} = event.target
    




    console.log('id:', id, '\nname:', name, '\ntype:', type, '\nvalue:', value, '\nchecked:', checked)
  }

  function handleSubmit(event) {
    event.preventDefault()

    /*
      Write a function that:
      - Iterates over every given answer,
      - Checks if the answer is correct_answer,
      - If it is the correct_answer, add +1 to score state
      - If it is not the correct_answer, do nothing
    */

    // questionsData.map(item => {
    //   if (value === item.correctAnswer) {
    //     setScore(prevScore => prevScore + 1)
    //   }
    // })
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