import React from "react"
import { BannerContext } from "./Banner"

export default function BannerText() {
    const { text } = React.useContext(BannerContext)

    return (
        <>
            {text && <p className="message__text">{text}</p>}
        </>
    )
}