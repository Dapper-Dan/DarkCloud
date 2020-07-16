import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginFormContainer from '../session/login_form_container.jsx';
import SignupFormContainer from '../session/signup_form_container.jsx';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';


class SongForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          title: "",
          display_name: "",
          songImageURL: "",
          genre: "",
          tags: [],
          description: "",
          songImageFile: "",
          music: null
          
      }
      this.props.getUser()


      this.handleSubmit = this.handleSubmit.bind(this);
      this.update = this.update.bind(this);
      this.showUploadInput = this.showUploadInput.bind(this)
      this.handleMusicUpload = this.handleMusicUpload.bind(this)
    }

    update(value) {
        return e => this.setState({ [value]: e.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('song[title]', this.state.title);
      formData.append('song[genre]', this.state.genre);
                // formData.append('song[description]', this.state.description);
      formData.append('song[display_name]', this.props.user.display_name);
      formData.append('song[music]', this.state.music);
      this.props.action(formData)

        // this.setState({display_name: this.props.user.display_name})
        // const {title, display_name, music} = this.state;
        // this.props.action({title, music, display_name});
    }

    handleMusicUpload(e) {
      this.setState({ music: e.target.files[0] }); 
    }

    showUploadInput() {
      let input = document.getElementById("music-file-input")
      input.click()
  }





    render(){
        const {title} = this.state
        const values = {title};
        const genres = ["Classical", "Country", "Dance & EDM", "Disco", "Jazz", "Indie", "Metal", "Latin", "R&B", "Rock", "World"]
      return (
        <>
          <div className="fileUploadForm">
            <h1> Drag and drop your tracks & albums here </h1>

            <button className="fileUploadButton" onClick={this.showUploadInput}> or choose files to upload </button>
            
            <input
              id="music-file-input"
              type="file"
              style={{display:'none'}}
              onChange={this.handleMusicUpload}
            />

          </div>

          <div className="songForm">
              <h1>Title</h1>
              <input 
                className="nameInput"
                placeholder="Enter track title"
                type="text"
                onChange={this.update('title')}
                value={values.title} 
              />

              <h2>Genre</h2>
              <select className="songFormGenre" onChange={ this.update('genre') } defaultValue='' >
                <option disabled value="">None</option>
                {genres.map((genre, index) => (
                    <option key={index} value={genre}> {genre} </option>
                ))}
              </select>

              <h3>Title</h3>
              <textarea 
                className="descriptionInput"
                rows="6"
                cols="60"
                placeholder="Describe your track"
                onChange={this.update('description')}
                value={values.description} 
              />

              <button className="songFormButton" onClick={this.handleSubmit}>  Submit Song </button>

          </div>

          </>

      )
    }
}

export default SongForm;