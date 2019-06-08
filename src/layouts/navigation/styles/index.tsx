import React from 'react';
import { View } from 'react-native';
import { FunctionComponent } from 'react';
import { p, dimensions, backgroundColor } from '../../../styles/globalStyles';

// add styles
const styleNav = (props: {}) => {
  return {
    ...backgroundColor('red'),
    ...p('100px'),
    ...dimensions('100px', '100px', 1)
  };
};

// export comp type
const HeaderStyle: FunctionComponent = props => {
  return <View style={styleNav(props)}>{props.children}</View>;
};

export { HeaderStyle };
