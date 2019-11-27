import React from "react";
import { Card, Button } from "react-bootstrap";
import history from "../history";
import { FaHeart } from "react-icons/fa";

function MovieListingComponent(props) {
  const selectedMovieDetail = {
    id: props.id,
    name: props.name,
    lang: props.lang,
    poster_path: props.poster_path,
    releaseDate: props.releaseDate,
    desc: props.desc,
    avg_rating: props.avg_rating
  };

  return (
    <Card
      onClick={() => {
        props.onClick(selectedMovieDetail);
        history.push(`/movie/${props.id}`);
      }}
    >
      <Card.Img variant="top" src={props.poster_path} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Release Date: {props.releaseDate}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-danger">
          <FaHeart /> {props.avg_rating}
        </Card.Subtitle>
        <Card.Text>{props.desc}</Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieListingComponent;
