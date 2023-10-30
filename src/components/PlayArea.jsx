import '../styles/PlayArea.css'

function DifficultMenu() {
  return (
    <div>
      <p>Difficult menu placeholder</p>
    </div>
  )
}

function Card(props) {
  return(
    <div id={`card-${props.cardId}`} className='card'>
      <img src={props.imgUrl} alt="" />
      <h2>{props.title}</h2>
    </div>
  )
}

function CardsList() {
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
      {Placeholder.map((item) =>
        <Card
          key={item.cardId}
          cardId={item.cardId}
          imgUrl={item.imgUrl}
          title={item.title}
        />
      )}
    </>
  )
}

export default function PlayArea(props) {
  
  return (
    <div id="play-area">
      { props.gameOver ? <DifficultMenu /> : <CardsList /> }
    </div>
  )
}
