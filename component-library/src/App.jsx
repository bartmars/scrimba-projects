import { useState } from 'react'
import Badge from './components/Badge/Badge.jsx'
import Banner from './components/Banner/Banner.jsx'
import Card from './components/Card/Card.jsx'
// import './App.css'

function App() {
  return (
    <main className='container'>
      <section className="flex-row" id="badges-square">
        <Badge type="square" color="gray">Badge</Badge>
        <Badge type="square" color="red">Badge</Badge>
        <Badge type="square" color="yellow">Badge</Badge>
        <Badge type="square" color="green">Badge</Badge>
        <Badge type="square" color="blue">Badge</Badge>
        <Badge type="square" color="indigo">Badge</Badge>
        <Badge type="square" color="purple">Badge</Badge>
        <Badge type="square" color="pink">Badge</Badge>
      </section>
      <section className="flex-row" id="badges-pill">
        <Badge type="pill" color="gray">Badge</Badge>
        <Badge type="pill" color="red">Badge</Badge>
        <Badge type="pill" color="yellow">Badge</Badge>
        <Badge type="pill" color="green">Badge</Badge>
        <Badge type="pill" color="blue">Badge</Badge>
        <Badge type="pill" color="indigo">Badge</Badge>
        <Badge type="pill" color="purple">Badge</Badge>
        <Badge type="pill" color="pink">Badge</Badge>
      </section>
      <section className="flex-column" id="banners-message">
        <Banner status="success" title="Congratulations" text="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Banner>
        <Banner status="attention" title="Attention" text="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </Banner>
        <Banner status="error" title="There is something wrong with your application" text="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </Banner>
        <Banner status="neutral" title="Update available" text="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Banner>
      </section>
      <section className="flex-column" id="banners">
      <Banner status="success" title="Congratulations">          
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
      </Banner>
      <Banner status="attention" title="Attention">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </Banner>
      <Banner status="error" title="There is something wrong with your application">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </Banner>
      <Banner status="neutral" title="Update available">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
      </Banner>     
      </section>
      <section id="cards">
        <Card icon="" title="Easy Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
      </section>
      <section id="testimonials"></section>
      <section id="tooltip"></section>
      <section id="toast"></section>
    </main>
  )
}

export default App
