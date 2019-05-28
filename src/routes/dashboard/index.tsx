import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

interface IDashboard extends RouteComponentProps {
  children: JSX.Element[];
}

const Dashboard: FunctionComponent<IDashboard> = ({ children }) => {
  return (
    <div>
      <h4>Dashboard</h4>
      {children}
    </div>
  );
};

export { Dashboard };
