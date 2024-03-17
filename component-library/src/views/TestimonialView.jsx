import React from "react"
import Testimonial from "../components/Testimonial/index"
import testimonialImage from "../assets/testimonialImage.png"
// import image from "../assets/render-male.png"
import logo from "../assets/logo.png"

export default function TestimonialView() {
    return (
        <>
            <Testimonial color="dark-blue" image={testimonialImage} logo={logo} >
                <Testimonial.Image/>
                <Testimonial.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Testimonial.Text>
                <Testimonial.Person>Mike Andersons</Testimonial.Person>
                <Testimonial.JobTitle>Workcation, CTO</Testimonial.JobTitle>
            </Testimonial>
            <Testimonial color="blue" >
                <Testimonial.Image />
                <Testimonial.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Testimonial.Text>
                <Testimonial.Person>Mike Andersons</Testimonial.Person>
                <Testimonial.JobTitle>Workcation, CTO</Testimonial.JobTitle>
            </Testimonial>
        </>
    )
}