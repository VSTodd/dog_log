import { useState, useEffect } from 'react'
import Dog from "./components/Dog"
import Dogs from "./components/Dogs"
import './App.css'

function App() {
  const [dogs, setDogs] = useState([])
  const [error, setError] = useState(false)

  

  useEffect(() => {
    fetch('https://qgdh2evpx7.execute-api.us-east-2.amazonaws.com/basenji/breeds')
      .then(response => response.json())
      .then ((data) => setDogs(data))
  }, []);

  return (
    <>
      <h1>🐶Dogs🐶</h1>
      <Dogs dogs={dogs}/>
    </>
  )
}

export default App
