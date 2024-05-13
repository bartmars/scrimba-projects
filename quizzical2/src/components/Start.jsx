/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Start(props) {
    return (
        <>
            <h1>Quizzical</h1>
            <p>Check your knowledge with a short quiz</p>
            <button onClick={props.startGame}>Start Quiz</button>
        </>
    )
}