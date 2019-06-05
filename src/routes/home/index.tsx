import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useObject } from '../../hooks/useObject';

interface IHome extends RouteComponentProps {
  //
}

interface IUser {
  name: string;
}

interface ICat {
  type: 'SHD';
}

interface IDog {
  age: number;
  color: string;
}

const user: IUser = {
  name: 'joe'
};

const cat: ICat = {
  type: 'SHD'
};

const dog: IDog = {
  age: 5,
  color: 'red'
};

const Home: FunctionComponent<IHome> = () => {
  const { object, onChange } = useObject(dog);
  console.log(object.age);

  return (
    <header>
      <h1>Hello World </h1>
      <button>increment {object.age}</button>
      <br />
      <input defaultValue={object.age.toString()} onChange={event => onChange('age', Number(event.target.value))} />
    </header>
  );
};

export { Home };
