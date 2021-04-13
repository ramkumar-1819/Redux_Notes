import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';              //Importing createStore for creating a store
import {Provider} from 'react-redux';           //Importing Provider for providing the store ie(all states) for all the components
import rootReducer from './Reducers/RootReducer';//Contain reducer function

const store=createStore(rootReducer)             //Creating Store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>                
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
