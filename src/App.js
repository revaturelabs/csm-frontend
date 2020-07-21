import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import SwotPage from './components/SwotPage/SwotPage';

function App() {
  return (
    <Router>
      <Route path="/editSwot" component={SwotPage}/>
      <Route path='/SWOTs' component={'/'}/>
    </Router>
  );
}

export default App;
