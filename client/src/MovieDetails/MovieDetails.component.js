import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart, FaClock } from "react-icons/fa";

function MovieDetails(props) {
  let categoryList = [];
  let productionCompList = [];
  if (props.category) {
    categoryList = (
      <div className="btn-pill-list">
        {props.category.map((cat, index) => {
          return (
            <button key={index} type="button" className="btn btn-info btn-pill">
              {cat}
            </button>
          );
        })}
      </div>
    );
  }

  if (props.productionComp) {
    productionCompList = (
      <div className="btn-pill-list">
        {props.productionComp.map((company, index) => {
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
    <Container className="movie-details-wrap">
      <Row>
        <Col md={4}>
          <img src={props.poster_path} alt="movie banner" />
        </Col>
        <Col md={8}>
          <h2 className="text-dark font-weight-bold">{props.name}</h2>
          <h5 className="font-italic font-weight-light text-dark">
            {props.tagline}
          </h5>
          <br />
          <h5 className="text-mute">Release Date: {props.releaseDate}</h5>
          <h5 className="text-mute">
            Language: {props.lang == "en" ? "English" : "--"}
          </h5>
          <h6 className="text-mute">Revenue: ${props.revenue}</h6>
          <hr />
          {categoryList}
          <br />
          <hr />
          <div>
            <span className="text-mute">Duration : </span>
            <span className="text-danger">
              <FaClock /> {props.runtime}
            </span>
          </div>
          <div>
            <span className="text-mute">Average Rating : </span>
            <span className="text-danger">
              <FaHeart /> {props.avgRating}
            </span>
          </div>
          <div>
            <span className="text-mute">Voting Count : </span>
            <span className="text-danger">{props.votingCount}</span>
          </div>
          <hr />
          <button
            type="button"
            className="btn btn-success"
            onClick={props.onClick}
          >
            Book Ticket
          </button>
        </Col>
      </Row>
      <Row>
        <hr className="w-100" />
        <div>
          <h3> Summary: </h3>
          <p>{props.desc}</p>
        </div>
        <hr className="w-100" />
        <div>
          <h3> Production Company: </h3>
          <br />
          {productionCompList}
          <br />
        </div>
        <br />
        <hr className="w-100" />
      </Row>
    </Container>
  );
}

export default MovieDetails;
