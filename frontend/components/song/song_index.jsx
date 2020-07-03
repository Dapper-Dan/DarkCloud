import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginFormContainer from '../session/login_form_container.jsx';
import SignupFormContainer from '../session/signup_form_container.jsx';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';


class SongList extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.getSongs()
    }




    render(){
      let songs = Object.values(this.props.songs);
      return(
       <div > 
          <ul>
            {songs.map((song) => (
              <li key={song.id} className="song-box">
                {song.name}
              </li>
            ))}
          </ul>
        </div>
    
      
      )
    }
}

export default SongList;