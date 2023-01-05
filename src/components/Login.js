import React from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {

  let navigate = useNavigate()
  const changeToSignUp = () => {
    navigate('/signup');
  }

return (

<div className='login-form-container'>
      <div className='login-form'>
        <h2 id='main-text'> Zaloguj się i odkrywaj nowe filmy! </h2>
        <form className='form-content'>
          <div className="form-group">
            <label for="login-content">Login : </label>
            <input type="login" class="form-control" id="login-content" placeholder="  Podaj nazwę użytkownika" />
          </div>
          <div className="form-group">
            <label for="password-content">Hasło : </label>
            <input type="password" class="form-control" id="password-content" placeholder="  Podaj hasło" />
          </div>
          <button className='signin-button'>Zaloguj się</button>
        </form>
      </div>
      <div className='login-route'>
        Nie posiadasz jeszcze konta? Załóż je!
        <button className='signup-button' onClick={changeToSignUp}> Załóż nowe konto </button>
      </div>
      <div className='img'>
         <img src={'http://www.24hourmoviemarathon.com/wp-content/uploads/2014/11/imdb_top_250.jpg'} id='img-fill'/>
       </div>

    </div>

);
}

export default Login