import React from "react"
import { ImQuotesLeft } from "react-icons/im"
import classNames from "classnames"


export default function TestimonialText({ children, color }) {
    const allClasses = classNames('testimonial__quote', color)
    return (
        <div className="testimonial__text">
            <ImQuotesLeft className={allClasses} />
            {children}
        </div>
    )
}