import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appReducers from './reducer/index';
import { Provider } from 'react-redux'

const store = createStore(
    appReducers
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, document.getElementById('root'));
