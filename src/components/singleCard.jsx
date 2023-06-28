import './singleCard.css'

export default function singleCard( { card }) {
    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src="/img/cover.jpg" alt="card back" />
            </div>
        </div>
    )
}
