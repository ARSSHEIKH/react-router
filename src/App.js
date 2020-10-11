import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import Header from './header.js';
import Home from './home.js';
import About from './about.js';
import Contact from './contact';
import SignUpForm from './signup';
import LoginForm from './login';
import _404 from './404';
import './App.css';
import history from './history';
function App() {
  return (
    <div className="App">

      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="**" component={_404} />
        </Switch>
      </Router>

    </div>
    

  );
}

export default App;
