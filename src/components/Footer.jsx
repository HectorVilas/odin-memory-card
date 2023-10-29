import '../styles/Footer.css'

export default function Footer(props) {

  return (
    <footer className={props.darkMode ? 'dark-mode' : 'light-mode'}>
      <p>Score: {props.score}</p>
      <p>High Score: {props.highScore}</p>
    </footer>
  )
}
