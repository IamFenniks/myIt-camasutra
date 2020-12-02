import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';


const MyPostsForm = (props) => {
  // let newPostElement = React.createRef();
  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // }

  // let onAddPost = () => {
  //   props.addPost();
  // }
  
  return (
    <form onSubmit={ props.handleSubmit }>
        <div className={s.addPost}>
          <Field component={ "textarea" } name={ "message" } cols="30" rows="5" />
        </div>

        <div>
          <button>New post</button>
        </div>
    </form>

    // <div>
    //     <div className={s.addPost}><textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} cols="30" rows="5" /></div>

    //     <div><button onClick={onAddPost}>New post</button></div>
    // </div>

  );
}

export const MyPostsReduxForm = reduxForm({ form: 'addPost' })(MyPostsForm);