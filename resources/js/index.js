require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import '../css/app.css';
import Popup from './admin/components/organisms/Popup';

if (document.getElementById('root')) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
