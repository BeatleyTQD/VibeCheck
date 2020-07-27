import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import VibeCheck from './Components/VibeCheck'
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <Router>
    <VibeCheck />
  </Router>,
  document.getElementById('root')
);


