import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'mobx-react';
import { Provider as ReduxProvider } from 'react-redux';
import store from "./store";
import { reduxStore } from './redux-store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={ store }>
      <ReduxProvider store={ reduxStore }>
        <App />
      </ReduxProvider>
    </Provider>
  </BrowserRouter>
);