import React, { Component } from "react";
import BookTicketComponent from "./BookTicket.component";
class BookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxSeatBookingCount: 0,
      bookedSeats: []
    };
    this.bookTicketClickHandler = this.bookTicketClickHandler.bind(this);
    this.singleSeatClickHandler = this.singleSeatClickHandler.bind(this);
    console.log(props);
  }
  componentDidMount() {
    console.log("booking: componentDidMount");
  }

  bookingSeatCountChangeHandler(count) {
    this.setState({
      maxSeatBookingCount: count
    });
  }
  bookTicketClickHandler() {
    console.log("im clicked to book final tickets");
  }
  singleSeatClickHandler(seat) {
    this.setState({
      bookedSeats: [...this.state.bookedSeats, seat]
    });
  }

  render() {
    let seatLayout = [];
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
        seatLayout.push(`${rowName[r]}${c}`);
      }
      seatLayout.push("");
    }
    return (
      <BookTicketComponent
        totalRows={this.props.selectedEventDetails.hall.total_rows}
        totalRows={this.props.selectedEventDetails.hall.total_columns}
        showDate={this.props.selectedEventDetails.show_date}
        showTime={this.props.selectedEventDetails.show_time}
        bookTicketClickHandler={this.bookTicketClickHandler}
        singleSeatClickHandler={this.singleSeatClickHandler}
        seatLayout={seatLayout}
      />
    );
  }
}
BookTicket.defaultProps = {};
export default BookTicket;
