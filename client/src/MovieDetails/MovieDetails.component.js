import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart, FaFilm } from "react-icons/fa";
import history from "../history";

function MovieDetails(props) {
  return (
    <Container className="movie-details-wrap">
      <Row>
        <Col md={4}>
          <img src={props.imgsrc} alt="movie banner" />
        </Col>
        <Col md={8}>
          <h2 className="text-dark font-weight-bold">{props.name}</h2>
          <h5 className="font-italic font-weight-light text-dark">
            {props.tagline}
          </h5>
          <br />
          <h5 className="text-mute">Release Date: {props.releaseDate}</h5>
          <h5 className="text-mute">Language: {props.lang}</h5>
          <hr />
          <button type="button" className="btn btn-success btn-sm">
            {props.category}
          </button>
          {/* {props.category.map(c => {
            return (
              <button type="button" class="btn btn-success btn-sm">
                c
              </button>
            );
          })} */}
          <br />
          <hr />
          <div>
            <span className="text-mute">Duration : </span>
            <span className="text-danger">
              <FaFilm /> {props.runtime}
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
            className="btn btn-secondary"
            onClick={() => history.push(`/booking/${props.id}`)}
          >
            Book Ticket
          </button>
        </Col>
      </Row>
      <Row>
        <hr />
        <p>{props.desc}</p>
        <hr />
        {/* {props.productionComp.map(p => {
          return (
            <button type="button" class="btn btn-success btn-sm">
              p
            </button>
          );
        })} */}
      </Row>
    </Container>
  );
}

export default MovieDetails;
