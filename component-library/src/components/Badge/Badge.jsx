import React from "react"
import './Badge.module.css'

export default function badge({ children, type, color }) {
    let selectedType = type && `${type}`
    let selectedColor = color && `${color}`
    const combinedClasses = `${selectedType} ${selectedColor}`

    return (
        <div className={combinedClasses}>
            {children}
        </div>
    )
}