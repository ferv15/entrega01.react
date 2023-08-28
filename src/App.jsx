
import { useState } from 'react'
import BtnPhrase from './components/BtnPhrase'
import Quote from './components/Quote'
import './style/main.css'
import phases from './utils/phases.json'
import getRandomElemArray from './utils/getRandomElemArray'

function App() {

  const phraseRandom = getRandomElemArray(phases)
  const numberRandom = getRandomElemArray([5, 6, 7, 8])

const [quote, setQuote] = useState(phraseRandom)

const [numberBg,setNumberBg] = useState(numberRandom)

const bgStyle = {
  backgroundImage:`url(/image/fondo${numberBg}.png)`
}

  return (
    <>
    <div className='container' style={bgStyle}>
    <h1 className='titlle'>Galleta De La Fortuna</h1>
      <Quote 
      phases = {quote}
      />
      <BtnPhrase
      setQuote = {setQuote}
      phases = {phases}
      setNumberBg = {setNumberBg}
      />
      </div>
    </>
  )
}

export default App
