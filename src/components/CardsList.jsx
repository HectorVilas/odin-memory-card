import '../styles/CardsList.css'

function Card(props) {
  return(
    <div id={props.cardId} className='card' onClick={props.clickAction}>
      <img src={props.imgUrl} alt="" />
      <h2>{props.title}</h2>
    </div>
  )
}

export default function CardsList(props) {
  
  function clickAction(e) {
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
          key={item.cardId}
          cardId={item.cardId}
          imgUrl={item.imgUrl}
          title={item.title}
          clickAction={clickAction}
        />
      )}
    </>
  )
}