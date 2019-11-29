import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
function BookTicket(props) {
  return (
    <Container>
      <Row>
        <Form className="select-seat-form col-md-4">
          <Form.Group controlId="no-of-seats">
            <Form.Label>How many Seats?</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Col md={4} className="text-mute">
          <Row>
            <Col>
              <span className="text-mute"> Show Date:</span>
              <span className="text-danger">{props.showDate}</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="text-mute"> Show Time:</span>
              <span className="text-danger">{props.showTime}</span>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <button
            className="btn btn-success btn-book-ticket"
            onClick={props.bookTicketClickHandler}
          >
            Book Ticket
          </button>
        </Col>
      </Row>
      <div className="seat-layout-wrap">
        {props.seatLayout.map((seat, index) => {
          if (seat !== "") {
            return (
              <span
                key={index}
                className="single-seat"
                onClick={() => props.singleSeatClickHandler(seat)}
              >
                {seat}
              </span>
            );
          } else {
            return <br key={index} />;
          }
        })}
        <div className="screen">
          <span className="text-mute text-small">All eyes this side</span>
        </div>
      </div>
    </Container>
  );
}

export default BookTicket;
