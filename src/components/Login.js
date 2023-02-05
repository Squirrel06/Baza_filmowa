import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState("");

  let navigate = useNavigate();
  const changeToSignUp = () => {
    navigate("/signup");
  };

  const register = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/auth",
      data: { login: Name, password: Password },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2 id="main-text"> Zaloguj się i odkrywaj nowe filmy! </h2>
        <form className="form-content">
          <div className="form-group">
            <label for="login-content">Login : </label>
            <input
              type="login"
              class="form-control"
              id="login-content"
              placeholder="  Podaj nazwę użytkownika"
              value={Name}
              onChange={(e) => SetName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="password-content">Hasło : </label>
            <input
              type="password"
              class="form-control"
              id="password-content"
              placeholder="  Podaj hasło"
              value={Password}
              onChange={(e) => SetPassword(e.target.value)}
            />
          </div>
          <button className="signin-button" onClick={register}>
            Zaloguj się
          </button>
        </form>
      </div>
      <div className="login-route">
        Nie posiadasz jeszcze konta? Załóż je!
        <button className="signup-button" onClick={changeToSignUp}>
          {" "}
          Załóż nowe konto{" "}
        </button>
      </div>
      <div className="img">
        <img
          src={
            "http://www.24hourmoviemarathon.com/wp-content/uploads/2014/11/imdb_top_250.jpg"
          }
          alt="Tło"
          id="img-fill"
        />
      </div>
    </div>
  );
};

export default Login;
