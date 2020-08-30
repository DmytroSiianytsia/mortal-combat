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
      switch (event.key) {
        case 'q': q < 4 ? setQ(q + 1) : setQ(0)
          break
        case 'w': w < 4 ? setW(w + 1) : setW(0)
          break
        case 'e': e < 4 ? setE(e + 1) : setE(0)
          break
        case 'r': r < 4 ? setR(r + 1) : setR(0)
          break
        case 't': t < 4 ? setT(t + 1) : setT(0)
          break
        case 'y': y < 4 ? setY(y + 1) : setY(0)
          break
        default: return
      }    
    },[q,w,e,r,t,y])
  
  useEffect(() => {
    document.addEventListener('keydown', changeIcon, false)
    return () => document.removeEventListener('keydown', changeIcon, false)
  }, [changeIcon])
  
  return (
    <div className="six-icons">
      {[q, w, e, r, t, y].map((item, index) => {
        return (
          <div className="six-icons__item" key={index}>
            <img src={require(`../../img/six_icons/${icons[item]}`)} alt="" className="six-icons__img" />
          </div>
        )
      })}
    </div>
  )

  // return (
  //   <div className="six-icons">
      // <div className="six-icons__item">
      //   <img src={require(`../../img/six_icons/${icons[q]}`)} alt="" className="six-icons__img" />
      // </div>
  //     <div className="six-icons__item">
  //       <img src={require(`../../img/six_icons/${icons[w]}`)} alt="" className="six-icons__img" />
  //     </div>
  //     <div className="six-icons__item">
  //       <img src={require(`../../img/six_icons/${icons[e]}`)} alt="" className="six-icons__img" />
  //     </div>
  //     <div className="six-icons__item">
  //       <img src={require(`../../img/six_icons/${icons[r]}`)} alt="" className="six-icons__img" />
  //     </div>
  //     <div className="six-icons__item">
  //       <img src={require(`../../img/six_icons/${icons[t]}`)} alt="" className="six-icons__img" />
  //     </div>
  //     <div className="six-icons__item">
  //       <img src={require(`../../img/six_icons/${icons[y]}`)} alt="" className="six-icons__img" />
  //     </div>
  //   </div>
  // )
}
