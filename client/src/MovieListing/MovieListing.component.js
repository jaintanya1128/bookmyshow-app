import React from 'react';
import { Card, Button } from 'react-bootstrap';
import history from '../history';

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
					{props.productTitle}
				</Card.Title>
				<Card.Subtitle className="mb-2 text-muted font-weight-bold price">
					{props.releaseDate}
				</Card.Subtitle>
				<Card.Text>{props.desc}</Card.Text>
				<Card.Link href="" onClick={() => history.push(`/movie/${props.id}`)}>
					View details
				</Card.Link>
				<Button variant="primary" onClick={props.addtoCartHandler}>
					Add to Cart
				</Button>
			</Card.Body>
		</Card>
	);
}

export default MovieListingComponent;
