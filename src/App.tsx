import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;