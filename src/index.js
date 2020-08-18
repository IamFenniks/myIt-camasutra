import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from './componets/pages/Profile/MyPosts/Post/Post';

let posts = [
  {id: 0, title: 'Post 1', like: 23},
  {id: 1, title: 'Post 2', like: 432},
  {id: 2, title: 'Post 3', like: 54},
  {id: 3, title: 'Post 4', like: 0},
  {id: 4, title: 'Post 5', like: 34567},
];
let postsData = posts
  .map(p => <Post title={p.title} like={p.like} />);

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
