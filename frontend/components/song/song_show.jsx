import React from 'react';

class SongShow extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
      let songs = Object.values(this.props.songs);
      return(
        <div > 
          <ul>
            {songs.map((song) => (
              <li key={song.id} className="song-box">
                {song.title}
              </li>
            ))}
          </ul>
        </div>
      );
    }
}

export default SongShow;