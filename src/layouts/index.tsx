import React, { FunctionComponent } from 'react';
import { gotoRoute } from '../utils/helpers';
import { config } from '../config';

interface ILayout {}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <React.StrictMode>
      <div>
        <h1>Layout</h1>
        <hr />
        <nav>
          <a onClick={gotoRoute(config.routes.dashboardActive)}>Dashboard - Active</a>
          <br />
          <a onClick={gotoRoute(config.routes.dashboardArchived)}>Dashboard - Inactive</a>
        </nav>
        <hr />
        {children}
      </div>
    </React.StrictMode>
  );
};

export { Layout };
