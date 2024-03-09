import { useState } from 'react'
import Badge from './components/Badge.jsx'
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
        <h2>Banner</h2>
        <p>Banner component with single-line or multi-line option.</p>
        <Banner 
          status="success" 
          title="Congratulations" 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          color="green"
        />
        <Banner 
          status="attention" 
          title="Attention" 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          color="yellow"
        />
        <Banner 
          status="error" 
          title="There is something wrong with your application" 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          color="red"
        />
        <Banner 
          status="neutral" 
          title="Update available" 
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
          color="blue"
        />
        <Banner status="success" title="Congratulations" color="green"/>          
        <Banner status="attention" title="Attention" color="yellow" />
        <Banner status="error" title="There is something wrong with your application" color="red" />
        <Banner status="neutral" title="Update available" color="blue" />
      </section>
      <section id="cards">
        <h2>Card</h2>
        <p>A card component with a default icon, and a hover effect. Color is optional.</p>
        <Card icon="" color="" title="Easy Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
        <Card icon="" color="blue" title="Easy Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
      </section>
      <section id="testimonials"></section>
      <section id="tooltip"></section>
      <section id="toast"></section>
    </main>
  )
}

export default App
