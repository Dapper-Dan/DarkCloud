import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';


class SongPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSong: ""
        }
        this.handleClick = this.handleClick.bind(this)
      }


    handleClick() {
        const song = this.props.song
        // this.setState({ currentSong: song})
        this.props.getSong(song.id)
        
       
    }

    render(){
      const song = this.props.song
      return (
      <>
        <div className="songTile">
            
         {song.pictureUrl ? (
             <img src={song.pictureUrl} height="180px" width="180px"/>
             ) : (
               <img src={""} /> 
           
             )}
{/*          
          <Link to={`/games/${game._id}`}> */}
            {/* <button className="gamePartButton" onClick={this.handleClick}>{song.title}</button> */}
            {/* {game.picture ? <img src={game.picture} /> : <img src={image}/>} */}
          {/* </Link> 
         */}
          <a role="button" className="play" onClick={this.handleClick}>Play</a>
         
          
         <h3 className="songTitle">{song.title}</h3> 
        

         <Link to={song.display_name}>
           <h3 className="songUser">{song.display_name}</h3>
         </Link>

        </div>

        
      </>
   
      )
    }
}

export default SongPart;

