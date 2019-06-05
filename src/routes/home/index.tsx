import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useObject } from '../../hooks/useObject';
import { useSlideIndex } from '../../hooks/useSlideIndex';

interface IHome extends RouteComponentProps {
  //
}

const Home: FunctionComponent<IHome> = () => {
  const f = useSlideIndex(4);

  // console.log(f[0] = {s});
  return (
    <header>
      <h1>Hello World </h1>
    </header>
  );
};

export { Home };
