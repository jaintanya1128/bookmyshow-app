import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFilm, FaHeart } from "react-icons/fa";

function ShowsList(props) {
  console.log(props);
  return (
    <Container className="movie-details-wrap">
      <Row>
        <Col md={4}>
          <img src={props.movieDetails.poster_path} alt="movie banner" />
        </Col>
        <Col md={8}>
          <h2 className="text-dark font-weight-bold">
            {props.movieDetails.name}
          </h2>
          <h5 className="font-italic font-weight-light text-dark">
            {props.movieDetails.desc}
          </h5>
          <br />
          <h5 className="text-mute">
            Release Date: {props.movieDetails.releaseDate}
          </h5>
          <h5>
            <span className="text-mute">Average Rating : </span>
            <span className="text-danger">
              <FaFilm /> {props.movieDetails.avg_rating}
            </span>
          </h5>
        </Col>
        <hr className="w-100" />
      </Row>
      {props.eventsList.length > 0 &&
        props.eventsList.map((event, index) => {
          return (
            <Row key={index}>
              <FaHeart className="text-danger mt-1" />
              <Col md={4}>
                <h4>{event.theater}</h4>
                <h6>{event.theater_address}</h6>
              </Col>
              <Col md={7}>
                <button
                  type="button"
                  className="btn btn-info btn-pill mb-3"
                  //onClick={}
                >
                  {event.show_date} - {event.show_time}
                </button>
              </Col>
              <hr className="w-100" />
            </Row>
          );
        })}
    </Container>
  );
}

export default ShowsList;
