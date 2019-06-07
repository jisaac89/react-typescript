import React, { FunctionComponent } from 'react';
import { IPageRouteView } from '../../contexts/pageContext';
import { useIndex } from '../../hooks/useIndex';
import { usePromiseAll } from '../../hooks/usePromiseAll';

const Home: FunctionComponent<IPageRouteView> = () => {
  const slide1 = useIndex(5);
  // const slide2 = useIndex(12);

  console.log(slide1);
  return (
    <header>
      <button onClick={() => slide1.goto(slide1.index + 1)}>asfafas</button>
      <h1 onClick={() => slide1.reset()}>Hello World {slide1.index}</h1>
    </header>
  );
};

export { Home };
