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
  }
  componentDidMount() {
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
          imgsrc={movie.poster_path}
          releaseDate={movie.release_date}
          desc={movie.desc}
          avg_rating={movie.avg_rating}
        />
      );
    });

    return <CardGroup>{productList}</CardGroup>;
  }
}

export default MovieListing;
