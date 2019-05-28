import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

interface IDashboard extends RouteComponentProps {
  children: JSX.Element[];
}

const Dashboard: FunctionComponent<IDashboard> = ({ children }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      {children}
    </div>
  );
};

export { Dashboard };
