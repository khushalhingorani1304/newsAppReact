import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">Entertainment</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">Business</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">General</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">Health</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">Science</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">Sports</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">Technology</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
