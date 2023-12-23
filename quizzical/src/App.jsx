// Check API documentation https://www.otriviata.com/

// eslint-disable-next-line no-unused-vars
import React from "react"
import blobTopRight from "./assets/blob-top-right.png"
import blobBottomLeft from "./assets/blob-bottom-left.png"

export default function App() {
  return (
    <div className="content">
      <img src={blobTopRight} className="blob-top-right"/>
      <div className="container">
        <h1 className="title">Quizzical</h1>
        <p className="description">Click the button below to start the game</p>
        <button className="btn">Start quiz</button>
      </div>
      <img src={blobBottomLeft} className="blob-bottom-left"/>
    </div>

  )
} 