// import React from 'react';
// import ReactDOM from 'react-dom';

// import { BrowserRouter  as Router} from 'react-router-dom';
// import { Provider } from 'react-redux';

// import App from './App';
// import store from './app/store';

// import 'antd/dist/antd.css';

// ReactDOM.render(
//     <React.StrictMode>
//     <Router>
//          <Provider store={store}>
//             <App />
//          </Provider>
//     </Router>
//     </React.StrictMode>,
//     document.getElementById('root'),
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// 1. Import the Provider
import { Provider } from 'react-redux';

import App from './App';
// 2. Import your specific store file (check your file path!)
import store from './app/store'; 
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      {/* 3. Wrap the App in the Provider and pass the store */}
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);