import React from "react"
import { BannerContext } from "./Banner"

export default function BannerTitle() {
    const { title } = React.useContext(BannerContext)

    return (
        <>
            <p className="message__title">{title}</p>
        </>
    )
}