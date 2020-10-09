import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}

const PostsContainer = connect(mapStateToProps)(MyPosts);

export default PostsContainer;