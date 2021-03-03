import React from 'react'

import { NavLink } from "react-router-dom"

export const Logo = () => {
  return <h3><NavLink className="logo__link" to="/">AppLogo</NavLink></h3>
}
