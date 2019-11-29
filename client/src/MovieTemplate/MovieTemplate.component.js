import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaFilm } from "react-icons/fa";
import BookTicket from "../BookTicket/BookTicket.container";
import ShowsList from "../ShowsList/ShowsList.container";

function MovieTemplate(props) {
  const [selectedEventState, setSelectedEventState] = useState({});

  return (
    <Container className="movie-shows-list">
      <Row>
        <Col md={4}>
          <img src={props.currentMovieDetails.poster_path} alt="movie banner" />
        </Col>
        <Col md={8}>
          <h2 className="text-dark font-weight-bold">
            {props.currentMovieDetails.name}
          </h2>
          <h5 className="font-italic font-weight-light text-dark">
            {props.currentMovieDetails.desc}
          </h5>
          <br />
          <h5 className="text-mute">
            <span className="text-mute"> Release Date:</span>
            <span className="text-danger">
              {props.currentMovieDetails.releaseDate}
            </span>
          </h5>
          <h5>
            <span className="text-mute">Average Rating : </span>
            <span className="text-danger">
              <FaFilm /> {props.currentMovieDetails.avg_rating}
            </span>
          </h5>
        </Col>
        <hr className="w-100" />
      </Row>
      <Switch>
        <Route
          path="/shows/:id"
          render={() => (
            <ShowsList
              selectedEventUpdater={selectedEvent => {
                setSelectedEventState(selectedEvent);
              }}
            />
          )}
        />
        <Route
          path="/booking/:id"
          render={() => (
            <BookTicket selectedEventDetails={selectedEventState} />
          )}
        />
      </Switch>
    </Container>
  );
}

export default MovieTemplate;
