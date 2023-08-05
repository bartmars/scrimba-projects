import React from "react"

import Photo from "./components/Photo"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <Photo />
            <Info />
            <section className="section">
                <About />
                <Interests />
            </section>
            <Footer />
        </div>
    )
}