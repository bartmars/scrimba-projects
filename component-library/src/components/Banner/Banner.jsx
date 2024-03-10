import React from "react"
import classNames from "classnames"
import BannerIcon from "./BannerIcon"
import BannerTitle from "./BannerTitle"
import BannerText from "./BannerText"

const BannerContext = React.createContext()

export default function Banner({ children, status, color }) {
    const allClasses = classNames('banner', color)

    return (
        <BannerContext.Provider value={{ status }}>
            <div className={allClasses}>
                <BannerIcon className="banner__icon" />
                <div className="banner__content">
                    {children}
                </div>
            </div>
        </BannerContext.Provider>
    )
}

export { BannerContext }