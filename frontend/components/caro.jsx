import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './nav_bar/nav_bar';
import LoginFormContainer from './session/login_form_container.jsx';
import SignupFormContainer from './session/signup_form_container.jsx';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';


class Caro extends React.Component {
    constructor(props) {
      super(props);

    
  }

  

  render() {
      

      return (
          <Carousel interval="5000" controls={false} className="caroMain"
            
          >
        <Carousel.Item >
        <img
            className="landing-slide"
            src={window.landing1}
            alt="First slide"
        />
        <Carousel.Caption>
            
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
        <img
            className="landing-slide"
            src={window.landing2}
            alt="Third slide"
        />

        <Carousel.Caption>
       
        </Carousel.Caption>
        </Carousel.Item>
       
    </Carousel>
    
    
    )
    }
}

export default Caro