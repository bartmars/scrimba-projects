import React from 'react'

import github from '../images/github.png'
import twitter from '../images/twitter.png'

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://twitter.com/BartMars" target="_blank" rel="noreferrer"><img src={twitter} alt="Logo of Twitter" /></a>
            <a href="https://github.com/bartmars" target="_blank" rel="noreferrer"><img src={github} alt="Logo of X" /></a>
        </footer>
    )
}