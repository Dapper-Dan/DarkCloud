import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';
import LoginFormContainer from '../session/login_form_container.jsx';
import SignupFormContainer from '../session/signup_form_container.jsx';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import Caro from '../caro'
import SongList from '../song/song_index';
import SongIndexContainer from '../song/song_index_container'
import SongForm from '../song/song_form'
import SongFormContainer from '../song/song_form_container'
import MusicPlayerContainer from '../music_player/music_player_container'
import MusicPlayer from '../music_player/music_player';
import SearchBarContainer from '../search_bar/search_bar_container'




class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loginForm: false,
        registerForm: false
    };

    this.handleSignup = this.handleSignup.bind(this);
    this.update = this.update.bind(this);
    this._next = this._next.bind(this);
    this.loginModelShow = this.loginModelShow.bind(this);
    this.registerModelShow = this.registerModelShow.bind(this);
    this.changeShow = this.changeShow.bind(this)
  }
    
  handleSignup(e) {
      e.preventDefault();
      const {email, password, display_name, age, gender } = this.state;
      this.props.action({email, password, display_name, age, gender });
  }


  loginModelShow() {
      this.setState( {loginForm : true})
  }

  registerModelShow() {
    this.setState( {registerForm : true})
}



  update(value) {
        return e => this.setState({ [value]: e.target.value });
    }
  
  _next() {
    const { step } = this.state
        this.setState({
            step : step + 1
        })
  }

  changeShow() {
    this.setState({
        loginForm: false,
        registerForm: false
    });
  }



  

  render() {
    return (

    <>
    <div className="mainLanding">
   
        
        <div className="frontHero" >

            <div className="transLogo">
                <img src={window.transLogo} width="105px" className="transWhite"  />
            </div> 

            <div className="caro-container" >  
                <Caro />
            </div>
       

            <div className="buttonsDiv" >
                <button className="login-modal-button" onClick={ this.loginModelShow }> Sign in </button>
                <button className="signup-modal-button" onClick={ this.registerModelShow }> Create account</button>
            </div>
        
        </div>

    
        <div className="signModal">
           { this.state.loginForm ?  <LoginFormContainer changeShow={this.changeShow} /> : '' }
           { this.state.registerForm ?  <SignupFormContainer changeShow={this.changeShow} /> : '' }
        </div>

        <div className="mainSearch">
           
              <SearchBarContainer />
              <p> or </p>
              <button> UPLOAD YOUR OWN TRACK </button>
           
        </div>

        <SongIndexContainer />
        <MusicPlayerContainer/>


    </div>    
    </>
    ) 
  }
}


export default HomePage;


{/* <NavBar /> 
<img src={window.logoURL} width="105px" />
<div className="homePage">
    <div className="transLogo">
        <img src={window.transLogo} width="105px" className="transWhite"  />
    </div> */}


//     <div className="signModal">
//     { this.state.loginForm ?  <LoginFormContainer changeShow={this.changeShow} /> : '' }
//     { this.state.registerForm ?  <SignupFormContainer changeShow={this.changeShow} /> : '' }

//  </div> 


// <div>
//            { this.state.loginForm ?  <LoginFormContainer changeShow={this.changeShow} /> : '' }
//            { this.state.registerForm ?  <SignupFormContainer changeShow={this.changeShow} /> : '' }
//            </div>