import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useCollectionStore } from '../../hooks/useCollectionStore';

interface IHome extends RouteComponentProps {
  //
}

interface IUser {
  name: string;
}

const user: IUser = {
  name: 'joe'
};

const Home: FunctionComponent<IHome> = () => {
  const { item, onChange } = useCollectionStore([], user);
  return (
    <header>
      <h1>Hello World </h1>
      <button>increment {item.name}</button>
      <br />
      <input defaultValue={item.name} onChange={event => onChange('name', event.target.value)} />
    </header>
  );
};

export { Home };
