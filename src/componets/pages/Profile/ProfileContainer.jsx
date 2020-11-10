import React from 'react';
import { addPost, updateNewPostText, setUserProfile } from '../../../redux/profileReduser';
import { connect } from 'react-redux';
import Profile from './Profile';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../../api/api';

class ProfileContainer extends React.Component {
  
  componentDidMount() { 
    let userId = this.props.match.params.userId;
    if(!userId) { userId = 10 }

    usersAPI.getUser(userId)
        .then(data => {
            this.props.setUserProfile(data);
             
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

let withRouterUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps,
    { updateNewPostText, addPost, setUserProfile }
  )(withRouterUrl);