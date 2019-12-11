import React from "react";
import { Card, Button } from "react-bootstrap";
import history from "../history";
import { FaHeart } from "react-icons/fa";

function MovieListingComponent(props) {
  // console.log("Movie Llisting");
  // console.log(props);
  const selectedMovieDetail = { ...props };
  let { id, poster_path, name, releaseDate, avg_rating, desc } = { ...props };

  return (
    <Card
      onClick={() => {
        console.log("Movie Llisting: movie clicked");
        console.log(this);
        props.onClick(selectedMovieDetail);
        history.push(`/movie/${id}`);
      }}
    >
      <Card.Img variant="top" src={poster_path} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Release Date: {releaseDate}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-danger">
          <FaHeart /> {avg_rating}
        </Card.Subtitle>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieListingComponent;
