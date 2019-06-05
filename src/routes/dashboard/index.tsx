import React, { FunctionComponent } from 'react';
import { IPageRouteView } from '../../contexts/pageContext';

const Dashboard: FunctionComponent<IPageRouteView> = ({ children }) => (
  <div>
    <h4>Dashboard</h4>
    {children}
  </div>
);

export { Dashboard };
