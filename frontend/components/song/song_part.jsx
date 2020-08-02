import React from 'react';
import { NavLink } from 'react-router-dom';



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
        <div>
         {song.pictureUrl ? (
             <img src={song.pictureUrl}/>
             ) : (
               <img src={""} /> 
           
             )}
         
          {/* <Link to={`/games/${game._id}`}> */}
            <button className="gamePartButton" onClick={this.handleClick}>{song.title}</button>
            {/* {game.picture ? <img src={game.picture} /> : <img src={image}/>} */}
          {/* </Link>  */}
          
        </div>
    
      
      )
    }
}

export default SongPart;

