import React, {Component} from 'react';
import Header from '../components/Header';
import axios from 'axios';

class NewBeer extends Component {

    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
          [name]: value
        })
      }
    
    handleFormSubmit = (e) => {
        e.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
        .then((newBeer) => {
            console.log(newBeer)
            this.setState({
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewer_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return <div>
            <Header/>
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <label>Tagline:</label>
                <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange}/>
                <label>Description:</label>
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                <label>First Brewed:</label>
                <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}/>
                <label>Brewer Tips:</label>
                <input type="text" name="brewer_tips" value={this.state.brewer_tips} onChange={this.handleChange}/>
                <label>Attenuation Level:</label>
                <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}/>
                <label>Contributed By:</label>
                <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange}/>
          
                <button>Submit</button>
            </form>
        </div>
    }
}

export default NewBeer;

