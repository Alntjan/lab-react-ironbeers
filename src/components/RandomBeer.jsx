import React, { Component } from 'react';
import axios from 'axios';

export class RandomBeer extends Component {
  state = {
    singleBeer: {},
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => {
        console.log(res);
        this.setState({ singleBeer: res.data });
      });
  }
  render() {
    return (
      <div key={this.state.singleBeer._id}>
        <img
          src={this.state.singleBeer.image_url}
          alt={this.state.singleBeer.name}
          width="45vw"
        />
        <p>Name: {this.state.singleBeer.name}</p>
        <p>Tagline {this.state.singleBeer.tagline}</p>
        <p>First brewed: {this.state.singleBeer.first_brewed}</p>
        <p>Description: {this.state.singleBeer.description}</p>
        <p>Contributed by: : {this.state.singleBeer.contributed_by}</p>
      </div>
    );
  }
}

export default RandomBeer;
