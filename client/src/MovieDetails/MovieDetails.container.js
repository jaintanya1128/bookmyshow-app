import React, { Component } from 'react';

import MovieDetailsComponent from './MovieDetails.component';

class ProductDetails extends Component {
	componentDidMount() {
		let urlArray = window.location.pathname.split('/');

		const movieId = urlArray[urlArray.length - 1];
		console.log(movieId);

		fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0bd2290e90ff36d0efef4f8f07db8f79`)
			.then(response => response.json())
			.then();
	}
	render() {
		return <MovieDetailsComponent />;
	}
}

export default ProductDetails;
