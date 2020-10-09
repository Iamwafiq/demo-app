import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css'
const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
    <App/>
	</Provider>,

document.getElementById('root'));