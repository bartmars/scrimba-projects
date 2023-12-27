// Check API documentation https://www.otriviata.com/

import { useState, useEffect } from 'react'
import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

import Intro from "./components/Intro"
import Game from "./components/Game"

export default function App() {

  const [hasGameStarted, setHasGameStarted] = useState(false)
  const [token, setToken] = useState('')
  const [questionsArray, setQuestionsArray] = useState([])
  const [gameSettings, setGameSettings] = useState({
    amount: 5,
    category: 9, // https://opentdb.com/api_category.php
    difficulty: "any",
    type: "any",
    encoding: "default",
    token: token
  })

  useEffect(() => {
    if (token === '') {
      fetch("https://opentdb.com/api_token.php?command=request")
      .then(response => {
        if (response.ok) {
          return response.json()
        } 
        else {
          throw new Error("Something went wrong when retrieving token from API", response.status)
        }
      })
      .then(data => {
        setToken(data.token)
        setHasGameStarted(true)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [token])

  useEffect(() => {
    if (token !== '') {
      fetch(`https://opentdb.com/api.php?amount=${gameSettings.amount}&token=${token}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } 
        else {
          throw new Error("Something went wrong when retrieving data from API", response.status)
        }
      })
      .then(data => {
        setQuestionsArray(data.results.map(result => {
          const questionId = nanoid()
          const 
        }))
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [token])

  console.log(questionsArray[0])

  return (
    <main>
      {/* {!hasGameStarted && <Intro />} */}
      {hasGameStarted && <Game questionSetup={questionsArray}/>}
    </main>
  )
} 