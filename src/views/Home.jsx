import React, {Component} from 'react';
import List from '../components/List';

class Home extends Component {

    state = {
        links: [
            {
                name: "All Beers",
                description: "Lorem ipsum",
                link: '/beers',
                image: '/beers.png'
            },
            {
                name: "Random Beer",
                description: "Lorem ipsum",
                link: 'random-beer',
                image: '/random-beer.png'
            },
            {
                name: "New Beer",
                description: "Lorem ipsum",
                link: 'new-beer',
                image: '/new-beer.png'
            }
        ]
    }

    render() {
        return <div className='home'>
            <List view='home' items={this.state.links}/>
        </div>
    }
}

export default Home;