import React from 'react';
import UserNavBarContainer from '../nav_bar/user_nav_bar_container';
import { NavLink, Link } from 'react-router-dom';
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
            this.props.fetchUsers()
            this.props.getBunchSongs()
        }

    }

    render() {
        console.log(this.state.searchInput)
        let searchInput
        let filteredSongs
        let filteredUsers
        if (this.props.match.params.searchInput) {
            searchInput = this.props.match.params.searchInput
        
            if (this.props.songs) {
                let songs = Object.values(this.props.songs);
                filteredSongs = songs.filter(
                    songItem => {
                        // console.log(songItem.title)
                        let songName = songItem.title.toLowerCase()
                        return songName.indexOf(searchInput.toLowerCase()) > -1
                    }
                )
            }

            if (this.props.users) {
                let users = Object.values(this.props.users) 
                filteredUsers = users.filter(
                    userItem => {
                        let username = userItem.display_name.toLowerCase()
                        return username.indexOf(searchInput.toLowerCase()) > -1
                    }
                )
            }

            
        //     let users 
        //     if (this.props.users) users = Object.values(this.props.users)
        //     let songs 
        //     if (this.props.songs) songs = Object.values(this.props.songs)

        //     filteredSongs = songs.filter(
        //         songItem => {
        //             let songName = songItem.title.toLowerCase()
        //             return songName.indexOf(searchInput.toLowerCase()) > -1
        //         })
        //         .concat(users.filter(
        //             userItem => {
        //                 let userName = userItem.display_name.toLowerCase()
        //                 return userName.indexOf(searchInput.toLowerCase()) > -1
        //             }
        //         ))
        // }

        
        // let users = Object.values(this.props.users);

       
        // filteredSongs = songs.filter(
        //     songItem => {
        //         let songName = songItem.title.toLowerCase()
        //         return songName.indexOf(searchInput.toLowerCase()) > -1
        //     })
        //     // .concat(users.filter(
        //         userItem => {
        //             let userName = userItem.display_name.toLowerCase()
        //             return userName.indexOf(searchInput.toLowerCase()) > -1
        //         }
        //     ))
            
        } 
        let optionsArray
        if (filteredSongs) {
            optionsArray = (
                <ul className="optionsArray">
                    {filteredSongs.map((song, i) => (
                        <li key={i}>
                            <SongPartContainer song={song} profile={true}/>
                        </li>

                    ))}

                    {filteredUsers.map((user, i) => 
                        <li key={i}>
                            <div className="filteredUsers">
                                <img id="profilePic"  src={user.profilePicUrl} /> 
                                <Link to={`/${user.display_name}`}>
                                    <h1 className="discoverUserPart">{user.display_name}</h1>
                                </Link>
                            </div>
                        </li>
                    )}

                </ul>
            )
        } else {
            optionsArray = ""
        }
    


      

        return (
        <>
            <div className="nav_bar_background" ></div>
            <div className="nav-con"  >
                <UserNavBarContainer />
                <SearchBarContainer/>
            </div>
            
            <div className="outtermost" >
        <div className="searchHeader">{`Search results for "${searchInput}"`}</div>

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
