import { useState } from 'react'
import './App.css'

const cardImages = [
  { "src": "/img/collesseum.jpg" },
  { "src": "/img/eiffle.jpg" },
  { "src": "/img/itza.jpg" },
  { "src": "/img/janeiro.jpg" },
  { "src": "/img/pyramid.jpg" },
  { "src": "/img/statue.jpg" }
]


 function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)


  // shuffle cards 
  const shuffleCards = () => {
    const shuffledCards =  [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffleCards)
    setTurns(0)
  }

  console.log(cards,turns)

  return (
    <div className='App'>
      <h1>Card Puzzle</h1>
      <button onClick={shuffleCards}>New Game</button>
      
    </div>
  )
}

export default App
