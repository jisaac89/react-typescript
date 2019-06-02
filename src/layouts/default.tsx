import React, { FunctionComponent } from 'react';
import { gotoRoute } from '../utils/helpers';
import { config } from '../config';
import { Nav, NavHeader } from './styles';
import { Base } from './base';
import { useAppStore } from '../hooks/useAppStore';

interface ILayout {}

const DefaultLayout: FunctionComponent<ILayout> = ({ children }) => {
  const { isNightMode, toggleNightmode } = useAppStore();

  console.log(isNightMode);

  const as = () => {
    alert('s');
    toggleNightmode();
  };
  return (
    <Base>
      <Nav>
        <NavHeader>
          <h1 onClick={as}>Layout {isNightMode.toString()}</h1>
          <nav>
            <button onClick={gotoRoute(config.routes.dashboardActive)}>Dashboard - Active</button>
            <br />
            <button onClick={() => toggleNightmode()}>Dashboard - Inactive</button>
          </nav>
        </NavHeader>
      </Nav>
      {children}
    </Base>
  );
};

export { DefaultLayout };
