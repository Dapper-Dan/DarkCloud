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
        showConfirmCover: false,
        showConfirmProfile: false,
        showPicOption: false,
        picOption: '',
        loading: true,
        showEditModal: false,
        display_name: "",
        city: "",
        country: "",
        first_name: "",
        last_name: ""
    }
      this.props.getSongs(this.props.match.params.display_name)
      this.props.fetchUserInfo(this.props.match.params.display_name);
      this.props.fetchUser(this.props.state.session.currentUser.id)

      this.change = this.change.bind(this)
      this.update = this.update.bind(this)
      this.uploadProfileImage = this.uploadProfileImage.bind(this)
      this.showProfileUploadInput = this.showProfileUploadInput.bind(this)
      this.cancelUpload = this.cancelUpload.bind(this)
      this.uploadCoverImage = this.uploadCoverImage.bind(this)
      this.handleUserClick = this.handleUserClick.bind(this)
      this.change = this.change.bind(this)

      
      

    }
   

    change() {
      const formData = new FormData();
      formData.append('user[display_name]', this.val);
      this.props.editUser({form: formData, user: this.props.currentUser, songs: this.props.songs})
      .then(() => history.pushState({}, "", `/${this.val}`))
      
    }

    componentDidMount() {
      this.setState({loading: false})
 
    }

    componentDidUpdate() {
      console.log('cdid')
      if (this.props.state.entities.users.profile_user && this.props.state.entities.users.profile_user.display_name !== this.props.match.params.display_name) { //might switch this to profile_user
        console.log('update')
        this.props.fetchUserInfo(this.props.match.params.display_name);
        this.props.fetchUser(this.props.state.session.currentUser.id)
        // this.props.getSongs(this.props.profileUser)
        this.props.getSongs(this.props.match.params.display_name)
       
      }
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
      
      if (value === "cover_pic") {
        this.setState({showConfirmCover: true})
      } else {
        this.setState({showConfirmProfile: true})
      }
      this.setState({showPicOption: true})
      
      }
    }



    change(value) {
      return e => this.setState({ [value]: e.target.value });
    }

    handleUserClick() {
      this.setState({showEditModal: true})
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
      this.setState({
        showConfirmProfile: false,
        showConfirmCover: false,
        showPicOption: false
      })
    }

    uploadCoverImage(e) {
      e.preventDefault()
      const formData = new FormData();
      formData.append('user[cover_photo]', this.cover_pic);
      this.props.editUser({form: formData, user: this.props.currentUser, songs: this.props.songs})
      this.setState({
        showConfirmCover: false,
        showConfirmProfile: false,
        showPicOption: false
      })
    }

    cancelUpload() {
      this.setState({
        showConfirmCover: false, 
        showPicOption: false,
        showConfirmProfile: false
      })
    }


    render(){
    //  console.log(this.props.match.params.display_name)
    console.log('render')
     
      if(this.state.loading) return (<div>loading....</div>)
    
      let songs
      if (this.props.state.entities.songs.songs) {
      songs = Object.values(this.props.state.entities.songs.songs).sort((a, b) => {
          if (new Date(a.music.record.created_at).valueOf() > new Date(b.music.record.created_at).valueOf()) return -1
          if (new Date(a.music.record.created_at).valueOf() < new Date(b.music.record.created_at).valueOf()) return 1
          if (new Date(a.music.record.created_at).valueOf() === new Date(b.music.record.created_at).valueOf()) return 0
      })
     
      // } else if (this.props.state.entities.songs) {
      //   songs = Object.values(this.props.state.entities.songs).sort((a, b) => {
      //     if (new Date(a.music.record.created_at).valueOf() > new Date(b.music.record.created_at).valueOf()) return -1
      //     if (new Date(a.music.record.created_at).valueOf() < new Date(b.music.record.created_at).valueOf()) return 1
      //     if (new Date(a.music.record.created_at).valueOf() === new Date(b.music.record.created_at).valueOf()) return 0
      //   })
      // } else {
      // } else {
      //   return (<div>loading...</div>)
      }

      

      let renderSongs
      if (songs && songs.length > 0) {
        console.log(songs)
        console.log('itsrendersongs1')
        renderSongs = (
          <ul>
            {songs.map((song, i) => ( 
              <li key={i} className="song-box" >
                <SongPartContainer song={song} profile={true} />
                    
              </li>
            ))}
          </ul>
        )
      } else {
        renderSongs = (
          <div className="profileNoSongs" >
            <p>Listening to music is fun but so is sharing. Upload some tunes today!</p>
          </div>
        )
      }

     

      let user
      
      if (this.props.profileUser) {
        user = this.props.profileUser
      } else {
        user = ""
      }
      

      let currentUserProfile
      if (this.props.currentUser) {
        if (this.props.currentUser.id === user.id) currentUserProfile = true;
      }

      // let liked_songs
      // if (currentUserProfile) liked_songs = user.likes

      // // console.log(liked_songs)

      // let location
      // if (user.location) {
      //   location = user.location
      // } else {
      //   location = ""
      // }

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
{/* 
        <div className="profille-pic-upload-button"> */}

        {!this.state.showConfirmProfile ? 
          (<button className="profille-pic-upload-button" onClick={this.showProfileUploadInput}>Upload image</button>) : (
          <>
          <div className="profile-pic-cancelConfirm">
            <button onClick={this.cancelUpload}>Cancel</button>
            <button id="profile-confirm" onClick={this.uploadProfileImage}>Confirm</button>
          </div>
          </>)
        }
        {/* </div> */}
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

        {/* <div className="cover-pic-upload-button"> */}

        {!this.state.showConfirmCover ? 
          (<button className="cover-pic-upload-button" onClick={this.showCoverUploadInput}>Upload image</button>) : (
          <>
          <div className="cover-pic-cancelConfirm">
            <button onClick={this.cancelUpload}>Cancel</button>
            <button id="cover-confirm" onClick={this.uploadCoverImage}>Confirm</button>
          </div>
          </>)
        }

        {/* </div> */}
          </>
          
        )
      }


      let userEditButton
      if (currentUserProfile) {
        userEditButton = (
          
            <button id="userEditButton" onClick={this.handleUserClick}>Edit</button>
          
        )
      }

      let userEditModal 
      if (this.props.currentUser) {
      userEditModal = (
        <>

        
        <div className="userEditFormBackground" >
          <div className="userEditForm">
            <div className="userEditHeader">Edit your profile</div>
            <div className="userEditWrapper">
              <div className="picUploadBox">

                {this.props.currentUser ? <img src={this.props.currentUser.profilePicUrl} width="250px" height="250px" ></img> : ""}
                
              </div>

              <div className="userEditInfoBox">

                <h3>Display name</h3>
                <input 
                      className="displayNameInput"
                      placeholder={this.props.currentUser.display_name}
                      type="text"
                      onChange={this.change('display_name')}
                      value={this.state.display_name} 
                /> 

                <div className="locationWrapper">
                  <div className="locationCityWrapper">
                    <h3>City</h3>
                    <input 
                          className="cityInput"
                          placeholder={this.props.currentUser.city}
                          type="text"
                          onChange={this.change('city')}
                          value={this.state.city} 
                    />
                  </div> 

                  <div className="locationCountryWrapper">
                    <h3>Country</h3>
                    <input 
                          className="countryInput"
                          placeholder={this.props.currentUser.country}
                          type="text"
                          onChange={this.change('country')}
                          value={this.state.country} 
                    />
                  </div> 
                </div>

                <div className="nameWrapper">
                  <div className="firstNameWrapper" >
                    <h3>First name</h3>
                    <input 
                          className="firstNameInput"
                          placeholder={this.props.currentUser.first_name}
                          type="text"
                          onChange={this.change('first_name')}
                          value={this.state.first_name} 
                    />
                  </div> 

                  <div className="lastNameWrapper">
                    <h3>Last name</h3>
                    <input 
                          className="lastNameInput"
                          placeholder={this.props.currentUser.last_name}
                          type="text"
                          onChange={this.change('last_name')}
                          value={this.state.last_name} 
                    />
                  </div> 
                </div>
              <button className="songFormCancelButton">Cancel</button>
              <button className="songFormButton">Save changes</button>
              </div>
            </div>
          </div>
        </div> 
        </>
      )}
  
     
      
      return(
        <>
    
       <div className="nav_bar_background" ></div>
       
       <div className="nav-con" >
          { this.props.currentUser ? <UserNavBarContainer /> : <NavBarContainer /> }
          <SearchBarContainer/>
        </div>

        {this.state.showEditModal ? userEditModal : ""}

       <div className="outtermost"> 

        

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
                  {/* <a className="location-plate" > {location} </a> */}
                </div>

                
            </div>
            {coverPictureUpload}
          </div> 
          {profilePictureUpload}
          {currentUserProfile ? userEditButton : ""}
          <SongNavBarContainer /> 
          


            <p id="recent">Recent</p>
            <div className="profile-songs">
              {renderSongs}
           </div> 

       
        
           <div className="endOfContentFooter"></div>
       </div>

      
        </>
      )
    }
}

export default Profile;