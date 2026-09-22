import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/joke')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }) // important

  return (
    <>
      <h1>Man Mohan Sharma</h1>
      <p>JOKES: {jokes.length}</p>

      {
      jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.context}</p>
        </div>
      ))
      }
    </>
  )
}

export default App