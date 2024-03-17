import React from "react"
import { TestimonialContext } from "./Testimonial"
import testimonialImage from "../../assets/testimonialImage.png"

export default function TestimonialImage() {
    const { image } = React.useContext(TestimonialContext)
    const useImage = image ? image : testimonialImage

    return (
        <div>
            {image && <img src={useImage} alt="A picture of the author" className="testimonial__image" />}
        </div>
    )
}