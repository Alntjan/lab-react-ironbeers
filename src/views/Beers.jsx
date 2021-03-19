import axios from 'axios';
import React, {Component} from 'react';
import Header from '../components/Header';
import List from '../components/List';
import Search from '../components/Search'

class Beers extends Component {

    state = {
        beers: null,
        filterBeers: null
    }

    componentDidMount() {
        this.getBeers();
    }

    getBeers = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(beers => {
            this.setState({
                beers: beers.data,
                filterBeers: beers.data
            })
        })
        .catch(err => console.log(err))
    }

    searchBeers= (query) => {
        // const pattern = new RegExp(searchString, 'i');
        // const filterBeers = this.state.beers.filter(beer => pattern.test(beer.name));
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        .then(beers => {
            if(query === '') {
                this.setState({filterBeers: [...this.state.beers]})
              } else {
                this.setState({filterBeers: beers.data})
              }
              console.log(this.state.filterBeers)
        })
        .catch(err => console.log(err))
        }

    render() {
        return <div className='pages-container'>
            <Header/>
            <Search searchQuery={this.searchBeers}/>
            {this.state.filterBeers ? <List view='beers' items={this.state.filterBeers}/> : <h6>Loading...</h6>}
        </div>
    }
}

export default Beers;