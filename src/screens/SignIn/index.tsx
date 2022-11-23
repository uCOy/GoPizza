import React from 'react';
import { InputSignIn } from '../../components/InputSignIn';
import { ButtonSignIn } from '../../components/ButtonSignIn';

import { 
  Container,
  Header,
  Image,
  Title,
  LoginInputs,
  Footer,
  Text,
} from './styles';

export function SignIn(){
  return(
    <Container>
      <Header>
        <Image source={require('../../../assets/brand.png')} />
      </Header>
      <LoginInputs>
        <Title>Login</Title>
        <InputSignIn 
          placeholder="E-mail"
        />
        <InputSignIn 
          placeholder="Senha"
        />
      </LoginInputs>
      <Footer>
        <Text>Esqueci minha senha</Text>
      </Footer>
      <ButtonSignIn title='Entrar'/>
    </Container>
  )
}