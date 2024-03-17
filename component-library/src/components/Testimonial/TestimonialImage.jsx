import React from "react"
import { TestimonialContext } from "./Testimonial"
import testimonialImage from "../../assets/testimonialImage.png"

export default function TestimonialImage({ image }) {
    // const { image } = React.useContext(TestimonialContext)
    const useDefaultImage = image ? image : testimonialImage

    return (
        <div>
            {image && <img src={useDefaultImage} alt="A picture of the author" className="testimonial__image" />}
        </div>
    )
}