import React from 'react';

import { 
  Container,
  Image,
  Title,
  LoginInputs,
  Input,
  Text,
} from './styles';

export function SignIn(){
  return(
    <Container>
      <Image source={require('../../assets/happy.png')} />
      <LoginInputs>
        <Title>Login</Title>
        <Input />
        <Input />
      </LoginInputs>
      <Text>Esqueci minha senha</Text>
      <Button />
    </Container>
  )
}