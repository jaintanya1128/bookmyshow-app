import React from "react";
import { FaHeart, FaClock } from "react-icons/fa";

function MovieDetails(props) {
  let {
    category,
    productionComp,
    poster_path,
    name,
    tagline,
    releaseDate,
    lang,
    revenue,
    avgRating,
    runtime,
    votingCount,
    onClick,
    desc
  } = { ...props };
  let categoryList = [];
  let productionCompList = [];
  if (category) {
    categoryList = (
      <div className="btn-pill-list">
        {category.map((cat, index) => {
          return (
            <button key={index} type="button" className="btn btn-info btn-pill">
              {cat}
            </button>
          );
        })}
      </div>
    );
  }

  if (productionComp) {
    productionCompList = (
      <div className="btn-pill-list">
        {productionComp.map((company, index) => {
          return (
            <button key={index} type="button" className="btn btn-info btn-pill">
              {company.name}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="container movie-details-wrap">
      <div className="row">
        <div className="col-md-4">
          <img src={poster_path} alt="movie banner" />
        </div>
        <div className="col-md-8">
          <h2 className="text-dark font-weight-bold">{name}</h2>
          <h5 className="font-italic font-weight-light text-dark">{tagline}</h5>
          <br />
          <h5 className="text-mute">Release Date: {releaseDate}</h5>
          <h5 className="text-mute">
            Language: {lang === "en" ? "English" : "--"}
          </h5>
          <h6 className="text-mute">Revenue: ${revenue}</h6>
          <hr />
          {categoryList}
          <br />
          <hr />
          <div>
            <span className="text-mute">Duration : </span>
            <span className="text-danger">
              <FaClock /> {runtime}
            </span>
          </div>
          <div>
            <span className="text-mute">Average Rating : </span>
            <span className="text-danger">
              <FaHeart /> {avgRating}
            </span>
          </div>
          <div>
            <span className="text-mute">Voting Count : </span>
            <span className="text-danger">{votingCount}</span>
          </div>
          <hr />
          <button type="button" className="btn btn-success" onClick={onClick}>
            Book Ticket
          </button>
        </div>
      </div>
      <div className="row">
        <hr className="w-100" />
        <div className="col-12">
          <h3> Summary: </h3>
          <p>{desc}</p>
        </div>
        <hr className="w-100" />
        <div className="col-12">
          <h3> Production Company: </h3>
          <br />
          {productionCompList}
          <br />
        </div>
        <br />
        <hr className="w-100" />
      </div>
    </div>
  );
}

MovieDetails.defaultProps = {
  category: [],
  productionComp: [],
  poster_path: "",
  name: "",
  tagline: "",
  releaseDate: "",
  lang: "",
  revenue: "",
  avgRating: "",
  runtime: "",
  votingCount: "",
  onClick: "",
  desc: ""
};

export default MovieDetails;
