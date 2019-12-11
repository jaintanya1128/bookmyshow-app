import React, { Component } from "react";
import "./header.scss";
import history from "../history";
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
    history.push("/");
  }
  render() {
    return (
      <header>
        <div className="container header">
          <div className="row justify-content-space-between">
            <div className="p-0 col-sm-3 col-md-2 col-lg-1">
              <div className="navbar px-sm-0">
                <div href="/" className="navbar-brand p-0">
                  <img
                    alt=""
                    src={logo}
                    height="60"
                    className="logo d-inline-block align-top"
                  />
                </div>
              </div>
            </div>
            <div className="p-0 col-sm-3 ">
              <h1>{"Book my Movie"}</h1>
            </div>
            <form className="col" onSubmit={this.searchMovies}>
              <input
                className="form-control"
                type="text"
                name="search"
                placeholder="search for movies"
              />
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
