import React from "react"
import classNames from "classnames"

const TestimonialContext = React.createContext()

export default function Testimonial({ children, image, color }) {
    const hasImage = image ? '' : 'testimonial__withoutImage'
    const allClasses = classNames('testimonial', color, hasImage)
    
    return (
        <TestimonialContext.Provider value={{ image }}>
            <div className={allClasses}>
                {children}
            </div>
        </TestimonialContext.Provider>
    )
}

export { TestimonialContext }