import React from "react"
import { CardContext } from './Card'

export default function CardIcon({ children }) {
    return (
        <p className="message__title">{children}</p>
    )
}