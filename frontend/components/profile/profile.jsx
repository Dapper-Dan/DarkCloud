import React from 'react';
import { NavLink } from 'react-router-dom';
import SongPartContainer from '../song/song_part_container'

class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.getSongs(this.props.match.params.display_name)
    }




    render(){
      let songs = Object.values(this.props.state.entities.songs);
      return(
        <>
      <div className="outtermost"> 
         
       
       

          <div className="cover" >
            yoyoyo
          </div>


          <div className="profile-songs">
            <ul>
                {songs.map((song) => (
                  <li key={song.id} className="song-box">
                    <SongPartContainer song={song} />
                    
                  </li>
                ))}
              </ul>
          </div>
        

      </div>
        </>
      )
    }
}

export default Profile;