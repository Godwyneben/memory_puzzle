import './SingleCard.css'
export default function singleCard({ card, handleChoice, flipped, disabled }) {

  const handleClick  = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card">
        <div className={flipped ? "flipped" : ""} >
          <img src={card.src} alt="card front" className="front"/>
          <img src="/img/cover.jpg" 
          alt="card back" 
          onClick={handleClick}
          className="back"/>
        </div>
    </div>
  )
}

