import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import Greeting from './components/Greeting';
import NotFound from './components/NotFound';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Greeting} />
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
, document.getElementById('root'));