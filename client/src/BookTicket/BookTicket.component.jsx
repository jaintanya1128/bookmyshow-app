import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
function BookTicket(props) {
  console.log(props.showError);
  return (
    <Container>
      <Row>
        <Form className="select-seat-form col-md-4">
          <Form.Group controlId="no-of-seats">
            <Form.Label>How many Seats?</Form.Label>
            <Form.Control
              as="select"
              onChange={props.bookingSeatCountChangeHandler}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
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
      <Row>
        <p
          className="error"
          style={{ display: props.showError == false ? "none" : "block" }}
        >
          You are exceeding the maximum seat count selected. Please re-select
        </p>
      </Row>
      <div className="seat-layout-wrap">
        {props.seatLayout.map((seat, index) => {
          if (seat !== "") {
            return (
              <button
                key={index}
                className="single-seat"
                onClick={props.singleSeatClickHandler}
                disabled={seat.includes(":booked") ? true : false}
                value={
                  seat.includes(":booked") ? seat.replace(":booked", "") : seat
                }
              >
                {seat.includes(":booked") ? seat.replace(":booked", "") : seat}
              </button>
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
BookTicket.defaultProps = {
  selectedEventDetails: {
    booked_seat: [],
    show_date: "",
    show_time: "",
    status: "",
    theater: "",
    theater_address: "",
    total_seat_count: 0,
    hall: {}
  }
};
export default BookTicket;
