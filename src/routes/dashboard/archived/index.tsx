import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

interface IArchived extends RouteComponentProps {}

const Archived: FunctionComponent<IArchived> = () => {
  return (
    <div>
      <h1>Archived</h1>
      <hr />
    </div>
  );
};

export { Archived };
