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
            
        }
        this.totalTime = 0
        // this.currentSec = 0
        this.time = 60
        this.props.getBunchSongs()
            
        this.play = this.play.bind(this)
        this.changeVolume = this.changeVolume.bind(this)
        this.draw = this.draw.bind(this)
        this.drawProgress = this.drawProgress.bind(this)
        
    }



    // componentDidMount() {
    //     if (document.querySelector("#progress-bar")) this.drawBar()
    // }

    shouldComponentUpdate(nextProps) {
       
     
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


    // drawBar() {
    //     let canvas2 = document.querySelector("#progress-bar");
    //     // canvas2.width = 600
    //     // canvas2.height = 50
    //     let ctx2 = canvas2.getContext("2d");
    //     ctx2.lineWidth = 1;
    //     ctx2.moveTo(40, 10.5);
    //     ctx2.lineTo(260, 10.5);
    //     ctx2.strokeStyle = "#1DB954"
    //     ctx2.stroke();

    //     // if (this.audioB)
    //     ctx2.fillText(this.audioBuffer.duration, 270, 10.5)
    // }


    draw(normalizedData) {
        // console.log('draw')
        const canvas = document.querySelector("canvas");
        canvas.width = 680
        canvas.height = 100
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 680, 100)
     
        ctx.fillStyle = "transparent"
        ctx.fillRect(0, 0, 680, 100)
        
       
         
        for (let i = 0; i < normalizedData.length; i++) {
        //    console.log('first draw loop')
           let height = normalizedData[i]
      
           ctx.fillStyle = "grey"
           ctx.fillRect(i * 3.5, 50, 2.3, height * -50)
           ctx.fillRect(i * 3.5, 50, 2.3, height * 50)
        }


        this.drawProgress(normalizedData)


        // requestAnimationFrame(this.draw(this.exam))
        // this.first = canvas.toDataURL('image/png', 1.0) //may delete if useless
    }

    drawProgress() {
        let seconds = Math.floor((this.totalTime / 60) % 60)
        const canvas = document.querySelector("canvas");
        // canvas.width = 680
        // canvas.height = 100
        let ctx
        if(ctx === undefined){
            ctx = canvas.getContext("2d");
        }
       
        // let ctx = canvas.getContext("2d");
        // let sec = Math.floor(Date.now()/1000);

        // if (sec !== this.currentSec) {
        //     this.currentSec = sec;
         
        //   } else {
            
            this.totalTime ++;
        //   }
      
    //    console.log(this.exam)
     
        ctx.fillStyle = "red"
        // ctx.fillRect(0, 0, 400, 400)
        if (seconds < this.time) {
            for (let i = 0; i <= seconds; i++) {
                // console.log('draw progress')
                let height = this.sampleArray[i]
                // let height = 10
           
                ctx.fillStyle = "#1DB954"
                ctx.fillRect(i * 3.5, 50, 2, height * -50)
                ctx.fillRect(i * 3.5, 50, 2, height * 50)
             }
        }

       
        requestAnimationFrame(this.drawProgress)
    }

    // findDur(so) {
    //     console.log('h')
    //     let audioContext = new (window.AudioContext || window.webkitAudioContext)()
    //     fetch(so)
    //                 .then(response => response.arrayBuffer())
    //                 .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    //                 .then(audioBuffer => {
    //                     console.log(audioBuffer.duration)
    //                     this.endTime = audioBuffer.duration})
    // }
        

    render() { 
        // console.log('render')
            let song
            let artist_name
            let song_title
            let song_pic
            if (this.props.state.session.song){
            song = this.props.state.session.song.songUrl
            artist_name = this.props.state.session.song.display_name
            song_title = this.props.state.session.song.title
            song_pic = this.props.state.session.song.pictureUrl
            } else {
                song = ""
            }

       
            if (song) {
                // const preview = document.createElement('audio');
                // const reader = new FileReader()
                // reader.onloadend = () => { 
                   
                //     preview.src = reader.result;
                //   }
                
                // reader.readAsDataURL(this.props.state.session.song)
        
                // setVariables(song)
                let audioContext = new (window.AudioContext || window.webkitAudioContext)()

          
                
                // const visualizeAudio = url => {
                //     fetch(url)
                //       .then(response => response.arrayBuffer())
                //       .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
                //       .then(audioBuffer => {
                //         this.sampleArray = normalizeData(filterData(audioBuffer))
                //         if (this.props.state.waveform) this.draw(normalizeData(filterData(audioBuffer)))
                //       })
                // }
                // this.findDur(song)
                // let endTimee

                // fetch(song)
                //     .then(response => response.arrayBuffer())
                //     .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
                //     .then(audioBuffer => {
                //         console.log(audioBuffer.duration)
                //         endTimee = audioBuffer.duration})
                    // .then(console.log(endTime))
                
                


                

                // const filterData = audioBuffer => {
                //     const rawData = audioBuffer.getChannelData(0);
                //     const samples = 200;
                //     const blockSize = Math.floor(rawData.length / samples);
                //     const filteredData = [];
                //     for (let i = 0; i < samples; i++) {
                //       let blockStart = blockSize * i;
                //       let sum = 0;
                //       for (let j = 0; j < blockSize; j++) {
                //         sum = sum + Math.abs(rawData[blockStart + j]);
                //       }
                //       filteredData.push(sum / blockSize);
                //     }
                //     return filteredData
                // }

                // const normalizeData = filteredData => {
                //     const multiplier = Math.pow(Math.max(...filteredData), -1);
                //     return filteredData.map(n => n * multiplier);
                // }

                
                
                this.audioElement = document.createElement("AUDIO"); 
                this.audioElement.setAttribute("src", song);
              
                let track = audioContext.createMediaElementSource(this.audioElement);
                
               
                // let endTime = track.mediaElement.duration
                this.gainNode = audioContext.createGain();
                this.trackConnect =  track.connect(this.gainNode).connect(audioContext.destination);
                // visualizeAudio(song)
               
                // this.findDur(this.audioElement)
               
                // this.drawBar()
              
          
            

            

       
      return (
        <>
        <div className="media-player-container">
        
        <div className="song-progress-bar-container"> 
            <div className="current-time">

            </div>

            <div className="song-bar" ></div>

            <div className="end-time">
            
            </div>
        </div>
           
        
        
          <div className="player-slider">
            <input type="range" id="volume" min="0" max="2" defaultValue="1" step="0.01" onChange={this.changeVolume}></input>
          </div>

          <div className="button-container">
                <img src={window.back} width="30px"/>
            <button className="play-button" data-playing="false" role="switch" aria-checked="false" onClick={this.play}>
                <img src={window.play} width="30px"/>
            </button>
                <img src={window.next} width="30px"/>
                <img src={window.shuffle} width="30px"/>
                <img src={window.repeat} width="35px"/>
                <img src={window.audio} width="30px"/>
          </div>

          <div className="artist-info" >
              <img className="song-pic" src={song_pic} width="30px" height="30px"/>
              <div className="artist-small-info">
                <p className="artist-name">{artist_name}</p>
                <p className="song-title">{song_title}</p>
              </div>
          </div>

          <canvas id="canvas"></canvas>
         
        </div>
        
        </>
      )

      
    
        } else {
            return(<p>no media</p>)
        }
        
    }
}

export default MusicPlayer;