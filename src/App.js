import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Page from './components/Page';
import Auth from './components/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {

  const users = ["John", "Tom","Jeff"]

  return (
    <Router>
        <Route path="/" exact render={(props) => (
          <>
            <Auth users = {users}></Auth>
          </>
        )}>
        </Route>
        <Route path='/page' component={Page}>
        </Route>
    </Router>
  );
}

export default App;
