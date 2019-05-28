import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

interface IActive extends RouteComponentProps {}

const Active: FunctionComponent<IActive> = () => {
  return (
    <div>
      <h1>Active</h1>
      <hr />
    </div>
  );
};

export { Active };
