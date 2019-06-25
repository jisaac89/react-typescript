import React from 'react';
import { View } from 'react-native';
import { FunctionComponent } from 'react';
import { p, dimensions, backgroundColor } from '../../../styles/globalStyles';
import { LinearGradient } from 'expo';

// add styles
const styleNav = (props: {}) => {
  return {
    ...backgroundColor('#ccc'),
    ...p('100px'),
    ...dimensions('100%', '200px', 1)
  };
};

// export comp type
const HeaderStyle: FunctionComponent = props => {
  return (
    <LinearGradient style={styleNav(props)} colors={['#fff', '#ccc', '#ddd']}>
      <View>{props.children}</View>
    </LinearGradient>
  );
};

export { HeaderStyle };
