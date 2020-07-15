import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import SwotModal from './components/SwotModal/SwotModal';

function App() {
  return (
    <Router>
      <Route path="/modalTest" component={SwotModal}/>
    </Router>
  );
}

export default App;
