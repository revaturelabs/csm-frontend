import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import SwotPage from './components/SwotPage/SwotPage';
import ViewSwots from './components/ViewSwots/ViewSwots';

function App() {
  return (
    <Router>
      <Route path="/editSwot" component={SwotPage}/>
      <Route path='/SWOTs' component={'/'}/>
      <Route path='/gridTest' component={ViewSwots}/>
    </Router>
  );
}

export default App;
