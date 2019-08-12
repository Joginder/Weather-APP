
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from 'react-service-worker';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
