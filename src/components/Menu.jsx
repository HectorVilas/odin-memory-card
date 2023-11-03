import '../styles/Menu.css'

export default function Menu(props) {
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