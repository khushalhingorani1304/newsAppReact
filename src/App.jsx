import './App.css'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

