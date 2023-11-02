import '../styles/Footer.css'

export default function Footer(props) {

  return (
    <footer>
      <p>Score: {props.score}</p>
      <p>High Score: {props.highScore}</p>
    </footer>
  )
}
