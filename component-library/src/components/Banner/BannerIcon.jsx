import React from "react"
import { 
    BsCheckCircleFill, 
    BsExclamationTriangleFill, 
    BsXCircleFill,
    BsFillInfoCircleFill 
} from "react-icons/bs"

import { BannerContext } from "./Banner"


export default function BannerIcon() {
    const {status} = React.useContext(BannerContext)
    if (status === 'success') {
        return (<BsCheckCircleFill />)
    } else if (status === 'attention') {
        return (<BsExclamationTriangleFill />)
    } else if (status === 'error') {
        return (<BsXCircleFill />)
    } else if (status === 'neutral') {
        return (<BsFillInfoCircleFill />)
    } else {
        null
    }
}