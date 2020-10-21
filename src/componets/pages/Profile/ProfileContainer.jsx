import React from 'react';
import { addPost, updateNewPostText, setUserProfile } from '../../../redux/profileReduser';
import { connect } from 'react-redux';
import Profile from './Profile';
import Axios from 'axios';

debugger;
class ProfileContainer extends React.Component {
  
  componentDidMount() { 
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
        .then(response => {
            this.props.setUserProfile(response.data);
             
        }
    );
}

  
  render() {
    return (
      <Profile
        { ...this.props }
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

export default connect(mapStateToProps,
    { updateNewPostText, addPost, setUserProfile }
  )(ProfileContainer);