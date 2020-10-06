import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';


class SongPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0
        }
        this.totalTime = 0
        this.time = 60
        this.handleClick = this.handleClick.bind(this)
        // this.draw = this.draw.bind(this)
        // this.drawProgress = this.drawProgress.bind(this)
      }


    handleClick() {
      const song = this.props.song
      this.props.getSong(song.id)

      // if (this.props.profile) {
      //   let lastSong 
      //   if (this.props.state.session.currentSong && this.props.state.session.currentSong.id !== song.id) {
      //     lastSong = this.props.state.session.currentSong
      //     const canvas = document.querySelector(`#canvas${lastSong.id}`);
      //     canvas.width = 680
      //     canvas.height = 100
      //     const ctx = canvas.getContext("2d");
      //     ctx.clearRect(0, 0, 680, 100)
      //   }

    
      // } //else {
      //   this.props.getSong(song.id)
      // }
    }

    componentDidUpdate() {
      if (this.props.state.session.currentSong) {
        let audioEle = document.getElementById('myAudio')
        audioEle.ontimeupdate = () => {
          this.setState({ currentTime: (audioEle.currentTime / audioEle.duration) * 100 })
        }
      }
    }

    render(){
      const song = this.props.song
  
      if (!this.props.profile) {
        
        return (
        <>
          <div className="songTile">
              
          {song.pictureUrl ? (
              <img src={song.pictureUrl} height="180px" width="180px"/>
              ) : (
                <img src={window.songGradient} height="180px" width="180px" /> 
            
          )}

          <a role="button" className="play" onClick={this.handleClick}>Play</a>
          
            
          <h3 className="songTitle">{song.title}</h3> 
          

          <Link to={song.display_name}>
            <h3 className="songUser">{song.display_name}</h3>
          </Link>


          </div>

          
        </>
    
          
        )
      } else {
        return (
          <>
          <div className="songProfileTile">
              
            {song.pictureUrl ? (
                <img src={song.pictureUrl} height="180px" width="180px"/>
            ) : (
                <img src={window.songGradient} height="180px" width="180px" /> 
              
            )}
            <div className="songProfileTileContainer">
              <div className="profile-song-info">
                <a role="button" className="play" onClick={this.handleClick}>Play</a>
                
                <div className="profile-song-names-plate" >
                  <Link to={song.display_name}>
                    <h3 className="songUser">{song.display_name}</h3>
                  </Link>
                  <h3 className="songTitle">{song.title}</h3> 
                </div>

              </div>

              <img className="waveFormImg" src={song.waveForm} />

              <div className="progressWaveFormContainer" style={{ width:`${this.state.currentTime}%`, overflow: "hidden" }}>
                <img className="progressWaveFormImg" src={song.waveForm} />
              </div>

            </div>

          </div>

          
        </>
    
        )
      }


    }


}

export default SongPart;

