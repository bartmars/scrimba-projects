import React from "react"
import classNames from "classnames"
import CardIcon from "./CardIcon"
import CardTitle from "./CardTitle"
import CardText from "./CardText"

const CardContext = React.createContext()

export default function card({ children, icon, color  }) {
    const allClasses = classNames('card', color)

    return (
        <CardContext.Provider value={{ icon }}>
            <div className={allClasses}>
                {children}
            </div>
        </CardContext.Provider>
    )
}

export { CardContext }