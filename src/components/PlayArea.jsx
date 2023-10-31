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

export default function PlayArea(props) {
  const [cardsQuantity, setCardsQuantity] = useState(4)

  const Placeholder = []

  for (let i = 0; i < cardsQuantity; i++) {
    Placeholder.push({cardId: i, imgUrl: 'https://i.imgur.com/ryWkZ8C.png', title: `card Title ${i}`})
  }

  return (
    <div id="play-area">
      {
        props.gameOver
        ? <DifficultMenu />
        : <CardsList
          setGameOver={props.setGameOver}
          cardsQuantity={cardsQuantity}
          cardsList={Placeholder}
        />
      }
    </div>
  )
}
