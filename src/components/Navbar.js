import React from "react";
import { useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";
import axios from "axios";

const Navbar = () => {
  let navigate = useNavigate();
  const routeChangeSignIn = () => {
    navigate("/signin");
  };

  const routeChangeSignUp = () => {
    navigate("/signup");
  };
  const routeToAddFilm = () => {
    navigate("/add");
  };

  const logOut = () => {
    const token = decodeToken(localStorage.getItem("token"));

    axios({
      method: "delete",
      url: `https://at.usermd.net/api/user/logout/${token.userId}`,
      data: { userId: token.userId },
    })
      .then((response) => {
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const isNotLog = isExpired(localStorage.getItem("token"));
  return (
    <div className="navbar">
      <div className="search-section">
        <input
          type="text"
          className="search-form"
          placeholder="Wyszukaj film..."
        />
      </div>
      <div className="login">
        {isNotLog && (
          <>
            <button className="login-button" onClick={routeChangeSignIn}>
              {" "}
              Zaloguj się{" "}
            </button>
            <button className="login-button" onClick={routeChangeSignUp}>
              {" "}
              Zarejestruj się{" "}
            </button>
          </>
        )}
        {!isNotLog && (
          <>
            <button className="login-button" onClick={logOut}>
              {" "}
              Wyloguj się{" "}
            </button>
            <button className="login-button" onClick={routeToAddFilm}>
              {" "}
              Dodaj film{" "}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
