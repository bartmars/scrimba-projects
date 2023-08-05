import React from 'react'

import linkedin from '../images/linkedin.png'

export default function Info() {
    return (
        <section id="info" className="section">
            <h1 className="info-name">Bart Mars</h1>
            <h3 className="info-role">Frontend Developer</h3>
            <a className="info-website" href="https://www.bartmars.dev" target="_blank" rel="noreferrer">bartmars.dev</a>
            <a className="btn" href="https://www.linkedin.com/in/bartmars" target="_blank" rel="noreferrer">
                <img src={linkedin} />
                <p>LinkedIn</p>
            </a>
        </section>
    )
}