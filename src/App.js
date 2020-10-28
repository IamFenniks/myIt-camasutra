import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header   from './componets/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Music    from './componets/pages/Music/Music';
import News     from './componets/pages/News/News';
import Settings from './componets/pages/Settings/Settings';
import Dialogs  from './componets/pages/Dialogs/Dialogs';
import Sidebar from './componets/Sidebar/Sidebar';
import UsersContainer from './componets/pages/Users/UsersContainer';
import ProfileContainer from './componets/pages/Profile/ProfileContainer';
import HeaderContainer from './componets/Header/HeaderContainer';

// Стрелочная функция
// Объявляем переменную-функцию "const App"  и присваиваем "=" ей стрел. функцю " () => "
// В props приходит   ---  state={ store.getState() }   ----    dispatch={ store.dispatch.bind(store) }
const App = (props) => {
  return (// -- должен быть только один тег-родитель-- Начало языка JSX>
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />

        <Sidebar />

        <article className="app-wrapper__article article">
          <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
          <Route path='/dialogs' render={ () => <Dialogs /> }  />
          <Route path='/news' component={ () => <News /> } />
          <Route path='/music' component={ Music } />
          <Route path='/users' render={ () => <UsersContainer /> } />
          <Route path='/settings' component={ Settings } />
        </article>

        <footer className="app-wrapper__footer footer">
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
