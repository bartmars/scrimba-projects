import React from "react"
import { BannerContext } from "./Banner"

export default function BannerText({ children }) {
    const { text } = React.useContext(BannerContext)

    return (
        <p className="message__text">{children}</p>
    )
}