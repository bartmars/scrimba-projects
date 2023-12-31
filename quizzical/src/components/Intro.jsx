import React from "react"

export default function Intro(props) {
    return (
        <div className="container">
            <h1 className="title">Quizzical</h1>
            <p className="description">Click the button below to start the game</p>
            <button className="btn" onClick={props.startGame}>Start quiz</button>
        </div>
    )
}