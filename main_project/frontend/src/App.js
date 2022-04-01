import React from 'react';
import './css/App.css';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './NavBar';
import Home from './Home';
import BrowseStream from './BrowseStream';
import Stream from './Stream';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Profile_Post from './Profile_Post';
import EditProfile from './EditProfile';
import Settings from './Settings';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
        <Route exact path="/Profile" element={ <Profile/>}>
          <Route exact path="/Profile/Profile_Post" element={ <Profile_Post/>} />
        </Route>
        <Route exact path="/EditProfile" element={ <EditProfile/>} />
        <Route exact path="/Settings" element={ <Settings/>} />
        
      </Routes>

    </div>
  );
}

export default App;
