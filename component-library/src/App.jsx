import { useState } from 'react'
import Badge from './components/Badge/Badge.jsx'
import './App.css'

function App() {
  return (
    <main>
      <section id="badges">
        <Badge type="square" color="gray">Badge</Badge>
        <Badge type="square" color="red">Badge</Badge>
        <Badge type="square" color="yellow">Badge</Badge>
        <Badge type="square" color="green">Badge</Badge>
        <Badge type="square" color="blue">Badge</Badge>
        <Badge type="square" color="indigo">Badge</Badge>
        <Badge type="square" color="purple">Badge</Badge>
        <Badge type="square" color="pink">Badge</Badge>
      </section>
      <section id="pills">
        <Badge type="pill" color="gray">Badge</Badge>
        <Badge type="pill" color="red">Badge</Badge>
        <Badge type="pill" color="yellow">Badge</Badge>
        <Badge type="pill" color="green">Badge</Badge>
        <Badge type="pill" color="blue">Badge</Badge>
        <Badge type="pill" color="indigo">Badge</Badge>
        <Badge type="pill" color="purple">Badge</Badge>
        <Badge type="pill" color="pink">Badge</Badge>
      </section>
      <section id="banners"></section>
      <section id="cards"></section>
      <section id="testimonials"></section>
      <section id="tooltip"></section>
      <section id="toast"></section>
    </main>
  )
}

export default App
