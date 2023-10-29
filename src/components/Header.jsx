import '../styles/Header.css'

export default function Header (props) {


  return (
    <header  className={props.darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Odin Memory Card</h1>
      <button className="dark-mode"></button>
    </header>
  )
}
