import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { MenuStoreConsumer } from '../../../providers/menuProvider';

interface IActive extends RouteComponentProps {}

const Active: FunctionComponent<IActive> = () => {
  return (
    <MenuStoreConsumer>
      {({ isOpen, toggleMenu }) => {
        return (
          <div>
            <h1 onClick={() => toggleMenu(!isOpen)}>Active</h1>
            <hr />
          </div>
        );
      }}
    </MenuStoreConsumer>
  );
};

export { Active };
