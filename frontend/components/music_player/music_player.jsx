import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';
import LoginFormContainer from '../session/login_form_container.jsx';
import SignupFormContainer from '../session/signup_form_container.jsx';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import Caro from '../caro'
import SongList from '../song/song_index';
import SongIndexContainer from '../song/song_index_container'
import SongForm from '../song/song_form'
import SongFormContainer from '../song/song_form_container'
import ReactAudioPlayer from 'react-audio-player';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
            this.props.getBunchSongs()
            // songs: []
        
        // this.props.getSongs()
        // this.boop = this.boop.bind(this)
    }

    // boop() {
    //     const songs = Object.values(this.props.songs);
    // //    songs.map((song) => {
    // //        this.state.songs.push(song)
    // //    })

    // // this.setState({track: songs[0].url})
    // console.log(this.state.track)
       
    // }

    // bop() {
    //     this.props.getSong({email, password});
    // }

    // componentDidMount() {
       
    //     const songs = Object.values(this.props.songs);
    //     // this.setState({track: songs[0]})
    //     console.log(songs)
    // }

    // componentDidUpdate() {
    //     if (this.props.songs) {
    //         this.setState({track: this.props.songs[0]})
    //     }
    // }

    render() { 
        // const songs = Object.values(this.props.songs);
        // let song = songs[0]
        // this.setState({track: songs[0]})
        let song 
        if (this.props.state.session.song) {
            song = (this.props.state.session.song.songUrl)
        } else {
            song = ''
        }
        console.log(this.props.state.session.song)
      return (
          <>
        {/* <div>
            <button className="songFormButton" onClick={this.boop}>  get Song </button>
        </div> */}
        <ReactAudioPlayer
        src={song}
        autoPlay={true}
        controls
        />
        </>
      )}
}

export default MusicPlayer;