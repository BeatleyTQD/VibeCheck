import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import VibeCheck from './Components/VibeCheck'


ReactDOM.render(
  <Router>
    <VibeCheck />
  </Router>,
  document.getElementById('root')
);


