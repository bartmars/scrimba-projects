// Check API documentation https://www.otriviata.com/

import { useState, useEffect } from 'react'
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

import Intro from "./components/Intro"
import Game from "./components/Game"

export default function App() {

  const [hasGameStarted, setHasGameStarted] = useState(true)
  const [questions, setQuestions] = useState([])
  // const [token, setToken] = useState('')
  // const [gameSettings, setGameSettings] = useState({
  //   amount: 5,
  //   category: 9, // https://opentdb.com/api_category.php
  //   difficulty: "any",
  //   type: "any",
  //   encoding: "default",
  // })

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
          question: question,
          answers: allAnswers,
          correctAnswer: correctAnswer
        }
      }))
    }
    fetchData()
  }, [hasGameStarted])



  return (
    <main>
      {/* {!hasGameStarted && <Intro />} */}
      {hasGameStarted && <Game questions={questions} />}
    </main>
  )
} 