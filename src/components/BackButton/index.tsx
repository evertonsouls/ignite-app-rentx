import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container
} from './styles';

type Props = BorderlessButtonProps & {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons 
        size={24}
        name="chevron-left"
        color={ color ? color : theme.colors.text }
      />

    </Container>
  );
}