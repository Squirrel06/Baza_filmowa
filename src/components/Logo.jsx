import React from 'react'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={require('../assets/images/movie-icon.png')} alt='logo bazy' id='movie-logo'/>
      <h1>Baza Filmowa</h1>
    </div>
  )
}

export default Logo