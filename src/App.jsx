import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PlayArea from './components/PlayArea'
import Footer from './components/Footer'

export default function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighscore] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [gameOver, setGameOver] = useState(true)
  
  return (
    <div id='app'>
      <Header
        darkMode={darkMode}
      />
      <PlayArea
        gameOver={gameOver}
        highScore={highScore}
        setHighscore={setHighscore}
        setDarkMode={setDarkMode}
        setGameOver={setGameOver}
      />
      <Footer
        score={score}
        highScore={highScore}
        darkMode={darkMode}
      />
    </div>
  )
}
