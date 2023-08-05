import React from 'react'

import photo from '../images/photo.png'

export default function Photo() {
    return (
        <>
        <section id="photo">
            <img className="photo" src={photo} alt="Photo" />
        </section>
        </>
    )
}