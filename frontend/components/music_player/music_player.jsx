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
            playing: false
        }

        this.props.getBunchSongs()
            
        this.play = this.play.bind(this)
        this.changeVolume = this.changeVolume.bind(this)
        this.draw = this.draw.bind(this)
        
    }


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
      
    }

    changeVolume() {
        let volumeControl = document.querySelector('#volume')
        this.gainNode.gain.value = volumeControl.value;
       
    }


    draw(normalizedData) {
        console.log('draw')
        const canvas = document.querySelector("canvas");
        canvas.width = 680
        canvas.height = 100
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, 680, 100)
       
         
        for (let i = 0; i < normalizedData.length; i++) {
           let height = normalizedData[i]
           console.log(height)
           ctx.fillStyle = "grey"
           ctx.fillRect(i * 3.5, 50, 2.3, height * -50)
           ctx.fillRect(i * 3.5, 50, 2.3, height * 50)
        }
        this.first = canvas.toDataURL('image/jpeg', 1.0)
    }
        

    render() { 
        console.log('render')
            let song
            if (this.props.state.session.song){
            song = this.props.state.session.song.songUrl
            } else {
                song = ""
            }
       
            if (song) {
                let audioContext = new (window.AudioContext || window.webkitAudioContext)()

                const visualizeAudio = url => {
                    // console.log(url)
                    fetch(url)
                      .then(response => response.arrayBuffer())
                      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
                      .then(audioBuffer => this.draw(normalizeData(filterData(audioBuffer))))
                }

                const filterData = audioBuffer => {
                    const rawData = audioBuffer.getChannelData(0);
                    const samples = 200;
                    const blockSize = Math.floor(rawData.length / samples);
                    const filteredData = [];
                    for (let i = 0; i < samples; i++) {
                      let blockStart = blockSize * i;
                      let sum = 0;
                      for (let j = 0; j < blockSize; j++) {
                        sum = sum + Math.abs(rawData[blockStart + j]);
                      }
                      filteredData.push(sum / blockSize);
                    }
                    return filteredData
                }

                const normalizeData = filteredData => {
                    const multiplier = Math.pow(Math.max(...filteredData), -1);
                    return filteredData.map(n => n * multiplier);
                }

                visualizeAudio(song)
                this.audioElement = document.createElement("AUDIO"); 
                this.audioElement.setAttribute("src", song);
                let track = audioContext.createMediaElementSource(this.audioElement);
                this.gainNode = audioContext.createGain();
                this.trackConnect =  track.connect(this.gainNode).connect(audioContext.destination);
                console.log('bottom')
            }
          

        

       
      return (
          <>
          
  
          <div className="immaSong">
            
            <input type="range" id="volume" min="0" max="2" defaultValue="1" step="0.01" onChange={this.changeVolume}></input>
          </div>

          <button data-playing="false" role="switch" aria-checked="false" onClick={this.play}>
            Play/Pause
          </button>

          <canvas id="canvas"></canvas>
          {/* {console.log(this.first)} */}
          <img src={this.first} width="680" height="100" />
        </>
      )
    
    }
}

export default MusicPlayer;