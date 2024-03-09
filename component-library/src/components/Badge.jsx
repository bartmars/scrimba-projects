import React from "react"
import classNames from "classnames"

export default function badge({ children, type, color }) {
    const allClasses = classNames(type, color)

    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}