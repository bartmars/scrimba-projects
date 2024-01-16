import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'

import './App.css'

import Question from './components/Question.jsx'

function App() {
  const [ questionsData, setQuestionsData ] = useState()
  const [ isGameActive, setIsGameActive ] = useState(false)

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch('https://www.otriviata.com/api.php?amount=5')
        const data = await response.json()

        setQuestionsData(data.results.map(item => {
          const allAnswers = [...decode(item.incorrect_answers), decode(item.correct_answer)]

          return ({
            id: item.id,
            question: decode(item.question),
            answers: allAnswers,
            correctAnswer: decode(item.correct_answer),
            score: 0
          })
        }))
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    console.log(questionsData)
  }, [questionsData])

  function handleChange(event) {
    const {id, type, value, checked} = event.target 
    
    
    
    // search for chosen answer in answers and match it with correctAnswer
  }

  function handleSubmit() {
    event.preventDefault()
    console.log(event.target)
  }

  const renderQuestionsData = questionsData?.map(object => (
    <Question 
      key={nanoid()}
      id={object.id}
      question={object.question}
      answers={object.answers}
      correctAnswer={object.correctAnswer}
      handleChange={event => handleChange(event)}
      isGameActive={isGameActive}
    />
  ))

  return (
    <main>
      <form onSubmit={handleSubmit}>
        {renderQuestionsData}
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default App
