import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import App from './App';

function App() {
  return (
    <Router>
      <Route path="/modalTest" component={SwotModal}/>
    </Router>
  );
}
