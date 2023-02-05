import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState("");
  const [Email, SetEmail] = useState("");

  let navigate = useNavigate();
  const changeToSignIn = () => {
    navigate("/signin");
  };

  const register = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/create",
      data: { name: Name, email: Email, password: Password },
    })
      .then((response) => navigate("/signin"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="signup-container">
      <h2 id="main-text"> Zarejestruj się w kilku prostych krokach </h2>
      <form className="form-content">
        <div className="form-group">
          <label for="login-content">*Login : </label>
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
          <label for="name-content">*Nazwa : </label>
          <input
            type="text"
            class="form-control"
            id="name-content"
            placeholder="  Podaj nazwę"
          />
        </div>
        <div className="form-group">
          <label for="email-content">*Email : </label>
          <input
            type="email"
            class="form-control"
            id="email-content"
            placeholder="  Email"
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="password-content">*Hasło : </label>
          <input
            type="password"
            class="form-control"
            id="password-content"
            placeholder="  Podaj hasło"
            value={Password}
            onChange={(e) => SetPassword(e.target.value)}
          />
        </div>
        * pola obowiązkowe
        <button className="signup-button" onClick={register}>
          Zarejestruj się
        </button>
      </form>
      <div className="login-route">
        Jesteś użytownikiem naszej bazy? Zaloguj się!
        <button className="signup-button" onClick={changeToSignIn}>
          {" "}
          Zaloguj się{" "}
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

export default Signup;
