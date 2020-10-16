import React from 'react';
import { NavLink } from 'react-router-dom';
import SongPartContainer from '../song/song_part_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import SongNavBarContainer from '../nav_bar/song_nav_bar_container'
import SearchBarContainer from '../search_bar/search_bar_container'
import MusicPlayerContainer from '../music_player/music_player_container'
import UserNavBarContainer from '../nav_bar/user_nav_bar_container'

class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        songs :this.props.getSongs(this.props.match.params.display_name), //useless?
        showConfirm: false,
        showPicOption: false,
        picOption: '',
        loading: true
    }
    
      this.props.fetchUserInfo(this.props.match.params.display_name);

      this.change = this.change.bind(this)
      this.update = this.update.bind(this)
      this.uploadProfileImage = this.uploadProfileImage.bind(this)
      this.showProfileUploadInput = this.showProfileUploadInput.bind(this)
      this.cancelUpload = this.cancelUpload.bind(this)
      this.uploadCoverImage = this.uploadCoverImage.bind(this)

    }
    // cover_photo: null,
     //profile_photo: null
   


    change() {
      const formData = new FormData();
      formData.append('user[display_name]', this.val);
      this.props.editUser({form: formData, user: this.props.currentUser, songs: this.props.songs})
      .then(() => history.pushState({}, "", `/${this.val}`))
      
    }

    componentDidMount() {
      this.setState({loading: false})
    }

    update(value) {
      return e => {
      this[value] = e.target.files[0]
      let file = e.target.files[0]
      
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        this.setState({ [value]: fileReader.result })
      }
    
      this.setState({showConfirm: true})
      this.setState({showPicOption: true})
      
      }
    }

      

    showProfileUploadInput() {
      let input = document.getElementById("profile-pic-input")
      input.click()
    }

    showCoverUploadInput() {
      let input = document.getElementById("cover-pic-input")
      input.click()
    }

    uploadProfileImage(e) {
      e.preventDefault()
      const formData = new FormData();
      formData.append('user[profile_photo]', this.profile_pic);
      this.props.editUser({form: formData, user: this.props.currentUser, songs: this.props.songs})
      this.setState({showConfirm: false})
    }

    uploadCoverImage(e) {
      e.preventDefault()
      const formData = new FormData();
      formData.append('user[cover_photo]', this.cover_pic);
      this.props.editUser({form: formData, user: this.props.currentUser, songs: this.props.songs})
      this.setState({showConfirm: false})
    }

    cancelUpload() {
      this.setState({showConfirm: false, showPicOption: false})
    }


    render(){
      console.log(window.profile)
      if(this.state.loading) return (<div>loading....</div>)
      console.log(this.state)
      let songs
      if (this.props.state.entities.songs.songs) {
      songs = Object.values(this.props.state.entities.songs.songs).sort((a, b) => {
          if (new Date(a.music.record.created_at).valueOf() > new Date(b.music.record.created_at).valueOf()) return -1
          if (new Date(a.music.record.created_at).valueOf() < new Date(b.music.record.created_at).valueOf()) return 1
          if (new Date(a.music.record.created_at).valueOf() === new Date(b.music.record.created_at).valueOf()) return 0
      })
     
      } else if (this.props.state.entities.songs) {
        songs = Object.values(this.props.state.entities.songs).sort((a, b) => {
          if (new Date(a.music.record.created_at).valueOf() > new Date(b.music.record.created_at).valueOf()) return -1
          if (new Date(a.music.record.created_at).valueOf() < new Date(b.music.record.created_at).valueOf()) return 1
          if (new Date(a.music.record.created_at).valueOf() === new Date(b.music.record.created_at).valueOf()) return 0
        })
      } else {
        return (<div>loading...</div>)
      }

     

      let user
      
      if (this.props.state.entities.users.profile_user) {
        user = this.props.state.entities.users.profile_user
      } else {
        user = ""
      }
      

      let currentUserProfile
      if (this.props.currentUser.id === user.id) currentUserProfile = true;

      let liked_songs
      if (currentUserProfile) liked_songs = user.likes

      // console.log(liked_songs)

      let location
      if (user.location) {
        location = user.location
      } else {
        location = ""
      }

      // let pictureUpload
      // if (currentUserProfile) {  CHANGE DISPLAY INFO
      
      //   pictureUpload = (
      //     <>
      //     <input
      //     className="signup-email-input" 
      //     placeholder="Your email address"
      //     type="text"
      //     onChange={this.update('email')}
      //     value={this.val}
      //   />
      //     <button onClick={this.change}>Upload image</button>
      //     </>
      //     )
      // }
      let profPic
      if (this.profile_pic && this.state.showPicOption) {
        profPic = this.state.profile_pic
      } else {
        profPic = user.profilePicUrl
      }

      let coverPic
      if (this.cover_pic && this.state.showPicOption) {
        coverPic = this.state.cover_pic
      } else {
        coverPic = user.coverPicUrl
      }


      let profilePictureUpload
      if (currentUserProfile) {  
      
        profilePictureUpload = (
          <>
          <input
          id="profile-pic-input"
          type="file"
          onChange={this.update('profile_pic')}
          style={{display:'none'}}
        />

        {!this.state.showConfirm ? 
          (<button onClick={this.showProfileUploadInput}>Upload image</button>) : (
          <>
          <button onClick={this.uploadProfileImage}>Confirm Change</button>
          <button onClick={this.cancelUpload}>Cancel Change</button>
          </>)
        }
          </>
          
          )
      }

      let coverPictureUpload
      if (currentUserProfile) {  
      
        coverPictureUpload = (
          <>
          <input
          id="cover-pic-input"
          type="file"
          onChange={this.update('cover_pic')}
          style={{display:'none'}}
        />

        {!this.state.showConfirm ? 
          (<button onClick={this.showCoverUploadInput}>Upload image</button>) : (
          <>
          <button onClick={this.uploadCoverImage}>Confirm Change</button>
          <button onClick={this.cancelUpload}>Cancel Change</button>
          </>)
        }
          </>
          
          )
      }
  
     
      
      return(
        <>
    
       <div className="nav_bar_background" ></div>

       <div className="outtermost"> 

        <div className="nav-con" >
          { this.props.currentUser ? <UserNavBarContainer /> : <NavBarContainer /> }
          <SearchBarContainer/>
        </div>

          <div className="cover" >
            {user.coverPicUrl ? (
             <img src={coverPic} className="cover-photo" width="1200px" />
            ):(
             <img src={window.cover} className="cover-photo" />
            )}
            

                   <div className="profile-box" >
                     {user.profilePicUrl ? (
                       <img src={profPic} className="profile-photo" />
                     ):(
                      <img src={window.profile} className="profile-photo" />
                     )}
                     
                          <div className="info-basic">
                             <a className="nameplate" > {user.display_name} </a>
                             <a className="location-plate" > {location} </a>
                          </div>
                    </div>
            </div> 
 {coverPictureUpload}
            {profilePictureUpload}
          <SongNavBarContainer /> 

            <p id="recent">Recent</p>
            <div className="profile-songs">
              <ul>
                  {songs.map((song, i) => ( 
                     <li key={i} className="song-box" >
                      <SongPartContainer song={song} profile={true} />
                    
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