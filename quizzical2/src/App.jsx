import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'

// import './App.css'
import './index.css'

import Intro from './components/Intro.jsx'
import RadioButton from './components/RadioButton.jsx'

function App() {
  const [ questionsData, setQuestionsData ] = useState([])
  const [ isGameActive, setIsGameActive ] = useState(false)
  const [ score, setScore ] = useState(0)

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch('https://www.otriviata.com/api.php?amount=5')
        const data = await response.json()

        setQuestionsData(data.results.map(item => {
          const allAnswers = [...item.incorrect_answers, item.correct_answer]

          return ({
            id: item.id,
            question: decode(item.question),
            answers: allAnswers,
            correctAnswer: decode(item.correct_answer),
            selectedAnswer: "",
            isSelected: false // is visible in inspect tools, but not propagated to RadioButtons.jsx?
          })
        }))
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    console.log('data', questionsData, 'active?', isGameActive, 'score', score)
  }, [questionsData, isGameActive, score])

  function handleGameStatus() {
    setIsGameActive(prevIsGameActive => !prevIsGameActive)
  }

  function handleResetGame() {
    handleGameStatus()
    setScore(0)
  }

  function handleChange(event) {
    const {id, type, value, checked} = event.target
    setQuestionsData(prevQuestionsData => {
      return prevQuestionsData.map(object => {
        return id.includes(object.id) ? {...object, selectedAnswer: value} : object
      })
    })
  }

  function handleSubmit() {
    event.preventDefault()

    const handleScore = questionsData.map(object => {
      return object.selectedAnswer === object.correctAnswer ? setScore(prevScore => prevScore + 1) : object
    })
    handleGameStatus()

    return handleScore
  }

  const renderQuestionData = questionsData?.map(object => {
    return (
      <div key={nanoid()} className="question">
        <h2>{object.question}</h2>
        <fieldset className="answers">
          {object.answers.map(item => (
            <RadioButton
              key={nanoid()}
              id={object.id}
              answers={object.answers}
              answer={decode(item)}
              selectedAnswer={item.selectedAnswer}
              isSelected={item.isSelected}
              correctAnswer={item.correctAnswer}
              handleChange={event => handleChange(event)}
              isGameActive={isGameActive}
            />            
          ))}
        </fieldset>
      </div>
    )
  })

  return (
    <main>
      {!isGameActive && <Intro handleGameStatus={handleGameStatus}/>}
      {isGameActive && <form className="container" onSubmit={handleSubmit}>
        {renderQuestionData}
        {isGameActive && <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>}
        {!isGameActive && <button className="btn" type="submit" onClick={handleGameStatus}>Start</button>}
      </form>}
    </main>
  )
}

export default App
