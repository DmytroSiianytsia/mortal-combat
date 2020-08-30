import React from 'react'
import { fighters } from './icons'
import './selected_hero.scss'

export default function SelectedHero({ index }) {
  return (    
    <div className="selected-hero">
      <img
        className="selected-hero__img"
        src={require(`../../img/players/${fighters[index]}`)}
        alt=""
      />
    </div>
  )
}
