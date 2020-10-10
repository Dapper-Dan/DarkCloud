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
            songTime: "0:00",
            currentTime: 0,
            mouseDown: false
            
        }
      
        this.props.getBunchSongs()
            
        this.play = this.play.bind(this)
        this.changeVolume = this.changeVolume.bind(this)
        this.getCurrentTime = this.getCurrentTime.bind(this)
        this.updateProgress = this.updateProgress.bind(this)
        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.handleMouseUp = this.handleMouseUp.bind(this)
        this.drag = this.drag.bind(this)

    }



    

   
    play() {
        let audioEle = document.getElementById('myAudio')
        if (audioEle.paused) {
          audioEle.play()
        } else if (!audioEle.paused) {
          audioEle.pause()
        }
    }

    changeVolume() {
        let volumeControl = document.querySelector('#volume')
        this.gainNode.gain.value = volumeControl.value;
       
    }

    handleMouseDown(e) {
        e.preventDefault()
        e.persist()
        this.setState({mouseDown: true})
        document.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('mousemove', this.drag);
        this.setTime = e.pageX;
        this.drag(e)

    }

    handleMouseUp(e) {
        this.setState({mouseDown: false})
        document.removeEventListener('mousemove', this.drag)
        document.removeEventListener('mouseup', this.handleMouseUp)
        let song = document.getElementById('myAudio')
        let progressLine = document.querySelector('.song-bar')
        let divAdjust = e.pageX - progressLine.offsetLeft  
        let newTime = Math.floor((divAdjust / progressLine.offsetWidth) * song.duration);
        song.currentTime = newTime
    }

    drag(e) {
       
        let progressLine = document.querySelector('.song-bar')
     
        let divAdjust = e.pageX - progressLine.offsetLeft   
        
    
        let newWidth = Math.floor((divAdjust / progressLine.offsetWidth) * 100);
  

        if (this.state.mouseDown) {
       
            this.setState({ currentTime: newWidth })
            document.querySelector('.song-progress-bar').style.width = `${newWidth}%`
        }
      
    }


        
    getCurrentTime() {
        let song = document.getElementById('myAudio')
        let unformattedTime = song.currentTime
        let minutes = Math.floor(unformattedTime / 60 )
        let seconds 
        Math.floor(unformattedTime % 60) > 9 ? seconds = Math.floor(unformattedTime % 60) : seconds = "0" + Math.floor(unformattedTime % 60)
        let formattedTime = minutes + ":" + seconds
        this.setState({ songTime: formattedTime })
        this.updateProgress()
    }

    updateProgress() {
        let song = document.getElementById('myAudio')
        let currentTime = song.currentTime;
        let endTime = song.duration;

        if (!this.state.mouseDown) {
            this.setState({currentTime: (currentTime / endTime) * 100})
        }

    }

    render() { 
        let song
        let artist_name
        let song_title
        let song_pic
        if (this.props.state.session.currentSong){
        song = this.props.state.session.currentSong.songUrl
        artist_name = this.props.state.session.currentSong.display_name
        song_title = this.props.state.session.currentSong.title
        song_pic = this.props.state.session.currentSong.pictureUrl
        } else {
            song = ""
        }

       
        if (!song) {
            return <div></div>
        } else {
            let songTime = this.props.state.session.currentSong.duration
            let minutes = Math.floor(songTime / 60 )
            let seconds 
            Math.floor(songTime % 60) > 9 ? seconds = Math.floor(songTime % 60) : seconds = "0" + Math.floor(songTime % 60)
            let endTime = minutes + ":" + seconds

           

            return (
                <>
                <div className="media-player-container">
                
                    <div className="song-progress-bar-container"> 
                        <div className="button-container">
                            <img src={window.back} width="21px"/>
                            <button className="play-button" data-playing="false" role="switch" aria-checked="false" onClick={this.play}>
                                <img src={window.play} width="21px"/>
                            </button>
                            <img src={window.next} width="21px"/>
                            <img src={window.shuffle} width="23px"/>
                            <img src={window.repeat} width="23px"/>
                        </div>



                        <div className="current-time">
                            {this.state.songTime}
                        </div>


                        <div className="song-bar" >
                            <div className="song-progress-bar" style={{ width:`${this.state.currentTime}%` }}>
                            </div>
                            <div className="bar-dot" onMouseDown={this.handleMouseDown}>
                            </div>
                        </div>

                        
                            
                        <div className="end-time">
                            {endTime}
                        </div>

                        <img src={window.audio} className="audioButton" width="21px"/>

                        <div className="artist-info" >
                            <img className="song-pic" src={song_pic} width="40px" height="40px"/>
                            <div className="artist-small-info">
                                <p className="artist-name">{artist_name}</p>
                                <p className="song-title">{song_title}</p>
                            </div>
                            <img src={window.heart} id="heart" width="15px" />
                        </div>
                        
                    </div>
            
                    <audio id="myAudio" hidden={true} src={song} onTimeUpdate={ () => { this.getCurrentTime()} }  />
         
                </div>
                </>
            )
        }
    }
}

export default MusicPlayer;