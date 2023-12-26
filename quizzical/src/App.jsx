// Check API documentation https://www.otriviata.com/

import React from "react"
import { decode } from 'html-entities'

import Intro from "./components/Intro"
import Game from "./components/Game"

export default function App() {

  const [hasGameStarted, setHasGameStarted] = React.useState(false)
  const [token, setToken] = React.useState('')
  const [questions, setQuestions] = React.useState([])
  const [gameSettings, setGameSettings] = React.useState({
    amount: 5,
    category: 9, // https://opentdb.com/api_category.php
    difficulty: "any",
    type: "any",
    encoding: "default",
    token: token
  })

  React.useEffect(() => {
    getToken()
  }, [token])

  React.useEffect(() => {
    getQuestions(gameSettings)
  }, [questions])

  function getToken() {
    console.log(token)
    if (!token) {
      console.log("Retrieving token")
      fetch("https://opentdb.com/api_token.php?command=request")
      .then(response => {
        if (response.ok) {
          return response.json()
        } 
        else {
          throw new Error("Something went wrong when retrieving token from API")
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
  }

  function getQuestions(settings) {
    useEffect(
      fetch(`https://opentdb.com/api.php?amount=${settings.amount}&token=${token}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } 
        else {
          throw new Error("Something went wrong when retrieving data from API")
        }
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
    ), [token]}

  return (
    <main>
      {!hasGameStarted && <Intro getToken={getToken} />}
      {hasGameStarted && <Game/>}
    </main>
  )
} 