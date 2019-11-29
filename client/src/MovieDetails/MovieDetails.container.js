import React, { Component } from "react";
import config from "../config.json";
import history from "../history";

import MovieDetailsComponent from "./MovieDetails.component";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: props.currentMovieDetails
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
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);

    return `${rhours} hour(s) and ${rminutes} minute(s).`;
  }

  bookTicketClickHandler() {
    history.push(`/shows/${this.state.movieDetails.id}`);
  }
  render() {
    return (
      <MovieDetailsComponent
        id={this.state.movieDetails.id}
        name={this.state.movieDetails.name}
        tagline={this.state.movieDetails.tagline}
        lang={this.state.movieDetails.lang}
        poster_path={this.state.movieDetails.poster_path}
        releaseDate={this.state.movieDetails.release_date}
        desc={this.state.movieDetails.desc}
        avgRating={this.state.movieDetails.avg_rating}
        votingCount={this.state.movieDetails.voting_count}
        category={this.state.movieDetails.category}
        runtime={this.timeConvert(this.state.movieDetails.runtime)}
        revenue={this.state.movieDetails.revenue}
        productionComp={this.state.movieDetails.production_companies}
        onClick={this.bookTicketClickHandler}
      />
    );
  }
}

MovieDetails.defaultProps = {
  name: "",
  tagline: "",
  lang: "",
  poster_path: "",
  releaseDate: "",
  desc: "",
  avgRating: 0,
  votingCount: 0,
  category: [],
  runtime: 0,
  productionComp: []
};

export default MovieDetails;
