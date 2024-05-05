/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { QuestionContext } from './Question' 

export default function QuestionText({ children }) {
    const { question } = React.useContext(QuestionContext)

    return (
        <h2>{question}</h2>
    )
}