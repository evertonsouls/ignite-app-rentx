import { Car } from 'components/Car';
import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg'

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CardList
} from './styles';

const car = {
  brand: 'AUDI',
  name: 'RS 5 Coupe',
  thumbnail: 'https://images0.autocasion.com/unsafe/640x360/product/07/1646/77bd1ce162d64a261b18b7e4fe21cf9b47fca679.jpeg',
  rent: {
    period: 'By day',
    price: '$ 60',
  }
}

export function Home() {
  return (
    <Container>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />

          <TotalCars>
            Total 12 cars
          </TotalCars>
        </HeaderContent>
      </Header>

      <CardList
        data={[1,2,3,4,5,6,7,8]}
        keyExtractor={item => String(item)}
        renderItem={ ({item}) => <Car data={car} />}
      />      
    </Container>
  );
}