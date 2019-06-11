import React, { FunctionComponent } from 'react';
import { gotoRoute } from '../../utils/helpers';
import { config } from '../../config';
import { HeaderStyle } from './styles';
import { useAppStore } from '../../hooks/useAppStore';
import { Button, Text } from 'react-native';

const Header: FunctionComponent = ({ children }) => {
  const { toggleNightmode, isNightMode } = useAppStore();
  return (
    <HeaderStyle>
      <Text>Header</Text>
    </HeaderStyle>
  );
};

export { Header };
