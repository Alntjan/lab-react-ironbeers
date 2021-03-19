import React, {Component} from 'react';

class Search extends Component {

    handleChange = (e) => {
        const {value} = e.target
        this.props.searchQuery(value)
      }
    
    render() {
        return <input className='input-search' type="text" name="search" onChange={this.handleChange}/>
    }
}

export default Search;