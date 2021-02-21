import React from 'react'

import "../../assets/scss/Button.scss"
export const Button = ({clas,children}) => {
  return (
    <button className={`button ${clas}`}>
      {children}
    </button>
  )
}
