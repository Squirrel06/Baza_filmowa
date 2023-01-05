import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  let navigate = useNavigate()
  const routeChangeSignIn = () =>{
    navigate('/signin')
  }

  const routeChangeSignUp = () =>{
    navigate('/signup')
  }

  return (
    <div className='navbar'>
      <div className='search-section'>
        <input type="text" className='search-form' placeholder='Wyszukaj film...'/>
      </div>
      <div className='login'>
        <button className='login-button' onClick={routeChangeSignIn}> Zaloguj się </button>
        <button className='login-button' onClick={routeChangeSignUp}> Zarejestruj się </button>
      </div>
    </div>
  )
}

export default Navbar