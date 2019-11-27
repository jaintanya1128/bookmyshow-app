import React, { Component } from "react";
import config from "../config.json";
import ShowsListComponent from "./ShowsList.component";

class ShowsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsList: [],
      currentMovieDetails: props.currentMovieDetails
    };
    //console.log(props.currentMovieDetails);
  }
  componentDidMount() {
    let urlArray = window.location.pathname.split("/");

    const movieId = urlArray[urlArray.length - 1];
    //console.log("movie id", movieId);

    fetch(`${config.apiUrl}/api/events/shows/movie/${movieId}`)
      .then(response => response.json())
      .then(result => {
        //console.log("result:", result);
        this.setState({ eventsList: result });
      });
  }
  render() {
    return (
      <ShowsListComponent
        movieDetails={this.state.currentMovieDetails}
        eventsList={this.state.eventsList}
      />
    );
  }
}

ShowsList.defaultProps = {
  movieDetails: [],
  eventsList: []
};
export default ShowsList;
