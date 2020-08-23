import React from 'react';
import { NavLink } from 'react-router-dom';



export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""

        }
        this.props.fetchUsers()
        this.props.getBunchSongs()
        
        this.searchUpdate = this.searchUpdate.bind(this)
    }

    searchUpdate(value) {
        return e => this.setState({ [value]: e.target.value });
    }


    mysearchfunction() {
        return this.state.searchInput.filter()
    }


    render() {
        // console.log(this.props.state)
        // <input className="searchBar" placeholder="  Search for music or podcasts" type="text" value={this.state.searchInput} onChange={this.searchUpdate('searchInput')} />
        return (
            <div> im a div </div>
        )
    }

}