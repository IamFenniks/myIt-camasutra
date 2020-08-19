import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/pages/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './componets/pages/Music/Music';
import Setting from './componets/pages/Settings/Settings';
import News from './componets/pages/News/News';
import Settings from './componets/pages/Settings/Settings';
import Dialogs from './componets/pages/Dialogs/Dialogs';

// Стрелочная функция
// Объявляем переменную-функцию "const App"  и присваиваем "=" ей стрел. функцю " () => "
const App = (props) => {
  
  let SomeComponent = () => <Dialogs dialogsData={ props.dialogsData } />;

  return (// -- должен быть только один тег-родитель-- Начало языка JSX>
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <nav className="app-wrapper__nav nav">
          <Navbar />
        </nav>

        <article className="app-wrapper__article article">
          <Route path='/profile' render={ () => <Profile postsData={props.postsData} /> } />
          <Route path='/dialogs' component={ SomeComponent } />
          <Route path='/news' component={ () => <News /> } />
          <Route path='/music' component={ Music } />
          <Route path='/settings' component={ Settings } />
        </article>

        <footer className="app-wrapper__footer footer">
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
