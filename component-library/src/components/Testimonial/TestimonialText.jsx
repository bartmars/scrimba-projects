import React from "react"
import { ImQuotesLeft } from "react-icons/im"
import classNames from "classnames"

import { TestimonialContext } from "./Testimonial"

export default function TestimonialText({ children, color }) {
    const { image } = React.useContext(TestimonialContext)

    const hasImage = image ? 'testimonial__text' : 'testimonialText__withoutImage'
    const allClasses = classNames('testimonial__quote', color)

    return (
        <div className={hasImage}>
            {image ? <ImQuotesLeft className={allClasses} /> : null}
            {children}
        </div>
    )
}