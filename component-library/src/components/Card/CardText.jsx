import React from "react"
import { CardContext } from './Card'

export default function CardIcon() {
    const { text } = React.useContext(CardContext)

    return (
        <p className="message__title">{title}</p>
    )
}