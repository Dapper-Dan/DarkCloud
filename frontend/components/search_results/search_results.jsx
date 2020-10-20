import React from 'react';
import UserNavBarContainer from '../nav_bar/user_nav_bar_container';
import { NavLink } from 'react-router-dom';
import SearchBarContainer from '../search_bar/search_bar_container'
import SongPartContainer from '../song/song_part_container'
import Carousel from 'react-bootstrap/Carousel';


export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
         
        
          
          
        };

        // this.props.fetchUsers()
        // this.props.getBunchSongs()

    }

    componentDidMount() {
        this.setState({searchInput: this.props.location.searchInput})
    }

    componentDidUpdate() {
        if(!this.props) {
            // this.props.fetchUsers()
            // this.props.getBunchSongs()
            
        }
    }

    render() {
        console.log(this.props.match.params)
        let filteredSongs
        if (this.props.match.params.searchInput) {
           let searchInput = this.props.match.params.searchInput
        
       
        // let filteredSongs
        // if (this.props.songs) {
            let songs = Object.values(this.props.songs);
            // if (!songs) return
            // console.log(songs)
            filteredSongs = songs.filter(
                songItem => {
                    console.log(songItem.title)
                    let songName = songItem.title.toLowerCase()
                    return songName.indexOf(searchInput.toLowerCase()) > -1
                })
        }
        // let users = Object.values(this.props.users);

       
        // filteredSongs = songs.filter(
        //     songItem => {
        //         let songName = songItem.title.toLowerCase()
        //         return songName.indexOf(searchInput.toLowerCase()) > -1
        //     })
        //     // .concat(users.filter(
            //     userItem => {
            //         let userName = userItem.display_name.toLowerCase()
            //         return userName.indexOf(searchInput.toLowerCase()) > -1
            //     }
            // ))
            
          
        let optionsArray
        if (filteredSongs) {
            optionsArray = (
                <ul>
                    {filteredSongs.map((song, i) => (
                        <li key={i}>
                            <SongPartContainer song={song} profile={true}/>
                        </li>

                    ))}

                </ul>
            )
        }


      

        return (
        <>
            <div className="nav_bar_background" ></div>
            <div className="nav-con"  >
                <UserNavBarContainer />
                <SearchBarContainer/>
            </div>
            
            <div className="outtermost" >
                <div className="searchHeader"> some stuff</div>

                <div className="mainSearchSplit">
                   

                    <div className="searchLeftSideBar"></div>
                    <div className="searchResultsMain">
                        {optionsArray}
                    </div>

                </div>

            

            </div>
        </>

        )
    }


}
