import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

interface IHome extends RouteComponentProps {
  //
}

const Home: FunctionComponent<IHome> = () => {
  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <h1>Hello World</h1>
      </header>
    </div>
  );
};

export { Home };
