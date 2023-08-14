import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import data from './data.js'
import './App.css'

export default function App() {
  const cards = data.map(item => {
      return (
        <Card 
            key={item.id}
            item={item}
        />
      )
  })
  return (
    <>
      <Navbar />
      <div className="container">
        <section id="cards" className="cards">
          {cards}
        </section>
      </div>
    </>
  )
}
