import React, { useState, useEffect, useCallback } from 'react'
import './six_icons.scss'

export default function SixIcons() {
  let icons = [
    'mk-icon.png', 'angellist-brands.svg', 'angry-regular.svg',
    'apple-alt-solid.svg', 'baby-solid.svg'
  ]

  let [q, setQ] = useState(0)
  let [w, setW] = useState(0)
  let [e, setE] = useState(0)
  let [r, setR] = useState(0)
  let [t, setT] = useState(0)
  let [y, setY] = useState(0)

  const changeIcon = useCallback(event => {
    console.log('changeIcon');
      switch (event.key) {
        case 'q': q < 3 ? setQ(q + 1) : setQ(0)
          break
        case 'w': w < 3 ? setW(w + 1) : setW(0)
          break
        case 'e': e < 3 ? setE(e + 1) : setE(0)
          break
        case 'r': r < 3 ? setR(r + 1) : setR(0)
          break
        case 't': t < 3 ? setT(t + 1) : setT(0)
          break
        case 'y': y < 3 ? setY(y + 1) : setY(0)
          break
        default: return
      }    
    },[q,w,e,r,t,y])
  
  useEffect(() => {
    document.addEventListener('keydown', e => changeIcon(e), false)
    return () => document.removeEventListener('keydown', changeIcon, false)
  },[changeIcon])

  return (
    <div className="six-icons">
      <div className="six-icons__item">
        <img src={require(`../../img/six_icons/${icons[q]}`)} alt="" className="six-icons__img" />
      </div>
      <div className="six-icons__item">
        <img src={require(`../../img/six_icons/${icons[w]}`)} alt="" className="six-icons__img" />
      </div>
      <div className="six-icons__item">
        <img src={require(`../../img/six_icons/${icons[e]}`)} alt="" className="six-icons__img" />
      </div>
      <div className="six-icons__item">
        <img src={require(`../../img/six_icons/${icons[r]}`)} alt="" className="six-icons__img" />
      </div>
      <div className="six-icons__item">
        <img src={require(`../../img/six_icons/${icons[t]}`)} alt="" className="six-icons__img" />
      </div>
      <div className="six-icons__item">
        <img src={require(`../../img/six_icons/${icons[y]}`)} alt="" className="six-icons__img" />
      </div>
    </div>
  )
}
