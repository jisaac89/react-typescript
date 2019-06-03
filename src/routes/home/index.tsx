import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { config } from '../../config';
import { useContextRouter } from '../../hooks/useContextRouter';

interface IHome extends RouteComponentProps {
  //
}

const Home: FunctionComponent<IHome> = () => {
  const { setSlideIndex } = useContextRouter(config.routes.home);
  return (
    <header>
      <h1>Hello World </h1>
      <button onClick={() => setSlideIndex(1)}>increment</button>
    </header>
  );
};

export { Home };
