import React from 'react';
import UserNavBarContainer from '../nav_bar/user_nav_bar_container';
import { NavLink } from 'react-router-dom';
import SearchBarContainer from '../search_bar/search_bar_container'
import SongPartContainer from '../song/song_part_container'
import Carousel from 'react-bootstrap/Carousel';


export default class Library extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
            showOverview: false,
            showTracks: false,
            showLikes: false
          
          
        };

        this.props.getSongs(this.props.currentUser.display_name)
    
        this.props.fetchUserInfo(this.props.currentUser.display_name)

        
        
        
    }

    componentDidMount() {
        if (!this.props.users.profile_user) this.props.fetchUserInfo(this.props.currentUser.display_name)

        if (this.props.location.libraryProps) {
           let libraryProps = this.props.location.libraryProps
            if (libraryProps['showLikes']) this.setState({showLikes: true, showOverview: false, showTracks: false})
            if (libraryProps['showTracks']) this.setState({showTracks: true, showOverview: false, showLikes: false})
        }

    }


    render() {
        console.log(this.props)
        console.log(this.state)
        let songs
        if (this.props.state.entities.songs.songs) {
            songs = Object.values(this.props.state.entities.songs.songs)
        } else {
            return (<p>loading...</p>)
        }
       
        let tracks = (
            
                
                <div className="libraryContainer">
                <h3>Tracks</h3>
                <ul>
                    
                  {songs.map((song, i) => ( 
                     <li key={i} className="song-box" >
                      <SongPartContainer song={song} />
                    
                     </li>
                   )).slice(0, 6)}
                </ul>
                </div>
            
        )


        let likesArray 
        if(this.props.users.profile_user) likesArray = this.props.users.profile_user.likes
        

        let myLikes

        if (this.props.songs && likesArray) {
            myLikes = likesArray.map((like) => {
                return this.props.songs[like.song_id]
            })
        }

        let likes
        if (myLikes) {
            likes = (
                
                    <div className="libraryContainer">
                        <h3>Likes</h3>
                        <ul>
                        {myLikes.map((song, i) => ( 
                            <li key={i} className="song-box" >
                            <SongPartContainer song={song} />
                            
                            </li>
                        ))}
                        </ul>
                    </div>
                
            )
        }

        let overview
        if (myLikes && songs) {
            overview = (
                <div>
                {tracks}
                {likes}
                </div>
            )
        }

let libraryProps
let renderLikes
let renderTracks
        if (this.props.location.libraryProps) {
            libraryProps = this.props.location.libraryProps
            if (libraryProps['showLikes']) {
                renderLikes = likes
            } else {
                renderLikes = ""
            }

            if (libraryProps['showTracks']) {
                renderTracks = tracks
            } else {
                renderTracks = ""
            }
        }
        
    
        

        return (
            <>
            <div className="nav_bar_background" ></div>
            <div className="nav-con"  >
                <UserNavBarContainer />
                <SearchBarContainer/>
            </div>
            
            <div className="outtermost" >
               
                
                <div className="libraryNav">
                    <a className="overview-button"> Overview </a>
                    <a className="library-tracks-button"> Tracks </a>
                    <a className="library-likes-button"> Likes </a>
                </div>

                {renderLikes}
                {renderTracks}
                {!renderLikes && !renderTracks ? overview : ""}
                
                



            </div>





        </>
        )
        
    }






}