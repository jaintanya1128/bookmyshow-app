import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.scss";

import Header from "./common/Header.component";
import Footer from "./common/Footer.component";

import MovieListing from "./MovieListing/MovieListing.container";
import MovieDetails from "./MovieDetails/MovieDetails.container";
import BookTicket from "./BookTicket/BookiTicket.container";

import Cart from "./Cart";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <main>
          <Container>
            <Switch>
              <Route path="/" exact component={MovieListing} />
              <Route path="/movie/:id" component={MovieDetails} />
              <Route path="/booking/:id" component={BookTicket} />
              <Route path="/checkout" component={Cart} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
