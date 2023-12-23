import React from "react"
import Die from "./Die.jsx"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() { 
   const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [count, setCount] = React.useState(0)
    const [startTime, setStartTime] = React.useState(null)
    const [endTime, setEndTime] = React.useState(null)
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        if(!tenzies) {
            if (startTime === null) {
                setStartTime(performance.now())
            }
            setCount(prevCount => prevCount + 1)
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        } else {
            setEndTime(performance.now())
            setCount(0)
            setTenzies(false)
            setDice(allNewDice())
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))

    /* 
        conversion from milliseconds to seconds is dividing by 1000
        performance.now() uses milliseconds, but dividing by 1000 seems to add a additional 0 to elapsedTime
        unsure what I'm doing wrong here, but at least the elapsedTime now works as it should 
    */
    const elapsedTime = (endTime - startTime) / 10000
    
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <p>Statistics</p>
            <p>Tries: {count}</p>
            {tenzies && <p>Last try {elapsedTime.toFixed(2)} seconds</p>}
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}