import React, { Component } from "react";
import config from "../config.json";
import ShowsListComponent from "./ShowsList.component";

class ShowsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsList: [],
      movieID: 0
    };
  }
  componentDidMount() {
    let urlArray = window.location.pathname.split("/");

    const movieId = urlArray[urlArray.length - 1];
    //console.log("movie id", movieId);
    this.setState({ movieID: movieId });

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
        eventsList={this.state.eventsList}
        selectedEventUpdater={this.props.selectedEventUpdater}
        movieId={this.state.movieID}
      />
    );
  }
}

ShowsList.defaultProps = {
  eventsList: []
};
export default ShowsList;
