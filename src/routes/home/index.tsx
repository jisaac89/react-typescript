import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useContextRouter } from '../../hooks/useContextRouter';

interface IHome extends RouteComponentProps {
  //
}

const Home: FunctionComponent<IHome> = () => {
  const { isSlideIndex, setSlideIndex } = useContextRouter();
  return (
    <header>
      <h1>Hello World {isSlideIndex.toString()}</h1>
      <button onClick={() => setSlideIndex(isSlideIndex + 1)}>increment</button>
    </header>
  );
};

export { Home };
