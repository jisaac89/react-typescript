import React, { FunctionComponent } from 'react';
import { IPageRouteView } from '../../contexts/pageContext';
import { useIndex } from '../../hooks/useIndex';
import { Header } from '../../components/atoms/header';
import { TouchableOpacity } from 'react-native';

const Home: FunctionComponent<IPageRouteView> = () => {
  const slide1 = useIndex(5);
  // const slide2 = useIndex(12);
  return (
    <Header>
      <TouchableOpacity />
      <h1 onClick={() => slide1.reset()}>Hello World {slide1.index}</h1>
    </Header>
  );
};

export { Home };
