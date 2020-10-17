import React from 'react';
import { NavLink } from 'react-router-dom';
import Song from './song_part'
import SongPartContainer from './song_part_container'


class SongList extends React.Component {
    constructor(props) {
      super(props);
      // this.state = this.props.getSongs('dan')
      this.state = {
        loading: true
      }
      this.props.getBunchSongs()
    }




    shouldComponentUpdate(nextProps) {
      if (nextProps.songs === undefined) {
          return false
      } else {
          return true
      }
    }

    componentDidMount() {
      this.setState( {loading: false})
    }


    

    render(){
      if (this.state.loading) {
        return (<p>loading...</p>)
      } else {
        let songs = Object.values(this.props.songs).sort((a, b) => {
          if (a.title > b.title) return 1
          if (a.title < b.title) return -1
        })
        console.log(songs)
      
        return(
        <div className="songList"> 
            <ul>
              {songs.map((song) => (
                <li key={song.id} className="song-box">
                  <SongPartContainer song={song} />
                  
                </li>
              )).slice(0,12)}
            </ul>
          </div>
      
        
        )
      }
    }
}

export default SongList;