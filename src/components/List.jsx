import React, {Component} from 'react';
import HomeListItem from './HomeListItem';
import BeersListItem from './BeersListItem';

class List extends Component {

    render() {
        console.log(this.props.items)
        return <ul className='list'>
            {this.props.items.map(item => {
                switch (this.props.view) {
                    case 'home':
                        return <HomeListItem key={item.name} item={item}/>
                    case 'beers':
                        return <BeersListItem key={item.name} item={item}/>
                    default:
                        return <HomeListItem key={item.name} item={item}/>
                }
            })}
        </ul>
    }
}

export default List;