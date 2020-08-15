import React from 'react';
import { NavLink } from 'react-router-dom';
import Song from './song_part'
import SongPartContainer from './song_part_container'


class SongList extends React.Component {
    constructor(props) {
      super(props);
      // this.state = this.props.getSongs('dan')
      this.state = this.props.getBunchSongs()
    }




    render(){
      let songs = Object.values(this.props.songs);
      return(
       <div className="songList"> 
          <ul>
            {songs.map((song) => (
              <li key={song.id} className="song-box">
                <SongPartContainer song={song} />
                
              </li>
            ))}
          </ul>
        </div>
    
      
      )
    }
}

export default SongList;