import React, { Component } from "react";
import { CardGroup } from "react-bootstrap";
import MovieListingComponent from "./MovieListing.component";
import config from "../config.json";

class MovieListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    };
    console.log(props);
  }
  componentDidMount() {
    document.addEventListener("searched", e => {
      fetch(`${config.apiUrl}/api/movies/query/${e.detail}`)
        .then(response => response.json())
        .then(result => {
          console.log(result.data);

          this.setState({ movieList: result.data.details.movies });
        });
    });

    fetch(`${config.apiUrl}/api/movies`)
      .then(response => response.json())
      .then(result => {
        console.log(result.data);

        this.setState({ movieList: result.data.details.movies });
      });
  }

  render() {
    const productList = this.state.movieList.map(movie => {
      return (
        <MovieListingComponent
          key={movie.id}
          id={movie.id}
          name={movie.name}
          lang={movie.lang}
          poster_path={movie.poster_path}
          releaseDate={movie.release_date}
          desc={movie.desc}
          avg_rating={movie.avg_rating}
          onClick={this.props.onClick}
        />
      );
    });

    return <CardGroup>{productList}</CardGroup>;
  }
}

export default MovieListing;
