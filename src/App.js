import React, {Component} from 'react';
import './App.css';
import Home from './views/Home';
import Beers from './views/Beers';
import NewBeer from './views/NewBeer';
import RandomBeer from './views/RandomBeer';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return <div className="app">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/beers/:id' component={RandomBeer}/>
        <Route path='/beers' component={Beers}/>
        <Route path='/random-beer' component={RandomBeer}/>
        <Route path='/new-beer' component={NewBeer}/>
      </Switch>
  </div>
  }
}

export default App;
