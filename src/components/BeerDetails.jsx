import axios from 'axios';
import React, { Component } from 'react';

export class BeerDetails extends Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((bat) => {
        console.log(bat);
        this.setState({
          beer: bat.data,
        });
      });
  }

  render() {
    return (
      <div>
        <img
          src={this.state.beer.image_url}
          alt={this.state.beer.name}
          width="30vw"
        />
        <p>{this.state.beer.name}</p>
        <p>{this.state.beer.tagline}</p>
        <p>First brewed: {this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
      </div>
    );
  }
}

export default BeerDetails;
