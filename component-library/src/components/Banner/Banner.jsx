import React from "react"
import classNames from "classnames"
import BannerIcon from "./BannerIcon"
import BannerTitle from "./BannerTitle"
import BannerText from "./BannerText"

const BannerContext = React.createContext()

export default function Banner({ status, color, title, text }) {
    const allClasses = classNames('banner', color)

    return (
        <BannerContext.Provider value={{ status, title, text }}>
            <div className={allClasses}>
                <BannerIcon className="banner__icon" />
                <div className="banner__content">
                    <BannerTitle/>
                    <BannerText/>
                </div>
            </div>
        </BannerContext.Provider>
    )
}

export { BannerContext }