import React from "react"
import { BsCheckCircleFill, BsExclamationTriangleFill, BsXCircleFill, BsFillInfoCircleFill } from "react-icons/bs";

export default function banner({ children, status, title, text }) {
    let style = ''
    
    if (status === 'success') {
        style = 'square banner green green-bg'
    } else if (status === 'attention') {
        style = 'square banner yellow yellow-bg'
    } else if (status === 'error') {
        style = 'square banner red red-bg'
    } else if (status === 'neutral') {
        style = 'square banner blue blue-bg'
    } else {
        style = 'square banner gray gray-bg'
    }

    return (
        <div className={style}>
            <div className="banner__icon">
                {status === 'success' ? <BsCheckCircleFill /> : null}
                {status === 'attention' ? <BsExclamationTriangleFill /> : null}
                {status === 'error' ? <BsXCircleFill /> : null}
                {status === 'neutral' ? <BsFillInfoCircleFill /> : null}
            </div>
            <div className="banner__content">
                <p className="message__title">{title}</p>
                {text && <p className="message__body">{children}</p>}
            </div>
        </div>
    )
}