"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store/store';

import App from './components/App';
import Greeting from './components/Greeting';
import NotFound from './components/NotFound';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Greeting} />
                <Route path='*' component={NotFound} />
            </Route>
        </Router>
    </Provider>
, document.getElementById('root'));