import React, { FunctionComponent } from 'react';
import { usePageStore } from '../../../hooks/usePageStore';
import { IPageRouteView } from '../../../contexts/pageContext';

const Active: FunctionComponent<IPageRouteView> = () => {
  const { isSlideIndex } = usePageStore('home');
  return (
    <div>
      <h1>Active - {isSlideIndex.toString()}</h1>
      <hr />
    </div>
  );
};

export { Active };
