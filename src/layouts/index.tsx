import React, { FunctionComponent } from 'react';
import { gotoRoute } from '../utils/helpers';

interface ILayout {}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <div>
      <h1>Layout</h1>
      <hr />
      <nav>
        <a onClick={gotoRoute('/dashboard/active')}>Dashboard - Active</a>
        <br />
        <a onClick={gotoRoute('/dashboard/archived')}>Dashboard - Inactive</a>
      </nav>
      <hr />
      {children}
    </div>
  );
};

export { Layout };
