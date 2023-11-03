import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterApp } from "./router/RouterApp";
import 'bootstrap/dist/css/bootstrap.css'
import '../src/styles/general.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterApp />
    </Provider>
  </React.StrictMode>,
)
