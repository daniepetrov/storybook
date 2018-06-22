import React, { Component } from 'react';
import logo from './logo.svg';
import s from './App.css';

class App extends Component {
  render() {
    return (
      <div className={s.App}>
        <header className={s.Appheader}>
          <img src={logo} className={s.Applogo} alt="logo" />
          <h1 className={s.Apptitle}>Welcome to React</h1>
        </header>
        <p className={s.Appintro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
