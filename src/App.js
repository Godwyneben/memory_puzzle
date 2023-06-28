import './App.css';

const cardImages = [
  { "src": "/img/collosseum.png" },
  { "src": "/img/eiffle.jpg" },
  { "src": "/img/itza,jpg" },
  { "src": "/img/janeiro.jpg" },
  { "src": "/img/pyramid.jpg" },
  { "src": "/img/statue.jpg" }
]

function App() {

  // shuffle cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
  }

  return (
    <div className="App">
      <h1> Card Puzzle</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
