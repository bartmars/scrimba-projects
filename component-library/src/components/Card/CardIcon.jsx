import React from "react"
import { CardContext } from './Card'
import { BsCloudUpload } from "react-icons/bs"

export default function CardIcon() {
    const { icon } = React.useContext(CardContext)

    return (
        <BsCloudUpload />
    )
}