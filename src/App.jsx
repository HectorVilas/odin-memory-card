import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighscore] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div id='app'>
      <Header darkMode={darkMode} />
      <div></div>
      <Footer score={score} highScore={highScore} darkMode={darkMode} />
    </div>
  )
}
