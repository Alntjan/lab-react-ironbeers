import React, {Component} from 'react';
import axios from 'axios';
import Header from '../components/Header'

class RandomBeer extends Component {

    state = {
        beer: null
    }

    componentDidMount() {
        this.props.match.params.id ? this.getBeer() : this.getRandomBeer()
    }

    getBeer = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
        .then(beer => {
            console.log(beer.data)
            this.setState({
                beer: beer.data
            })
        })
        .catch(err => console.log(err))
    }

    getRandomBeer = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(beer => {
            console.log(beer.data)
            this.setState({
                beer: beer.data
            })
        })
        .catch(err => console.log(err))
    }


    render() {
        let shownContent;
        if (this.state.beer) {
            const {name, image_url, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.beer
            shownContent = 
            (<div className='single-beer-container'><img src={image_url} alt={name}/>
            <h3>{name}</h3>
            <h5>{tagline}</h5>
            <h3>{attenuation_level}</h3>
            <h6>{first_brewed}</h6>
            <p>{description}</p>
            <p>{contributed_by}</p>
            </div>
            )
        } else {
            shownContent = <h6>Loading...</h6>
        }
        return <div className='pages-container'>
            <Header/>
            {shownContent}
        </div>
    }
}

export default RandomBeer;