import React from "react";
import { Link } from "react-router-dom";

const Film = ({ imgPath, title, descript, grade, genre, id }) => {
  return (
    <div className="film">
      <div className="film-img">
        <img
          src={imgPath}
          alt="ikona filmu"
          id="film-image"
          width="auto"
          height="200px"
        />
      </div>
      <div className="film-main">
        <div className="title">{title}</div>
        <div className="film-descript">{descript}</div>
        <div className="film-grade">
          <img
            src={require("../assets/images/star.png")}
            alt="ikona oceny filmu"
            id="star-img"
          />
          {grade}
        </div>

        <Link to={`details/${id}`}>Pokaż szczegóły</Link>
      </div>
    </div>
  );
};

export default Film;
