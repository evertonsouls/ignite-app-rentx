import React from 'react';
import { StatusBar } from 'react-native';

import { BackButton } from 'components/BackButton';

import {
  Container,
  Header,
} from './styles';

export function CardDetails() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content" 
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton />
      </Header>
    </Container>
  );
}