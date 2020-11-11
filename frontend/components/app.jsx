import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import HomePage from './home_page/home_page.jsx';
import ProfileContainer from './profile/profile_container';
import MusicPlayerContainer from './music_player/music_player_container';
import DiscoverContainer from './discover/discover_container';
import SongFormContainer from './song/song_form_container';
import LibraryContainer from './library/library_container';
import SearchResultsContainer from './search_results/search_results_container';

const App = () => (
    <BrowserRouter >
      <div id='main'>
        <Switch>
          <AuthRoute
            exact
            path="/"
            component={HomePage}
            loggedIn
          />
          <Route exact path="/discover" component={DiscoverContainer}/>
          <Route exact path="/upload" component={SongFormContainer}/>
          <Route exact path="/library" component={LibraryContainer}/>
          <Route exact path="/search_results/:searchInput" component={SearchResultsContainer}/>
          <Route exact path="/:display_name" component={ProfileContainer}/>       
        </Switch>
        <MusicPlayerContainer />
      </div>
    </BrowserRouter>
);

export default App;

