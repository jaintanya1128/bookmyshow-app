import React, { Component } from "react";
import { CardGroup, Container } from "react-bootstrap";
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
    document.addEventListener("searched", e => {
      fetch(`${config.apiUrl}/api/movies/query/${e.detail}`)
        .then(response => response.json())
        .then(result => {
          //console.log(result.data);
          this.setState({ movieList: result.data.details.movies });
        })
        .catch(err => {
          console.log(err.message);
        });
    });

    fetch(`${config.apiUrl}/api/movies`)
      .then(response => response.json())
      .then(result => {
        //console.log(result.data);
        this.setState({ movieList: result.data.details.movies });
      })
      .catch(err => {
        console.log(err.message);
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

    return (
      <Container>
        <CardGroup>{productList}</CardGroup>
      </Container>
    );
  }
}

MovieListing.defaultProps = {
  key: 0,
  id: 0,
  name: "",
  lang: "",
  poster_path: "",
  releaseDate: "",
  desc: "",
  avg_rating: 0
};

export default MovieListing;
