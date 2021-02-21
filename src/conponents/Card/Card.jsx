import React from 'react'

import "../../assets/scss/Card.scss"

export const Card = ({path,title,children}) => {
  return (
    <div className="card">
      <img src={path} alt="icon_1" className="card__icon"/>
      <p className="card__title">{title}</p>
      <p className="card__text">{children}</p>
    </div>
  )
}
