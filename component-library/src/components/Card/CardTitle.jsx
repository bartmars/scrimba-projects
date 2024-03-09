import React from "react"
import { CardContext } from './Card'

export default function CardIcon() {
    const { title } = React.useContext(CardContext)

    return (
        <p className="message__text">{text}</p>
    )
}