import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useAppStore } from '../../../hooks/useAppStore';

interface IActive extends RouteComponentProps {}

const Active: FunctionComponent<IActive> = () => {
  const { isNightMode } = useAppStore();
  return (
    <div>
      <h1>Active - {isNightMode.toString()}</h1>
      <hr />
    </div>
  );
};

export { Active };
