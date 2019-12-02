import React, { Component } from "react";
import BookTicketComponent from "./BookTicket.component";
import config from "../config.json";

class BookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxSeatBookingCount: 0,
      bookedSeats: [],
      seatLayout: []
    };
    this.bookTicketClickHandler = this.bookTicketClickHandler.bind(this);
    this.singleSeatClickHandler = this.singleSeatClickHandler.bind(this);
  }
  componentDidMount() {
    console.log("booking: componentDidMount");
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
    for (let r = 0; r < this.props.selectedEventDetails.hall.total_rows; r++) {
      for (
        let c = 1;
        c < this.props.selectedEventDetails.hall.total_columns;
        c++
      ) {
        seatLayouttemp.push(`${rowName[r]}${c}`);
      }
      seatLayouttemp.push("");
    }

    this.props.selectedEventDetails.booked_seat.forEach(e1 =>
      seatLayouttemp.forEach((e2, i) => {
        if (e1 == e2) {
          seatLayouttemp[i] = `${e2}:booked`;
        }
      })
    );

    this.setState({ seatLayout: seatLayouttemp });
  }

  // shouldComponentUpdate() {
  //   if (this.state.bookedSeats.length === 0) {
  //     return false;
  //   }
  // }

  bookingSeatCountChangeHandler(count) {
    this.setState({
      maxSeatBookingCount: count
    });
  }
  bookTicketClickHandler() {
    console.log("im clicked to book final tickets");
    console.log(this.state.bookedSeats);
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
  singleSeatClickHandler(seat) {
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
  }

  render() {
    console.log("booking container: render");
    console.log(this.state.bookedSeats);
    return (
      <BookTicketComponent
        totalRows={this.props.selectedEventDetails.hall.total_rows}
        totalRows={this.props.selectedEventDetails.hall.total_columns}
        showDate={this.props.selectedEventDetails.show_date}
        showTime={this.props.selectedEventDetails.show_time}
        bookTicketClickHandler={this.bookTicketClickHandler}
        singleSeatClickHandler={this.singleSeatClickHandler}
        seatLayout={this.state.seatLayout}
        bookedSeats={this.state.bookedSeats}
      />
    );
  }
}
BookTicket.defaultProps = {};
export default BookTicket;
