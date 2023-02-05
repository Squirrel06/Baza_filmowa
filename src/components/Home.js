import React from "react";
import Film from "../components/Film";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [filmList, setFilmList] = useState([]);
  const getFilms = () => {
    axios({
      method: "get",
      url: "https://at.usermd.net/api/movies",
    })
      .then((response) => setFilmList(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div className="main">
      <div className="navbar-logo">
        <Logo />
        <Navbar />
      </div>
      <div className="film-section">
        {filmList?.map((film) => (
          <Film
            id={film.id}
            imgPath={film?.image}
            title={film?.title}
            descript={film?.content}
            /*genre={film?.genre}
            grade={film?.grade}*/
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
