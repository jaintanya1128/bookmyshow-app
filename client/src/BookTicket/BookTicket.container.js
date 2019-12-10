import React, { Component } from "react";
import BookTicketComponent from "./BookTicket.component.jsx";
import config from "../config.json";

class BookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxSeatBookingCount: 1,
      bookedSeats: [],
      seatLayout: [],
      showError: false
    };
    this.bookTicketClickHandler = this.bookTicketClickHandler.bind(this);
    this.singleSeatClickHandler = this.singleSeatClickHandler.bind(this);
    this.bookingSeatCountChangeHandler = this.bookingSeatCountChangeHandler.bind(
      this
    );
    console.log("BookTicket-container: constructor");
  }

  componentDidMount() {
    let seatLayouttemp = [];
    let rowName = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];
    for (
      let row = 0;
      row < this.props.selectedEventDetails.hall.total_rows;
      row++
    ) {
      for (
        let column = 1;
        column < this.props.selectedEventDetails.hall.total_columns;
        column++
      ) {
        seatLayouttemp.push(`${rowName[row]}${column}`);
      }
      seatLayouttemp.push("");
    }

    this.props.selectedEventDetails.booked_seat.forEach(seat =>
      seatLayouttemp.forEach((teamSeat, index) => {
        if (seat == teamSeat) {
          seatLayouttemp[index] = `${teamSeat}:booked`;
        }
      })
    );

    this.setState({ seatLayout: seatLayouttemp });
  }

  bookingSeatCountChangeHandler(event) {
    this.setState({
      maxSeatBookingCount: event.target.value
    });
  }

  bookTicketClickHandler() {
    //console.log(this.state.bookedSeats);
    try {
      fetch(
        `${config.apiUrl}/api/events/shows/${this.props.selectedEventDetails.show_id}`,
        {
          method: "PATCH",
          body: JSON.stringify({ booked_seat: this.state.bookedSeats }),
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(response => response.json())
        .then(response => {
          console.log(response);
        });
    } catch (err) {
      console.log(err);
    }
  }

  singleSeatClickHandler(event) {
    const seat = event.target.value;
    if (this.state.bookedSeats.length < this.state.maxSeatBookingCount) {
      event.currentTarget.classList.add("selected");

      let tempArry = this.state.seatLayout;

      tempArry[
        tempArry.map((x, i) => [i, x]).filter(x => x[1] == seat)[0][0]
      ] = `${seat}:booked`;

      this.setState({
        seatLayout: [...tempArry]
      });

      this.setState(previousState => ({
        bookedSeats: [...previousState.bookedSeats, seat]
      }));
    } else if (
      this.state.bookedSeats.length == this.state.maxSeatBookingCount
    ) {
      this.setState({
        showError: true
      });
    }
  }

  render() {
    console.log("bookTicket:render");
    let { selectedEventDetails } = this.props;
    return (
      <BookTicketComponent
        totalRows={selectedEventDetails.hall.total_rows}
        totalRows={selectedEventDetails.hall.total_columns}
        showDate={selectedEventDetails.show_date}
        showTime={selectedEventDetails.show_time}
        bookTicketClickHandler={this.bookTicketClickHandler}
        singleSeatClickHandler={this.singleSeatClickHandler}
        seatLayout={this.state.seatLayout}
        bookingSeatCountChangeHandler={this.bookingSeatCountChangeHandler}
        showError={this.state.showError}
      />
    );
  }
}

BookTicket.defaultProps = {};

export default BookTicket;
