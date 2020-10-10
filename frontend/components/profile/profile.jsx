import React from 'react';
import { NavLink } from 'react-router-dom';
import SongPartContainer from '../song/song_part_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SongNavBarContainer from '../nav_bar/song_nav_bar_container'
import SearchBarContainer from '../search_bar/search_bar_container'
import MusicPlayerContainer from '../music_player/music_player_container'

class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.getSongs(this.props.match.params.display_name);
    
      this.props.fetchUserInfo(this.props.match.params.display_name);

    }
    // cover_photo: null,
     //profile_photo: null
   


    // componentDidUpdate() {
    //   console.log('1')
    //   this.props.getSongs(this.props.match.params.display_name);
    // }
    // componentDidMount(){
    //   console.log('1')
    //   this.setState({hi: 'hello'})
    // }



    render(){
     
      // console.log(this.props.state)
      let songs
      if (this.props.state.entities.songs.songs) {
      songs = Object.values(this.props.state.entities.songs.songs);
      } else {
        songs = Object.values(this.props.state.entities.songs)
      }

      let user
      
      if (this.props.state.entities.users.profile_user) {
        user = this.props.state.entities.users.profile_user
      } else {
        user = ""
      }

      let location
      if (user.location) {
        location = user.location
      } else {
        location = ""
      }
  
     
      
      return(
        <>
    
       <div className="nav_bar_background" ></div>

       <div className="outtermost"> 


        <div className="nav-con" >
          <NavBarContainer />
          <SearchBarContainer/>
        </div>

          <div className="cover" >
             <img src={window.cover} className="cover-photo" />
             {/* if profile is same as currentuser, then give edit option  */}

                   <div className="profile-box" >
                     <img src={window.profile} className="profile-photo" />
                          <div className="info-basic">
                             <a className="nameplate" > {user.display_name} </a>
                             <a className="location-plate" > {location} </a>
                          </div>
                    </div>
            </div> 
 

          <SongNavBarContainer /> 

            <p id="recent">Recent</p>
            <div className="profile-songs">
              <ul>
                  {songs.map((song) => ( 
                     <li key={song.id} className="song-box" >
                      <SongPartContainer song={song} profile={true} />
                    
                     </li>
                   ))}
                 </ul>
           </div> 

        <MusicPlayerContainer/>
        

       </div>

        
        </>
      )
    }
}

export default Profile;