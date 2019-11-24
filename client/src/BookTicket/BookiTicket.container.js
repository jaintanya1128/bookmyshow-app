import React, { Component } from "react";
import config from "../config.json";
import BookTicketComponent from "./BookTicket.component";

class BookTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: ""
    };
  }
  componentDidMount() {
    let urlArray = window.location.pathname.split("/");

    const movieId = urlArray[urlArray.length - 1];
    console.log(movieId);

    fetch(`${config.apiUrl}/api/shows/movie/${movieId}`)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({ booking: result.details });
      });
  }
  render() {
    return <BookTicketComponent />;
  }
}

export default BookTicket;
