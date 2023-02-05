import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

const Details = () => {
  const token = decodeToken(localStorage.getItem("token"));
  const rol = token?.role;
  let navigate = useNavigate();
  const { id } = useParams();
  const getFilmData = () => {
    axios({
      method: "get",
      url: `https://at.usermd.net/api/movies/${id}`,
    })
      .then((response) => setFilm(response.data))
      .catch((error) => console.log(error));
  };

  const [Film, setFilm] = useState({});
  useEffect(() => {
    getFilmData();
  });

  const deleteFilm = () => {
    axios({
      method: "delete",
      url: `https://at.usermd.net/api/movie/${Film.id}`,
    })
      .then((response) => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <div className="film" style={{ minHeight: "90vh" }}>
        <div className="film-img">
          <img src={Film.image} alt="ikona filmu" id="film-image" />
        </div>
        <div className="film-main">
          <div className="title">{Film.title}</div>
          <div className="film-descript">
            {Film.content}
            {rol === "admin" && (
              <button className="signup-button" onClick={deleteFilm}>
                {" "}
                Usuń film{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
