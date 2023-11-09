import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer';


import { BrowserRouter } from 'react-router-dom';


const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>

);




reportWebVitals();
