import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import history from "../history";

function ShowsList(props) {
  return (
    <Container className="movie-shows-list">
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
                  onClick={() => {
                    props.selectedEventUpdater(event);
                    history.push(`/booking/${props.movieId}`);
                  }}
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
