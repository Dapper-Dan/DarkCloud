import { connect } from "react-redux";
import SearchBar from './search_bar'


const mSTP = state => ({
  user: state.session.user,
  navType: 'default'
});

const mDTP = (dispatch) => ({
  action: (song) => dispatch(createSong(song)),
  getUser: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SearchBar);
