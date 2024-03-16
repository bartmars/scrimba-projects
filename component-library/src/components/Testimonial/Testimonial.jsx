import React from "react"
import classNames from "classnames"

const TestimonialContext = React.createContext()

export default function Testimonial({ children, image, color }) {
    const allClasses = classNames('testimonial', color)
    
    return (
        <TestimonialContext.Provider value={{ image }}>
            <div className={allClasses}>
                {children}
            </div>
        </TestimonialContext.Provider>
    )
}

export { TestimonialContext }