import '../styles/PlayArea.css'
import { useState } from 'react'
import Menu from './Menu'
import CardsList from './CardsList'

export default function PlayArea(props) {
  const [cardsQuantity, setCardsQuantity] = useState(undefined)
  const [chosenCards, setChosenCards] = useState([]);

  const Placeholder = []

  for (let i = 0; i < cardsQuantity; i++) {
    Placeholder.push({cardId: i, imgUrl: 'https://i.imgur.com/ryWkZ8C.png', title: `card Title ${i}`})
  }

  function newGame(quantity) {
    setCardsQuantity(quantity)
    setChosenCards([])
    props.setGameOver(false)
    props.setScore(0)
  }

  return (
    <div id="play-area">
      {
        props.gameOver
        ? <Menu
          cardsQuantity={cardsQuantity}
          newGame={newGame}
          chosenCards={chosenCards.length}
          highScore={props.highScore}
          setGameOver={props.setGameOver}
          />
          : <CardsList
          setGameOver={props.setGameOver}
          cardsQuantity={cardsQuantity}
          cardsList={Placeholder}
          chosenCards={chosenCards}
          setChosenCards={setChosenCards}
          score={props.score}
          setScore={props.setScore}
          highScore={props.highScore}
          setHighScore={props.setHighScore}
        />
      }
    </div>
  )
}
