import React, { Component } from 'react';
import { CardGroup } from 'react-bootstrap';
import MovieListingComponent from './MovieListing.component';

class MovieListing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieList: []
		};
	}
	componentDidMount() {
		fetch('https://api.themoviedb.org/4/list/1?api_key=0bd2290e90ff36d0efef4f8f07db8f79')
			.then(response => response.json())
			.then(data => {
				this.setState({ movieList: data.results });
			});
	}

	render() {
		const productList = this.state.movieList.map(movie => {
			return (
				<MovieListingComponent
					key={movie.id}
					id={movie.id}
					imgsrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					productTitle={movie.title}
					releaseDate={movie.release_date}
					desc={movie.overview}
					//addtoCartHandler={this.props.cartCountUpdater}
				/>
			);
		});

		return <CardGroup>{productList}</CardGroup>;
	}
}

export default MovieListing;
