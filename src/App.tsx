import React from 'react';
import './App.css';
import MainContent from './components/MainContent'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div >
      <React.Fragment>
        <BrowserRouter>
          <MainContent/>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
