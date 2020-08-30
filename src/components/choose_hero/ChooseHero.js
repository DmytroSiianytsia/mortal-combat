import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import './choose_hero.scss'
import Hero from './Hero'
import { icons } from './icons'
import useRovFocus from './useRoveFocus'
import SelectedHero from './SelectedHero'

export default function Choose_hero({ setPlayer1 }) {
  let [focus, setFocus] = useRovFocus(0)
  let [redirectToVsScreen, setRedirectToVsScreen] = useState(false)  

  const goToVsScreen = (e) => {
    if (e.key === 'Enter') {      
      setRedirectToVsScreen(true)      
    }
  }

  useEffect(() => {    
    document.addEventListener('keydown', goToVsScreen);    
    setPlayer1(focus)
    return () => {
      document.removeEventListener('keydown', goToVsScreen)
    }
  }, [redirectToVsScreen, setRedirectToVsScreen, setPlayer1])

  return (
    <>
      {redirectToVsScreen && <Redirect to='/vs' />}
      <h1 className="field__title">Select your fighter</h1>
      <div className="field__left-gate"></div>
      <div className="field__right-gate"></div>
      <div className="field__heroes">
        {icons.map((icon, index) =>
          < Hero
            urlImg={icon}
            key={icon}
            index={index}
            focus={focus === index}
            setFocus={setFocus}
          />
        )}
        <SelectedHero index={focus} />
      </div>
    </>
  )
}
