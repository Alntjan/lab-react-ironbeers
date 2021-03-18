import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class ListBeers extends Component {
  state = {
    allBeers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((bat) => {
      console.log(bat);
      this.setState({
        allBeers: bat.data,
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.allBeers.map((eachBeer) => {
          return (
            <div key={eachBeer._id}>
              <img src={eachBeer.image_url} alt={eachBeer.name} width="25vw" />
              <Link to={`/beers/${eachBeer._id}`}>
                <p>Name: {eachBeer.name}</p>
              </Link>
              <p>Tagline: {eachBeer.tagline}</p>
              <p>Contributed by: {eachBeer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListBeers;
