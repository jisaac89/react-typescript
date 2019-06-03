import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

interface IHome extends RouteComponentProps {
  //
}

const Home: FunctionComponent<IHome> = () => {
  return (
    <header>
      <h1>Hello World</h1>
    </header>
  );
};

export { Home };
