import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home';
import Diet from './components/diet';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//react-router modified to react-router-dom syntax.. please understand that.. im using older version on react-router
import { Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
   <Router history={hashHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='diet' component={Diet} />
      </Route>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
