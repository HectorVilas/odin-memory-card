import '../styles/Menu.css'

export default function Menu(props) {
  const isGameWon = props.chosenCards === props.cardsQuantity
  const isGameStarted = props.cardsQuantity === undefined
  const menuTitle = isGameStarted ? 'Welcome' : isGameWon ? 'You win' : 'You lose'
  const newGameQuantity = [4, 8, 12, 16, 20, 24]

  return (
    <div id='game-menu'>
      <h2>{menuTitle}</h2>
      {!isGameStarted && <p>{`You got ${props.chosenCards} out of ${props.cardsQuantity} cards`}</p>}
      {!isGameStarted && <p>{`High score: ${props.highScore}`}</p>}
      <p>{isGameStarted ? 'How many cards?' : 'Play again?'}</p>
      {
        newGameQuantity.map((quantity) => {
          return <button onClick={() => props.newGame(quantity)} key={quantity}>{quantity} cards</button>
        })
      }
    </div>
  )
}
