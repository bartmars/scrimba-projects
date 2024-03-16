import React from "react"
import { TestimonialContext } from "./Testimonial"

export default function TestimonialImage({ image }) {
    // const { image } = React.useContext(TestimonialContext)

    return (
        <div>
            <img src={image} alt="A picture of the author" className="testimonial__image" />
        </div>
    )
}