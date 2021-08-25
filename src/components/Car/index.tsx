import React from 'react';

import GasolineSvg from '@assets/gasoline.svg';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

type CarData = {
  brand: string;
  name: string;
  thumbnail: string;
  rent: {
    period: string;
    price: string;
  }
}

type Props = {
  data: CarData;
}

export function Car({ data }: Props) {

  const { brand, name, thumbnail, rent} = data;

  return (
    <Container>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>

        <About>
          <Rent>
            <Period>{rent.period}</Period>
            <Price>{rent.price}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>
      
      <CarImage 
        source={{ uri: thumbnail }} 
        resizeMode="contain"
      />
    </Container>
  );
}