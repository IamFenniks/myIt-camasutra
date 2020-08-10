import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';

// Стрелочная функция
// Объявляем переменную-функцию "const App"  и присваиваем "=" ей стрел. функцю " () => "
const App = () => {
  return (// -- должен быть только один тег-родитель-- Начало языка JSX>
    <div className="App">
      <div className="app-wrapper">

        <Header />
        <nav className="app-wrapper__nav nav">
          <Navbar />
        </nav>
        <article className="app-wrapper__article article">
          <Profile />
        </article>
        <footer className="app-wrapper__footer footer">

        </footer>
      </div>

    </div>
  );
}

export default App;
