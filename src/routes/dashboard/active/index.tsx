import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { usePageStore } from '../../../hooks/usePageStore';

interface IActive extends RouteComponentProps {}

const Active: FunctionComponent<IActive> = () => {
  const { isSlideIndex } = usePageStore('home');
  return (
    <div>
      <h1>Active - {isSlideIndex.toString()}</h1>
      <hr />
    </div>
  );
};

export { Active };
