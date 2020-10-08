import React from 'react';
import { connect } from 'react-redux';
import Post from './Post/Post';

let mapStateToProps = (state) => {
  return {
    title: state.title,
    message: state.message
  }
}

const PostContainer = connect(mapStateToProps)(Post);

export default PostContainer;