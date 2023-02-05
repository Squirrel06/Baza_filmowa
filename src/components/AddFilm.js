import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFilm = () => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [genre, setGenre] = useState("");

  const onSubmitMovie = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "https://at.usermd.net/api/movies",
      data: { title, image: desc, content: genre },
    })
      .then((response) => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="add-movie-container">
      <h2 id="main-text"> Dodaj Film </h2>
      <div className="add-movie-content">
        <div className="add-movie-content-form">
          <form className="movie-form-content" onSubmit={onSubmitMovie}>
            <div className="movie-form-group">
              <label for="title-content">Tytuł filmu : </label>
              <input
                type="text"
                class="form-control"
                id="title-content"
                placeholder="Tytuł filmu"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="movie-form-group">
              <label for="desc-content">Obrazek : </label>
              <input
                type="textarea"
                class="form-control"
                id="desc-content"
                placeholder="Obrazek"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="movie-form-group">
              <label for="genre-content">Krótki opis : </label>
              <input
                type="text"
                class="form-control"
                id="genre-content"
                placeholder="Krótki opis"
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <button className="add-movie-btn">Dodaj Film</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFilm;
