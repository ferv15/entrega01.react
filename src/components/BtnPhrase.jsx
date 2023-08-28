import React from 'react'
import getRandomElemArray from '../utils/getRandomElemArray'

const BtnPhrase = ({setQuote, phases, setNumberBg }) => {
    const handleRandomPhrase = () => {
        setQuote(getRandomElemArray(phases))
        setNumberBg(getRandomElemArray([5, 6, 7, 8]))
    }
    return (
        <button className='btn' onClick={handleRandomPhrase}>Random</button>
    )
}

export default BtnPhrase