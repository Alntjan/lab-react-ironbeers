import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Homepage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/beers">
              <img src="/assets/beers.png" />
              <p>All Beers</p>
            </Link>
          </li>
          <li>
            <Link to="/random-beer">
              <img src="/assets/random-beer.png" />
              <p>Random Beer</p>
            </Link>
          </li>
          <li>
            <Link to="/new-beer">
              <img src="/assets/new-beer.png" />
              <p>New Beer</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Homepage;
