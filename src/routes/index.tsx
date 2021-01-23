import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const Routes: FC = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/:name" component={Detail} />
    </>
  );
}

export default Routes;
