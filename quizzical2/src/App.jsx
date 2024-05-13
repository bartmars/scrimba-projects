/* eslint-disable no-unused-vars */
import React from 'react'

import './App.css'

import Start from './components/Start'
import Quiz from './components/Quiz'

export default function App() {
  const [ startGame, setStartGame ] = React.useState(false)
  
  function toggleGame() {
    setStartGame(prevGameStatus => !prevGameStatus)
  }

  return (
    <>
      {!startGame && <Start startGame={toggleGame} />}
      {startGame && <Quiz startGame={toggleGame} />}
    </>
  )
}

