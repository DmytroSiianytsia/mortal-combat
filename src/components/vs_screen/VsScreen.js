import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { fighters } from '../../components/choose_hero/icons'
import './vsScreen.scss'
import SixIcons from './SixIcons'

export default function VsScreen({ player1 }) {  
  let [goHome, setGoHome] = useState(false)
  let [player2, setPlayer2] = useState(0)
  let hero1 = fighters[player1]
  let hero2 = fighters[player2]

  useEffect(() => {
    let timer = setTimeout(() => setGoHome(true), 10000)
    setPlayer2(Math.floor(Math.random() * 25))
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {goHome && <Redirect to="/"/>}
      <img
        className="player1"
        src={require(`../../img/players/${hero1}`)}
        alt={`${hero1}`}
      />
      <div className="vs">VS</div>
      <img
        className="player2"
        src={require(`../../img/players/${hero2}`)}
        alt={`${hero2}`}
      />
      <SixIcons/>
    </>
  )
}
