import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home';
import Diet from './components/diet';
import Workout from './components/workouts';
import AboutUS from './components/aboutUs';
import Contact from './components/contact';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//react-router modified to react-router-dom syntax.. please understand that.. im using older version on react-router
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="diet" component={Diet} />
      <Route path="workout" component={Workout} />
      <Route path="contact" component={Contact} />
      <Route path="aboutUs" component={AboutUS} />
    </Route>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
