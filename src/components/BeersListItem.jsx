import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class BeersListItem extends Component {

    state = {
        item: this.props.item
    }

    render() {
        const {name, tagline, contributed_by, image_url, _id} = this.state.item
        return <li className='beer-list-item'>
            <Link className='link-container link' to={`/beers/${_id}`}>
            <img className='image-beer' src={image_url} alt={name}/>
            <div className='beer-detail-container'>
            <h2>{name}</h2>
            <h3>{tagline}</h3>
            <p><span className='bold'>Created by: </span>{contributed_by}</p>
            </div>
            </Link>   
        </li>
    }
}

export default BeersListItem;