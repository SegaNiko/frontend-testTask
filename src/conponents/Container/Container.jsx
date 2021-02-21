import React from 'react'

import "../../assets/scss/Container.scss"

export const Container = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}
