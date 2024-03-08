import React from "react"
import classNames from "classnames"
import { BsCloudUpload } from "react-icons/bs";

export default function card({ children, icon, title, color }) {
    const allClasses = classNames('card', color)


    return (
        <div className={allClasses}>
            <div className="card__icon">
                {icon ? '' : <BsCloudUpload/>}
            </div>
            <div className="card__content">
                <p className="message__title">{title}</p>
                <p>{children}</p>
            </div>
        </div>
    )
}