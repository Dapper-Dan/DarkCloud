import React from 'react';
import NavBar from './nav_bar/nav_bar.jsx'
import SignupFormContainer from './session/signup_form_container.jsx';
import { Route, Switch, Router } from 'react-router-dom';
import { ProtectedRoute} from '../util/route_util';
import { createBrowserHistory } from 'history';
import HomePage from './home_page/home_page.jsx';
import LoginFormContainer from './session/login_form_container.jsx';

const customHistory = createBrowserHistory();
const App = () => (
    <Router history={customHistory}>
       <div id='main'>
        
      <Switch history={customHistory}>
              <ProtectedRoute exact path="/register" component={SignupFormContainer} loggedIn />
              {/* <Route exact path="/" component={SignupFormContainer} /> */}
              <ProtectedRoute
                exact
                path="/login"
                component={LoginFormContainer}
                loggedIn
              />
              {/* <Route exact path="/navbar" component={NavBarContainer} /> */}
             <Route exact path="/" component={HomePage} />

      </Switch>
       </div>
    </Router>
    

);

export default App;

