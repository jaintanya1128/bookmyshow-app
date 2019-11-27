import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.scss";

import Header from "./common/Header.component";
import Footer from "./common/Footer.component";

import MovieListing from "./MovieListing/MovieListing.container";
import MovieDetails from "./MovieDetails/MovieDetails.container";
import ShowsList from "./ShowsList/ShowsList.container";

import Cart from "./Cart";
import history from "./history";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovieDetail: {}
    };
  }
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header />
          <main>
            <Container>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <MovieListing
                      onClick={selectedMovie => {
                        console.log("im called from App.js");
                        this.setState({ selectedMovieDetail: selectedMovie });
                        console.log(selectedMovie);
                      }}
                    />
                  )}
                />
                <Route
                  path="/movie/:id"
                  render={() => (
                    <MovieDetails
                      currentMovieDetails={this.state.selectedMovieDetail}
                    />
                  )}
                />
                <Route
                  path="/shows/:id"
                  render={() => (
                    <ShowsList
                      currentMovieDetails={this.state.selectedMovieDetail}
                    />
                  )}
                />
                <Route path="/checkout" component={Cart} />
              </Switch>
            </Container>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
