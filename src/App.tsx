import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import MainContent from './components/MainContent'
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
import { loading } from './Config/Action';

function App() {

  const props:any = false;
  const [loading, setLoading] = useState(true);


  Axios.interceptors.request.use(function (config) {

    // spinning start to show
    // UPDATE: Add this code to show global loading indicator
    document.body.classList.add('loading-indicator');
    setLoading(true);

    const token = window.localStorage.token;
    if (token) {
       config.headers.Authorization = `token ${token}`
    }
    return config
  }, function (error) {
    return Promise.reject(error);
  });
  
  Axios.interceptors.response.use(function (response) {
  
    // spinning hide
    // UPDATE: Add this code to hide global loading indicator
    document.body.classList.remove('loading-indicator');
    setLoading(false);
  
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  const Loader = (state = false, action:any) => {
    switch (action.type) {
        case "SHOW_LOADER":
            return action.data;
            break;
        case "HIDE_LOADER":
            return action.data;
            break;
        default:
            return state;
    }
  }

  return (
    <div className="App">
      { props.loader && Loader }
      <React.Fragment>
        <BrowserRouter>
          <MainContent/>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
