import React from 'react';
import { TransactionTypeButton } from '../../components/SelectPizza';

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
      <TransactionTypeButton 
                title="Income"
                type="up"
                onPress={() => handleTransactionsTypeSelect("positive")}
                isActive={transactionType === "positive"}
      />

    </Container>
  )
}