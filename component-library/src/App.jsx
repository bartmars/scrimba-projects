import { useState } from 'react'
import Badge from './components/Badge/Badge.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Badge type="square" color="gray">Test</Badge>
    </>
  )
}

export default App
