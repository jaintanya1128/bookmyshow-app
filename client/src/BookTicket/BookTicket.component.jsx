import React from "react";

function BookTicket(props) {
  console.log(props.showError);
  return (
    <div className="container">
      <div className="row">
        <form className="select-seat-form col-md-4">
          <div className="form-group" id="no-of-seats">
            <div className="form-label d-inline">How many Seats?</div>
            <select
              className="form-control"
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
            </select>
          </div>
        </form>

        <div className="col-md-4 text-mute">
          <div className="row">
            <div className="col-12">
              <span className="text-mute"> Show Date:</span>
              <span className="text-danger">{props.showDate}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <span className="text-mute"> Show Time:</span>
              <span className="text-danger">{props.showTime}</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-success btn-book-ticket"
            onClick={props.bookTicketClickHandler}
          >
            Book Ticket
          </button>
        </div>
      </div>
      <div className="row">
        <p
          className="error"
          style={{ display: props.showError === false ? "none" : "block" }}
        >
          You are exceeding the maximum seat count selected. Please re-select
        </p>
      </div>
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
    </div>
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
