import React from 'react';
import { addPost, updateNewPostText, setUserProfile, getUser } from '../../../redux/profileReduser';
import { connect } from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  
  componentDidMount() { 
    let userId = this.props.match.params.userId;
    if(!userId) { userId = 10 }

    this.props.getUser(userId);
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
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}
//  ------ Альтернативный вариант возврата объекта ------

// let mapStateToProps = (state) => ( {
//     posts: state.profilePage.posts,
//     newPostText: state.profilePage.newPostText,
//     profile: state.profilePage.profile
//   }
// )

// withRouter возвращает новую комп. с id user - url строку
let withRouterUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps,
    { updateNewPostText, addPost, setUserProfile, getUser }
  )(withRouterUrl);