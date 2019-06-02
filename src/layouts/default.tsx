import React, { FunctionComponent } from 'react';
import { gotoRoute } from '../utils/helpers';
import { config } from '../config';
import { Nav, NavHeader } from './styles';
import { Base } from './base';

interface ILayout {}

const DefaultLayout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <Base>
      <Nav>
        <NavHeader>
          <h1>Layout</h1>
          <nav>
            <button onClick={gotoRoute(config.routes.dashboardActive)}>Dashboard - Active</button>
            <br />
            <button onClick={gotoRoute(config.routes.dashboardArchived)}>Dashboard - Inactive</button>
          </nav>
        </NavHeader>
      </Nav>
      {children}
    </Base>
  );
};

export { DefaultLayout };
