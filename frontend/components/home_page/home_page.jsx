import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import Caro from '../caro';
import SongIndexContainer from '../song/song_index_container';
import SearchBarContainer from '../search_bar/search_bar_container';




class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: false,
      registerForm: false,
      showModal: false
    }

    this.loginModelShow = this.loginModelShow.bind(this);
    this.registerModelShow = this.registerModelShow.bind(this);
    this.changeShow = this.changeShow.bind(this);
  }
    

  loginModelShow() {
    this.setState({
      loginForm : true,
      showModal: true                   
    });
  }


  registerModelShow() {
    this.setState( {
      registerForm : true,
      showModal: true                   
    });
  }


  changeShow() {
    this.setState({
      loginForm: false,
      registerForm: false,
      showModal: false
    });
  }


  render() {
    if (this.state.showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    let showModal = (
    <div className="modal-background">
      <div className="signModal">
        {this.state.loginForm ?  <LoginFormContainer changeShow={this.changeShow}/> : ''}
        {this.state.registerForm ?  <SignupFormContainer changeShow={this.changeShow}/> : ''}
      </div>
    </div>
    );

    let noModal = "";
    let sessionModal;
    this.state.showModal ? (sessionModal = showModal) : (sessionModal = noModal);

    return (
      <>
      <div className="mainLanding">
        {sessionModal}
        <div className="frontHero">
          <div className="transLogo">
            <img src={window.transLogo} width="105px" className="transWhite"/>
          </div>
          <div className="caro-container">  
            <Caro/>
          </div>
          <div className="buttonsDiv" >
            <button className="login-modal-button" onClick={this.loginModelShow}>Sign in</button>
            <button className="signup-modal-button" onClick={this.registerModelShow}>Create account</button>
          </div>
        </div>
        <div className="mainSearch">
          <SearchBarContainer/>
          <p>or</p>
          <button className="homePageUploadButton">UPLOAD YOUR OWN TRACK</button>
        </div>
        <SongIndexContainer/>
        <div className="mainLanding" id="break">
          <img src={window.mobile}></img>
          <p>Unfortunately, we're not mobile friendly. Plans to bring this feature soon!</p>
        </div>
        <div className="homePageThanks">
          <img id="micro" src={window.microphone}></img>
          <button className="signup-modal-button" onClick={this.registerModelShow}>Create account</button>
        </div>
        <div className="homePageFooter">
          <div id="links">
            GitHub
            LinkedIn
          </div>
          Created by Daniel Lancaster
        </div>
      </div>    
      </>
    ); 
  }
}

export default HomePage;
