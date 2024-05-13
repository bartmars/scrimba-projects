/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Start(props) {
    return (
        <main>
            <div className='app__start'>
                <h1 className='app__title'>Quizzical</h1>
                <p className='app__description'>Check your knowledge with a short quiz</p>
                <button className='btn btn__start' onClick={props.startGame}>Start Quiz</button>
            </div>
        </main>
    )
}