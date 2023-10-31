import '../styles/PlayArea.css'
import { useState } from 'react'

function DifficultMenu() {
  return (
    <div>
      <p>Difficult menu placeholder</p>
    </div>
  )
}

function Card(props) {
  return(
    <div id={props.cardId} className='card' onClick={props.clickAction}>
      <img src={props.imgUrl} alt="" />
      <h2>{props.title}</h2>
    </div>
  )
}

function CardsList(props) {
  const [chosenCards, setChosenCards] = useState([]);

  function clickAction(e) {
    const alreadyChosen = chosenCards.includes(e.currentTarget.id)

    if(!alreadyChosen) {
      const newArray = [...chosenCards]
      newArray.push(e.currentTarget.id)

      if (newArray.length !== props.cardsQuantity) {
        setChosenCards(newArray)
      } else {
        props.setGameOver(true)
      }
    } else {
      props.setGameOver(true)
    }
  }
  
  const Placeholder = [
    {cardId: 0, imgUrl: 'https://i.imgur.com/ryWkZ8C.png', title: 'card Title 1'},
    {cardId: 1, imgUrl: 'https://i.imgur.com/ryWkZ8C.png', title: 'card Title 2'},
    {cardId: 2, imgUrl: 'https://i.imgur.com/ryWkZ8C.png', title: 'card Title 3'},
    {cardId: 3, imgUrl: 'https://i.imgur.com/ryWkZ8C.png', title: 'card Title 4'},
    {cardId: 4, imgUrl: 'https://i.imgur.com/ryWkZ8C.png', title: 'card Title 5'},
    {cardId: 5, imgUrl: 'https://i.imgur.com/ryWkZ8C.png', title: 'card Title 6'},
    {cardId: 6, imgUrl: 'https://i.imgur.com/ryWkZ8C.png', title: 'card Title 7'},
    {cardId: 7, imgUrl: 'https://i.imgur.com/ryWkZ8C.png', title: 'card Title 8'},
  ]

  return (
    <>
      {Placeholder.sort(() => Math.random() - 0.5).map((item) =>
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

export default function PlayArea(props) {
  const [cardsQuantity, setCardsQuantity] = useState(8)

  return (
    <div id="play-area">
      {
        props.gameOver
        ? <DifficultMenu />
        : <CardsList
          setGameOver={props.setGameOver}
          cardsQuantity={cardsQuantity}
        />
      }
    </div>
  )
}
