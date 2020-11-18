import React from 'react';
import { addPost, updateNewPostText, setUserProfile, getUser } from '../../../redux/profileReduser';
import { connect } from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hocs/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  
  componentDidMount() { 
    let userId = this.props.match.params.userId;
    if(!userId) { userId = 10 }

    this.props.getUser(userId);
    this.props.getUserStatus(userId);
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
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
  }
}
//  ------ Альтернативный вариант возврата объекта ------

// let mapStateToProps = (state) => ({ posts: state.profilePage.posts, newPostText: state.profilePage.newPostText, profile: state.profilePage.profile })

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// // withRouter возвращает новую комп. с id user - url строку
// let withRouterUrl = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps,
//     { updateNewPostText, addPost, setUserProfile, getUser }
//   )(withRouterUrl);

export default compose(
  connect(mapStateToProps, { updateNewPostText, addPost, setUserProfile, getUser }),
  //withAuthRedirect,
  withRouter
)(ProfileContainer)