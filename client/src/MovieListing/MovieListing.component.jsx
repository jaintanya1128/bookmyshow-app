import React from "react";
import history from "../history";
import { FaHeart } from "react-icons/fa";

function MovieListingComponent(props) {
  // console.log("Movie Llisting");
  // console.log(props);
  const selectedMovieDetail = { ...props };
  let { id, poster_path, name, releaseDate, avg_rating, desc } = { ...props };

  return (
    <div
      className="card"
      onClick={() => {
        console.log("Movie Llisting: movie clicked");
        console.log(this);
        props.onClick(selectedMovieDetail);
        history.push(`/movie/${id}`);
      }}
    >
      <img className="card-img-top" src={poster_path} />
      <div className="card-body">
        <div className="card-title">{name}</div>
        <div className="mb-2 text-muted card-subtitle">
          Release Date: {releaseDate}
        </div>
        <div className="mb-2 text-danger card-subtitle">
          <FaHeart /> {avg_rating}
        </div>
        <div className="card-text">{desc}</div>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>
  );
}

export default MovieListingComponent;
