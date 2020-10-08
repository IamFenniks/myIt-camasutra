import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header   from './componets/Header/Header';
import Profile  from './componets/pages/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Music    from './componets/pages/Music/Music';
import News     from './componets/pages/News/News';
import Settings from './componets/pages/Settings/Settings';
import Dialogs  from './componets/pages/Dialogs/Dialogs';
import Sidebar from './componets/Sidebar/Sidebar';

// Стрелочная функция
// Объявляем переменную-функцию "const App"  и присваиваем "=" ей стрел. функцю " () => "
// В props приходит   ---  state={ store.getState() }   ----    dispatch={ store.dispatch.bind(store) }
const App = (props) => {
  return (// -- должен быть только один тег-родитель-- Начало языка JSX>
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Sidebar />

        <article className="app-wrapper__article article">
          <Route path='/profile' render={ () => <Profile /> } />
          <Route path='/dialogs' render={ () => <Dialogs /> }  />
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
