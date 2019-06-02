import React, { FunctionComponent, useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import { AppStoreContext } from '../../../providers/appProvider';

interface IActive extends RouteComponentProps {}

const Active: FunctionComponent<IActive> = () => {
  const appStore = useContext(AppStoreContext);
  return (
    <div>
      <h1 onClick={() => appStore.toggleNightmode(!appStore.isNightMode)}>Active</h1>
      <hr />
    </div>
  );
};

export { Active };
