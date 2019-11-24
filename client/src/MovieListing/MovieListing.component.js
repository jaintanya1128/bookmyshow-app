import React from "react";
import { Card, Button } from "react-bootstrap";
import history from "../history";
import { FaHeart } from "react-icons/fa";

function MovieListingComponent(props) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={props.imgsrc}
        onClick={() => history.push(`/movie/${props.id}`)}
      />
      <Card.Body>
        <Card.Title onClick={() => history.push(`/movie/${props.id}`)}>
          {props.name}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Release Date: {props.releaseDate}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-danger">
          <FaHeart /> {props.avg_rating}
        </Card.Subtitle>
        <Card.Text>{props.desc}</Card.Text>
        <Button
          variant="primary"
          onClick={() => history.push(`/movie/${props.id}`)}
        >
          Book Now
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieListingComponent;
