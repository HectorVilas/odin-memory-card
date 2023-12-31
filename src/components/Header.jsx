import { useEffect, useState } from 'react'
import '../styles/Header.css'

export default function Header () {
  const [darkTheme, setDarkTheme] = useState(false)

  function toggleDarkTheme() {
    setDarkTheme((theme) => !theme)
  }

  useEffect(() => {
    const root = document.querySelector(':root')

    darkTheme === false
      ? root.classList.remove('dark-theme')
      : root.classList.add('dark-theme')
  }, [darkTheme])

  return (
    <header>
      <h1>Odin Memory Card</h1>
      <button className="dark-mode" onClick={toggleDarkTheme}></button>
    </header>
  )
}
