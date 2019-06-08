import React, { FunctionComponent } from 'react';
import { View } from 'react-native';

const Header: FunctionComponent = ({ children }) => {
  return <View accessibilityRole={'header'}>{children}</View>;
};

export { Header };
