import React from 'react';
import { addPost, updateNewPostText, setUserProfile } from '../../../redux/profileReduser';
import { connect } from 'react-redux';
import Profile from './Profile';
import Axios from 'axios';

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
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
  }
}
//  ------ Альтернативный вариант возврата объекта ------

// let mapStateToProps = (state) => ( {
//     posts: state.profilePage.posts,
//     newPostText: state.profilePage.newPostText,
//     profile: state.profilePage.profile
//   }
// )

export default connect(mapStateToProps,
    { updateNewPostText, addPost, setUserProfile }
  )(ProfileContainer);