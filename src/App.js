import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header   from './componets/Header/Header';
import Navbar   from './componets/Sidebar/Navbar/Navbar';
import Profile  from './componets/pages/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Music    from './componets/pages/Music/Music';
import Setting  from './componets/pages/Settings/Settings';
import News     from './componets/pages/News/News';
import Settings from './componets/pages/Settings/Settings';
import Dialogs  from './componets/pages/Dialogs/Dialogs';
import Sidebar from './componets/Sidebar/Sidebar';
import { addPost } from './redux/state';

// Стрелочная функция
// Объявляем переменную-функцию "const App"  и присваиваем "=" ей стрел. функцю " () => "
const App = (props) => {
  return (// -- должен быть только один тег-родитель-- Начало языка JSX>
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Sidebar state={props.state.sideBar} />

        <article className="app-wrapper__article article">
          <Route path='/profile'
            render={ () => 
              <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
              /> 
            } 
          />

          <Route path='/dialogs'
           render={ () => 
              <Dialogs 
                state={props.state.dialogsPage}
              /> 
            } 
          />

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
