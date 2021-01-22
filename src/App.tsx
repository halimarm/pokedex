import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App: FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;