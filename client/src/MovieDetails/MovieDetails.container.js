import React, { Component } from "react";
import config from "../config.json";

import MovieDetailsComponent from "./MovieDetails.component";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: ""
    };
    this.bookTicketClickHandler = this.bookTicketClickHandler.bind(this);
    this.timeConvert = this.timeConvert.bind(this);
  }
  componentDidMount() {
    let urlArray = window.location.pathname.split("/");

    const movieId = urlArray[urlArray.length - 1];
    //console.log(movieId);

    fetch(`${config.apiUrl}/api/movies/${movieId}`)
      .then(response => response.json())
      .then(result => {
        //console.log(result);
        this.setState({ movieDetails: result.details });
      });
  }
  timeConvert(n) {
    // console.log(n);
    // console.log(typeof n);

    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    console.log(rhours);
    console.log(rminutes);

    return (
      num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s)."
    );
  }

  bookTicketClickHandler() {
    console.log("im clicked");
  }
  render() {
    return (
      <MovieDetailsComponent
        id={this.state.movieDetails.id}
        name={this.state.movieDetails.name}
        tagline={this.state.movieDetails.tagline}
        lang={this.state.movieDetails.lang}
        imgsrc={this.state.movieDetails.poster_path}
        releaseDate={this.state.movieDetails.release_date}
        desc={this.state.movieDetails.desc}
        avgRating={this.state.movieDetails.avg_rating}
        votingCount={this.state.movieDetails.voting_count}
        category={this.state.movieDetails.category}
        runtime={this.state.movieDetails.runtime}
        revenue={this.timeConvert(this.state.movieDetails.revenue)}
        productionComp={this.state.movieDetails.production_companies}
        onClick={this.bookTicketClickHandler}
      />
    );
  }
}

export default MovieDetails;
