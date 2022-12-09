import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='search-section'>
        <input type="text" className='search-form' placeholder='Wyszukaj film...'/>
      </div>
      <div className='login'>
        <button className='login-button'> Zaloguj się </button>
        <button className='login-button'> Zarejestruj się </button>
      </div>
    </div>
  )
}

export default Navbar