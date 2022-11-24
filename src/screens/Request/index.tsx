import React, { useState } from 'react';
import { SelectRequest } from '../../components/SelectRequest';
import { InputSignIn } from '../../components/InputSignIn';
import { ButtonSignIn } from '../../components/ButtonSignIn';

import { 
  Container,
  Header,
  Icon,
  PizzaImage,
  ImageCentralizer,
  MiniHeader,
  TitleBlock,
  Title,
  SubText,
  Textarea,
  RequestBody,
  RequestFooter,
  TotalPrice,
  Footer,
  TextConfirm,
  TextConfirmBody,
} from './styles';

interface Props {
  name: 'circle' | 'disc';
}


export function Resquest({
  name,
} : Props){

  const [ActiveStart, setActiveStart] = useState("circle");
  const [ActiveMiddle, setActiveMiddle] = useState("circle");
  const [ActiveEnd, setActiveEnd] = useState("circle");

  function handleActivationStart(name: "circle" | "disc") {
    if (ActiveStart === "disc") {
      return setActiveStart("circle")
    }
    setActiveStart(name);
    setActiveMiddle("circle");
    setActiveEnd("circle");
  }

  function handleActivationMiddle(name: "circle" | "disc") {
    if (ActiveMiddle === "disc") {
      return setActiveMiddle("circle")
    }
    setActiveStart("circle");
    setActiveMiddle(name);
    setActiveEnd("circle");
  }

  function handleActivationEnd(name: "circle" | "disc") {
    if (ActiveEnd === "disc") {
      return setActiveEnd("circle")
    }
    setActiveStart("circle");
    setActiveMiddle("circle");
    setActiveEnd(name);
  }

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
      <TitleBlock>
        <Title>
          Margherita
        </Title>
      </TitleBlock>
      <Textarea>
        <SubText>Selecione um tamanho</SubText>
      </Textarea>
      <RequestBody>
        <SelectRequest
          isActive={ActiveStart === "circle"} 
          onPress={() => handleActivationStart("disc")} 
          text="Pequena" 
          name={ActiveStart}
        />
        <SelectRequest
          isActive={ActiveMiddle === "circle"} 
          onPress={() => handleActivationMiddle("disc")} 
          text="Média" 
          name={ActiveMiddle}
        />
        <SelectRequest
          isActive={ActiveEnd === "circle"} 
          onPress={() => handleActivationEnd("disc")} 
          text="Grande" 
          name={ActiveEnd}
        />
      </RequestBody>
      <TextConfirmBody>
        <TextConfirm>Número da mesa</TextConfirm>
        <TextConfirm>Quantidade</TextConfirm>
      </TextConfirmBody>
      <RequestFooter>
        <InputSignIn 
          type="request"  
          placeholder="1"  
        />
        <InputSignIn 
          type="request"  
          placeholder="1"  
        />
      </RequestFooter>
      <Footer>
        <TotalPrice>Total: R$ 10,00</TotalPrice>
        <ButtonSignIn type='request' title="Confirmar Pedido"/>
      </Footer>
    </Container>
  )
}