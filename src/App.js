import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import Navbar from './componets/Navbar';
import Profile from './componets/Profile';

// Стрелочная функция
// Объявляем переменную-функцию "const App"  и присваиваем "=" ей стрел. функцю " () => "
const App = () =>{
  return (// -- должен быть только один тег-родитель-- Начало языка JSX>
    <div className="App">
      <div className="app-wrepper">
        
        <Header />
        <Navbar />
        <Profile />
        <footer className="footer">

        </footer> 
      </div>
        
    </div>
  );
}

export default App;
