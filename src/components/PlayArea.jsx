import '../styles/PlayArea.css'
import { useEffect, useState } from 'react'
import Menu from './Menu'
import CardsList from './CardsList'

export default function PlayArea(props) {
  const [cardsQuantity, setCardsQuantity] = useState(undefined)
  const [chosenCards, setChosenCards] = useState([]);
  const [apiResponse, setApiResponse] = useState(undefined);
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
      const list = await response.json()
      setApiResponse(list)
    }
    fetchData()
  }, [])

  function newGame(quantity) {
    setApiResponse(apiResponse.sort(() => Math.random() - 0.5))
    const newCardsList = []
    for (let i = 0; i < quantity; i++) {
      newCardsList.push(apiResponse[i])
    }
    setCardsList(newCardsList)
    
    setCardsQuantity(quantity)
    setChosenCards([])
    props.setGameOver(false)
    props.setScore(0)
  }

  return (
    <div id="play-area">
      {
        apiResponse === undefined
        ? <p className='fetch-para'>Fetching data...</p>
        : props.gameOver
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
          cardsList={cardsList}
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
