import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import MainContent from './components/MainContent'
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';

function App() {

  const props:any = false;
  const [loading, setLoading] = useState(true);


  Axios.interceptors.request.use(function (request) {

    document.body.classList.add('loading-indicator');
    setLoading(true);
    return request
  }, function (error) {
    setLoading(false);
    document.body.classList.remove('loading-indicator');
    return Promise.reject(error);
  });
  
  Axios.interceptors.response.use(function (response) {

    document.body.classList.remove('loading-indicator');
    setLoading(false);
  
    return response;
  }, function (error) {
    document.body.classList.remove('loading-indicator');
    setLoading(false);
    return Promise.reject(error);
  });

  const Loader = (state = false, action:any) => {
    switch (action.type) {
        case "SHOW_LOADER":
            return action.data;
        case "HIDE_LOADER":
            return action.data;
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
