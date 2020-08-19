import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from './componets/pages/Profile/MyPosts/Post/Post';
import UserDialog from './componets/pages/Dialogs/UserDialog/UserDialog';

// Profile -> Posts  Profile -> Posts  Profile -> Posts 
let posts = [
  {id: 0, title: 'Post 1', like: 23},
  {id: 1, title: 'Post 2', like: 432},
  {id: 2, title: 'Post 3', like: 54},
  {id: 3, title: 'Post 4', like: 0},
  {id: 4, title: 'Post 5', like: 34567},
];
let postsData = posts
  .map(p => <Post title={p.title} like={p.like} />);

// Profile -> Posts  Profile -> Posts  Profile -> Posts 
//-----------------------------------------------------
// Dialogs -> Users  Dialogs -> Users  Dialogs -> Users 

let dialogsData = [
  { id: 0, name: 'Nick' },
  { id: 1, name: 'Mishele' },
  { id: 2, name: 'Victor' },
  { id: 3, name: 'Andrey' },
  { id: 4, name: 'John' },
  { id: 5, name: 'Tom' },
  { id: 6, name: 'Anna' }
];
let dialogsItem = dialogsData
  .map(dialog => <UserDialog userName={dialog.name} id={dialog.id} />);

// Dialogs -> Users  Dialogs -> Users  Dialogs -> Users 
//-----------------------------------------------------
// Dialogs -> Messa  Dialogs -> Messa  Dialogs -> Messa



// Dialogs -> Messa  Dialogs -> Messa  Dialogs -> Messa

ReactDOM.render(
  <React.StrictMode>
    <App postsData={ postsData } dialogsData={ dialogsItem } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
