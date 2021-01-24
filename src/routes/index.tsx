import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Type from '../pages/Type';

const Routes: FC = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon/:name" component={Detail} />
      <Route exact path="/type/:name" component={Type} />
    </>
  );
}

export default Routes;
