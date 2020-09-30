import React from 'react';

class SongForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        display_name: "",
        songURL: "",
        genre: "",
        tags: [],
        description: "",
        songImage: null,
        music: null,
        duration: null,
        waveForm: null 
      }
      this.props.getUser()


      this.handleSubmit = this.handleSubmit.bind(this);
      this.update = this.update.bind(this);
      this.showUploadInput = this.showUploadInput.bind(this)
      this.handleMusicUpload = this.handleMusicUpload.bind(this)
      this.handlePictureUpload = this.handlePictureUpload.bind(this)
      this.draw = this.draw.bind(this)
    }

    update(value) {
      return e => this.setState({ [value]: e.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('song[songImage]', this.state.songImage);
      formData.append('song[title]', this.state.title);
      formData.append('song[genre]', this.state.genre);
      formData.append('song[duration]', this.state.duration);
      formData.append('song[display_name]', this.props.user.display_name);
      formData.append('song[music]', this.state.music);
      formData.append('song[waveForm]', this.state.waveForm);
      this.props.action(formData)
    }

    handleMusicUpload(e) {
      const track = document.createElement('audio');
      const reader = new FileReader()
      reader.onloadend = () => { 
        track.src = reader.result;
      }
      reader.readAsDataURL(e.target.files[0])
      track.addEventListener('loadedmetadata', () => {
        this.setState({ duration: track.duration});
      })
                       
      this.setState({ music: e.target.files[0] }); 
     
      let audioContext = new (window.AudioContext || window.webkitAudioContext)()
      e.target.files[0].arrayBuffer()
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
          // this.sampleArray = this.normalizeData(this.filterData(audioBuffer))
          this.setState({ waveForm: this.draw(this.normalizeData(this.filterData(audioBuffer))) })
        })
    }

    filterData(audioBuffer) {
      const rawData = audioBuffer.getChannelData(0);
      const samples = 200;
      const blockSize = Math.floor(rawData.length / samples);
      const filteredData = [];
      for (let i = 0; i < samples; i++) {
        let blockStart = blockSize * i;
        let sum = 0;
        for (let j = 0; j < blockSize; j++) {
          sum = sum + Math.abs(rawData[blockStart + j]);
        }
        filteredData.push(sum / blockSize);
      }
      return filteredData
    }


    normalizeData(filteredData) {
      const multiplier = Math.pow(Math.max(...filteredData), -1);
      return filteredData.map(n => n * multiplier);
    }

    draw(normalizedData) {
      const canvas = document.createElement('canvas');
      canvas.width = 680
      canvas.height = 100
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 680, 100)
   
      ctx.fillStyle = "transparent"
      ctx.fillRect(0, 0, 680, 100)
      
     
       
      for (let i = 0; i < normalizedData.length; i++) {
         let height = normalizedData[i]
         ctx.fillStyle = "grey"
         ctx.fillRect(i * 3.5, 50, 2.3, height * -50)
         ctx.fillRect(i * 3.5, 50, 2.3, height * 50)
      }
     
      return canvas.toDataURL('image/png', 1.0)
    }

    handlePictureUpload(e) {
      this.setState({ songImage: e.target.files[0] });
    }

    showUploadInput() {
      let input = document.getElementById("music-file-input")
      input.click()
    }

    // handleDrop() {

    // }







    render() {
        const {title} = this.state
        const values = {title};
        const genres = ["Classical", "Country", "Dance & EDM", "Disco", "Jazz", "Hip-Hop", "Indie", "Metal", "Latin", "R&B", "Rock", "World"]
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
            

            <h2> Choose a picture </h2>
            {/* <button className="fileUploadButton" onClick={this.showUploadInput}>  </button> */}
            <input
              id="pic-file-input"
              type="file"
            
              onChange={this.handlePictureUpload}
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