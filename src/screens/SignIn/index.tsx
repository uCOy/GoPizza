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
          type="login"
          placeholder="E-mail"
        />
        <InputSignIn 
          type="login"
          placeholder="Senha"
        />
      </LoginInputs>
      <Footer>
        <Text>Esqueci minha senha</Text>
      </Footer>
      <ButtonSignIn type='login' title='Entrar'/>
    </Container>
  )
}