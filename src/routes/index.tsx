import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Type from '../pages/Type';
import Compare from '../pages/Compare';

const Routes: FC = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon/:name" component={Detail} />
      <Route exact path="/type/:name" component={Type} />
      <Route exact path="/compare" component={Compare} />
    </>
  );
}

export default Routes;
