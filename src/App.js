import React from 'react';
import "./App.css";

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
//Import Screens
import Home from './pages/Home'
import Room from './pages/Room'
import SignleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom';
//Import components
import Navbar from './component/Navbar';


// created by selvakumar on 10/10/2019

function App() {
  return (
    <> 
    <Navbar />
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/rooms/" component={Room} />
     <Route exact path="/rooms/:slug" component={SingleRoom} />
     <Route component={Error} />

    </Switch>
     
    </>
  );
}

export default App;
