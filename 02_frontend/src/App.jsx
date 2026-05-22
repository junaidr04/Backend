import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {

    axios.get('/api/jokes')
      .then((response) => {
        console.log(response.data)
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  return (
    <>
      <h1>Backend Developer</h1>

      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App