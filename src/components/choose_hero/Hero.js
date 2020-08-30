import React, {useEffect, useRef, useCallback} from 'react'
import './hero.scss'

export default function Hero({ urlImg, setFocus, index, focus }) {  
  const ref = useRef(null)

  useEffect(() => {
    if (focus) {
      ref.current.focus()
    }
  }, [focus])
  
  const handleSelect = useCallback(() => setFocus(index), [index, setFocus])

  return (
    <div
      className={`hero`}
      tabIndex={focus ? 0 : -1}
      onClick={handleSelect}
      onKeyDown={handleSelect}
      ref={ref}
    >
      <img
        className="hero__img"
        src={require(`../../img/players_icons/${urlImg}`)}
        alt=""
      />
    </div>
  )
}
