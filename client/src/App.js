import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.scss';

import Header from './common/Header.component';
import Footer from './common/Footer.component';

import MovieListing from './MovieListing/MovieListing.container';
import MovieDetails from './MovieDetails/MovieDetails.container';
import Cart from './Cart';
import history from './history';

function App() {
	const [cartCount, updateCartCount] = useState(0);

	return (
		<Router history={history}>
			<div className="App">
				<Header cartCount={cartCount} />
				<main>
					<Container>
						<Switch>
							<Route
								path="/"
								exact
								render={() => (
									<MovieListing cartCountUpdater={() => updateCartCount(cartCount + 1)} />
								)}
							/>
							<Route path="/movie/:id" component={MovieDetails} />
							<Route path="/cart" component={Cart} />
						</Switch>
					</Container>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
