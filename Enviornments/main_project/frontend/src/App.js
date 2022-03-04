import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Login from './Login';
import NavBar from './NavBar';
import Home from './Home';
import BrowseStream from './BrowseStream';
import Stream from './Stream';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      
      
      
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route exact path="/" element={ <Home/>} />
        <Route exact path="/Login" element={ <Login/>} />
        <Route exact path="/BrowseStream" element={ <BrowseStream/>} />
        <Route exact path="/Stream" element={ <Stream/>} />
        <Route exact path="/SignUp" element={ <SignUp/>} />
      </Routes>

    </div>
  );
}

export default App;
