import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PlayArea from './components/PlayArea'
import Footer from './components/Footer'

export default function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  
  return (
    <div id='app'>
      <Header/>
      <PlayArea
        gameOver={gameOver}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        setGameOver={setGameOver}
      />
      <Footer
        score={score}
        highScore={highScore}
      />
    </div>
  )
}
