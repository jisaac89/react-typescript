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
        <a className={'App-link'} href={'https://reactjs.org'} target={'_blank'} rel={'noopener noreferrer'}>
          Learn React
        </a>
      </header>
    </div>
  );
};

export { Home };
