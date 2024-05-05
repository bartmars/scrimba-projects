/* eslint-disable no-unused-vars */
import React from 'react'
import { nanoid } from 'nanoid'
import './App.css'

import Question from './components/Question'

export default function App() {
  const [quizData, setQuizData] = React.useState([])

  React.useEffect(() => {  
    async function fetchData() {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=5')
        const data = await response.json()
        // console.log('results:', data.results)

        setQuizData(data.results.map(item => {
          const allAnswers = ([...item.incorrect_answers, item.correct_answer]).sort((a, b) => Math.random() - 0.5) // investigate
          // console.log(allAnswers)

          return ({
            id: nanoid(),
            question: item.question,
            answers: allAnswers,
            correctAnswer: item.correct_answer
          })

        }))
      }
      catch(error) {
        // console.error(`Error while fetching data from API: ${error}`)
      }
    }
    fetchData()
  }, [quizData])

  // console.log(quizData)

  // const questionsData = quizData?.map(item => {
  //   return (
  //     <Question key={item.id} question={item.question} answers={item.answers} correctAnswer={item.correctAnswer} />
  //   )
  // })


  const renderQuestionsData = quizData.map(item => {
    return (
      <Question
        key={nanoid()}
        id={item.id}
        question={item.question}
        answers={item.answers}
        correctAnswer={item.correctAnswer}
        // handleChange={handleChange}
        // hasGameEnded={hasGameEnded}
      />
    )
  })

  return (
    <>
      {renderQuestionsData}
    </>
  )
}
