import React from "react"
import classNames from "classnames"
import CardIcon from "./CardIcon"
import CardTitle from "./CardTitle"
import CardText from "./CardText"

const CardContext = React.createContext()

export default function card({ icon, title, color, text }) {
    const allClasses = classNames('card', color)

    // return (
    //     <div className={allClasses}>
    //         <div className="card__icon">
    //             {icon ? `` : <BsCloudUpload/>}
    //         </div>
    //         <div className="card__content">
    //             <p className="message__title">{title}</p>
    //             <p>{children}</p>
    //         </div>
    //     </div>
    // )

    return (
        <CardContext.Provider value={{ icon, title, text }}>
            <div className={allClasses}>
                <CardIcon />
                <div className="card__content">
                    <CardTitle />
                    <CardText />
                </div>
            </div>
        </CardContext.Provider>
    )
}

export { CardContext }