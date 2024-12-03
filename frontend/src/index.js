import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import styles from "./index.css";
import {Provider} from "react-redux"
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from './reducers';



const store = configureStore({
  reducer:rootReducer,
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
