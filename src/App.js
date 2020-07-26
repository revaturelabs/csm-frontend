import React, { useEffect } from 'react';
import Routing from './components/Routing/Routing';

function App() {
  useEffect(() => {
    document.title = "Caliber Staging Module";
  }, []);

  return (
    <div>
      <Routing></Routing>
    </div>
  );
}

export default App;
