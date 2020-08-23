import React from 'react';
import { NavLink } from 'react-router-dom';
import SongPartContainer from '../song/song_part_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SongNavBarContainer from '../nav_bar/song_nav_bar_container'
import SearchBarContainer from '../search_bar/search_bar_container'

class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.getSongs(this.props.match.params.display_name);
    
      this.props.fetchUserInfo(this.props.match.params.display_name);

      this.searchUpdate = this.searchUpdate.bind(this)
    }
    // cover_photo: null,
     //profile_photo: null
    searchUpdate(value) {
      return e => this.setState({ [value]: e.target.value });
    }

   

    mysearchfunction() {
      return this.state.searchInput.filter()
    }


    render(){
      // console.log(this.state)
      let songs = Object.values(this.props.state.entities.songs);

      let user
      if (Object.values(this.props.state.entities.users)[0]) {
        user = Object.values(this.props.state.entities.users)[0]
      } else {
        user = ""
      }

      let location
      if (user.location) {
        location = user.location
      } else {
        location = ""
      }
  
      
      // console.log(user)
      return(
        <>
    
       <div className="nav_bar_background" ></div>

       <div className="outtermost"> 


         <div className="nav-con" >
           <NavBarContainer />
          
           <input className="searchBar" placeholder="  Search for music or podcasts" type="text" value={this.state.searchInput || ''} onChange={this.searchUpdate('searchInput')} />
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

            <div className="profile-songs">
              <ul>
                  {songs.map((song) => ( 
                     <li key={song.id} className="song-box">
                      <SongPartContainer song={song} profile={true} />
                    
                     </li>
                   ))}
                 </ul>
           </div> 
        

       </div>

        <SearchBarContainer/>
        </>
      )
    }
}

export default Profile;