import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class HomeListItem extends Component {

    state = {
        item: this.props.item
    }

    render() {
        const {name, description, link, image} = this.state.item
        return <li className='home-list-item'>
            <Link to={link} className='link'>
            <img className='image-home' src={image} alt={name}/>
            <h2>{name}</h2>
            <p>{description}</p>
            </Link>
            
        </li>
    }
}

export default HomeListItem;