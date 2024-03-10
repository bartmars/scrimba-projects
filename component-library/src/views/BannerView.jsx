import React from "react"
import Banner from '../components/Banner/index'
// import Banner from '../components/Banner/Banner'

export default function BannerSection() {
    return (
        <section className="flex-column" id="banners-message">
            <h2>Banner</h2>
            <p>Banner component with single-line or multi-line messages:</p>
            <Banner status="success" color="green">
                <Banner.Title>Congratulations</Banner.Title>
                <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
            </Banner>
            <Banner status="success" color="green">
                <Banner.Title>Congratulations</Banner.Title>
            </Banner>
            <Banner status="attention" color="yellow">
                <Banner.Title>Attention</Banner.Title>
                <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
            </Banner>
            <Banner status="attention" color="yellow">
                <Banner.Title>Attention</Banner.Title>
            </Banner>
            <Banner status="error" color="red">
                <Banner.Title>There is something wrong with your application</Banner.Title>
                <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
            </Banner>
            <Banner status="error" color="red">
                <Banner.Title>There is something wrong with your application</Banner.Title>
            </Banner>
            <Banner status="neutral" color="blue">
                <Banner.Title>Update available</Banner.Title>
                <Banner.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Text>
            </Banner>
            <Banner status="neutral" color="blue">
                <Banner.Title>Update available</Banner.Title>
            </Banner>
        </section>
    )
}
