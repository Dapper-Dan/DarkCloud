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
        this.state = {
            audioData: new Uint8Array(0),
            playing: false,
            // loading: true
        }

        this.props.getBunchSongs()
            
        this.play = this.play.bind(this)
        this.changeVolume = this.changeVolume.bind(this)
        
    }

    // componentDidMount() {
    //     console.log('mount')
    //     console.log(this.props.state)
    //     // this.setState( {loading: false})
        
    // }
    
    shouldComponentUpdate(nextProps) {
        console.log('should')
       
        if (this.state.playing === true) {
            this.audioElement.pause()
            this.state.playing = false
        } 
        if (nextProps.state.session.song === undefined) {
            return false
        } else {
            return true
        }
    }

   
    play() {
    //     // const audioElement = document.querySelector('AUDIO');
    //    if (this.audioElement === this.audioElement)
        if (this.trackConnect.context.state === 'suspended') { 
            this.trackConnect.context.resume();
        }
    
     
        if (this.state.playing === false) {
            this.audioElement.play();
            this.state.playing = true;
           
        } else if (this.state.playing === true) {
        
            this.audioElement.pause();
            this.state.playing = false;
        }
        console.log(this.state)
    }

    changeVolume() {
        let volumeControl = document.querySelector('#volume')
        this.gainNode.gain.value = volumeControl.value;
       
    }

    establishAudio() {

    }
   

    render() { 
        console.log('render')
        // let song
        // if (this.state.loading) {
        //     song = ""
        //     return ('loading')
        // } else {
            // console.log('not loading')
            let song
            if (this.props.state.session.song){
            song = this.props.state.session.song.songUrl
            } else {
                song = ""
            }
            // console.log(song)
        
        // let audioElement

        // if(audioElement === undefined){
        //     console.log('its undefined')
            if (song) {
                let audioContext = new (window.AudioContext || window.webkitAudioContext)()
                 this.audioElement = document.createElement("AUDIO"); 
                // let audioElement = document.qu{erySelector('audio');
                this.audioElement.setAttribute("src", song);
                let track = audioContext.createMediaElementSource(this.audioElement);
                // let gainNode = audioContext.createGain();
                // let trackConnect =  track.connect(gainNode).connect(audioContext.destination);
                this.gainNode = audioContext.createGain();
                this.trackConnect =  track.connect(this.gainNode).connect(audioContext.destination);
            }
            console.log(this)
            console.log(this.state)
        // }

       
      return (
          <>
          
  
          <div className="immaSong">
            {/* <audio src={song} > </audio> */}
            <input type="range" id="volume" min="0" max="2" defaultValue="1" step="0.01" onChange={this.changeVolume}></input>
          </div>

          <button data-playing="false" role="switch" aria-checked="false" onClick={this.play}>
            Play/Pause
          </button>
        </>
      )
    
    }
}

export default MusicPlayer;