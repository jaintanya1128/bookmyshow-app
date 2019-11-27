import React, { Component } from "react";
import { Navbar, Container, Row, Col, Form } from "react-bootstrap";
import "./header.scss";
import logo from "../logo.svg";

class Header extends Component {
  constructor(props) {
    super(props);

    this.searchMovies = this.searchMovies.bind(this);
  }

  searchMovies(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    document.dispatchEvent(
      new CustomEvent("searched", { detail: data.get("search") })
    );
  }
  render() {
    return (
      <header>
        <Container className="header">
          <Row className="justify-content-space-between">
            <Col xs={3} md={2} lg={1} className="p-0">
              <Navbar className="px-sm-0">
                <Navbar.Brand href="/" className="p-0">
                  <img
                    alt=""
                    src={logo}
                    height="60"
                    className="logo d-inline-block align-top"
                  />
                </Navbar.Brand>
              </Navbar>
            </Col>
            <Col xs={3} className="p-0">
              <h1>{"Book my Movie"}</h1>
            </Col>
            <Form className="col" onSubmit={this.searchMovies}>
              <Form.Control
                type="text"
                name="search"
                placeholder="search for movies"
              />
            </Form>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
