import React from 'react';
import { NavLink } from 'react-router-dom';



export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: "",
            loading: true

        }
        this.props.fetchUsers()
        this.props.getBunchSongs()
        
        this.searchUpdate = this.searchUpdate.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.songs === undefined) {
            return false
        } else {
            return true
        }
    }

   

    componentDidMount() {
        this.setState( {loading: false})
    }

    searchUpdate(value) {
        return e => this.setState({ [value]: e.target.value });
    }


    mysearchfunction() {
        return this.state.searchInput.filter()
    }


    render() {
        if (this.state.loading) {
            return (<p>loading...</p>)
        } else {
        let songs = this.props.songs
        let users = this.props.users
        let options = {all_songs: {}, all_users:{}}
        options.all_songs = {
            ...songs
        }

        options.all_users = {
            ...users
        }

        // console.log(songs)
        // console.log(users)
        console.log(options)
        // <input className="searchBar" placeholder="  Search for music or podcasts" type="text" value={this.state.searchInput} onChange={this.searchUpdate('searchInput')} />
        return (
            <div> im a div </div>
        )
    }}

}