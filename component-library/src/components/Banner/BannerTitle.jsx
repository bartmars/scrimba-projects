import React from "react"
import { BannerContext } from "./Banner"

export default function BannerTitle({ children }) {
    const { title } = React.useContext(BannerContext)

    return (
        <p className="message__title">{children}</p>
    )
}