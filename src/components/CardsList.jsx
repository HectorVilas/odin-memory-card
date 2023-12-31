import '../styles/CardsList.css'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function Card(props) {
  const date = new Date(props.releaseDate * 1000)
  const indicator = date.getDay() === 1 ? 'st' : date.getDay() === 2 ? 'nd' : date.getDay() === 3 ? 'rd' : 'th'
  const score = props.steamRatingPercent >= 70 ? 'positive' : props.steamRatingPercent >= 50 ? 'mixed' : 'negative'

  return(
    <div id={props.cardId} className='card' onClick={props.clickAction}>
      <img src={props.imgUrl} alt={props.title} />
      <h2>{props.title}</h2>
      <p className='card-score'><span className={`card-score-${score}`}>{props.steamRatingText}</span> ({props.steamRatingPercent}% positive reviews)</p>
      <p className='card-normal-price'>${props.normalPrice}</p>
      <p className='card-sale-price'>${props.salePrice}</p>
      <p className='card-discount'>-{props.savings}%</p>
      <p className='card-date'><span className='card-date-text'>Release date:</span> {months[date.getMonth()]} {date.getDay()}{indicator} {date.getFullYear()}</p>
    </div>
  )
}

export default function CardsList(props) {
  function clickAction(e) {
    if (props.showOffers) return
    const alreadyChosen = props.chosenCards.includes(e.currentTarget.id)

    if(!alreadyChosen) {
      const newArray = [...props.chosenCards]
      newArray.push(e.currentTarget.id)

      props.setChosenCards(newArray)
      props.setScore(newArray.length)

      if (newArray.length > props.highScore) props.setHighScore(newArray.length)
      if (newArray.length === props.cardsQuantity) props.setGameOver(true)
    } else {
      props.setGameOver(true)
    }
  }

  return (
    <>
      {props.cardsList.sort(() => Math.random() - 0.5).map((item) =>
        <Card
          key={item.gameID}
          cardId={item.gameID}
          imgUrl={item.thumb}
          title={item.title}
          steamRatingPercent={item.steamRatingPercent}
          steamRatingText={item.steamRatingText}
          normalPrice={item.normalPrice}
          salePrice={item.salePrice}
          savings={Math.floor(item.savings)}
          releaseDate={item.releaseDate}
          clickAction={!props.showOffers ? clickAction : () => window.open(`https://www.cheapshark.com/redirect?dealID=${item.dealID}`)}
        />
      )}
      {props.showOffers && <button className='btn-back-to-menu' onClick={() => props.setGameOver(true)}>Go back to main menu</button>}
    </>
  )
}