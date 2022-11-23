import React from 'react';
import { SelectPizza } from '../../components/SelectPizza';

import { 
  Container,
  Header,
  Icon,
  PizzaImage,
  ImageCentralizer,
  MiniHeader,
  Div,
  Title,
  SubText,
} from './styles';


export function Resquest(){
  return(
    <Container>
      <Header>
        <MiniHeader>
          <Icon name="chevron-left" />
        </MiniHeader>
      </Header>
      <ImageCentralizer>
        <PizzaImage source={require('../../../assets/margherita.png')} />
      </ImageCentralizer>
      <Div>
        <Title>
          Margherita
        </Title>
        <SubText>
          Selecione um tamanho
        </SubText>
      </Div>
      <SelectPizza text="Demonio"/>
    </Container>
  )
}