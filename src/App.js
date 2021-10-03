import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Page from './components/Page';
import Auth from './components/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {

  return (
    <Router>
        <Route path="/" exact render={(props) => (
          <>
            <Auth></Auth>
          </>
        )}>
        </Route>
        <Route path='/page' component={Page}>
        </Route>
    </Router>
  );
}

export default App;
