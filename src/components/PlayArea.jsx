import '../styles/PlayArea.css'
import { useState } from 'react'

function Menu(props) {
  const isGameWon = props.chosenCards === props.cardsQuantity
  const isGameStarted = props.cardsQuantity === undefined
  const menuTitle = isGameStarted ? 'Welcome' : isGameWon ? 'You win' : 'You lose'

  return (
    <div id='game-menu'>
      <h2>{menuTitle}</h2>
      {!isGameStarted && <p>{`You got ${props.chosenCards} out of ${props.cardsQuantity} cards`}</p>}
      {!isGameStarted && <p>{`High score: ${props.highScore}`}</p>}
      <p>{isGameStarted ? 'How many cards?' : 'Play again?'}</p>
      <button onClick={() => props.newGame(4)}>4 cards</button>
      <button onClick={() => props.newGame(8)}>8 cards</button>
      <button onClick={() => props.newGame(12)}>12 cards</button>
      <button onClick={() => props.newGame(16)}>16 cards</button>
      <button onClick={() => props.newGame(20)}>20 cards</button>
      <button onClick={() => props.newGame(24)}>24 cards</button>
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
