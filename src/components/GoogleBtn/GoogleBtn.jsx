import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import css from './GoogleBtn.module.css'
import { NavLink } from 'react-router-dom'

const GoogleBtn = () => {
  return (
    <NavLink className={css.Google} to="/auth/google"><div className={css.icon}><FcGoogle/></div><p>Sign in with Google</p></NavLink>
  )
}

export default GoogleBtn
