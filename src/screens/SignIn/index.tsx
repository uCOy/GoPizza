import React from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigation } from "@react-navigation/native";

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

  const navigation = useNavigation();

  return(
    <Container>
      <Header>
        <Image source={require('../../../assets/brand.png')} />
      </Header>
      <LoginInputs>
        <Title>Login</Title>
        <Input 
          type="login"
          placeholder="E-mail"
        />
        <Input 
          type="login"
          placeholder="Senha"
        />
      </LoginInputs>
      <Footer>
        <Text>Esqueci minha senha</Text>
      </Footer>
      <Button type='login' title='Entrar'/>
    </Container>
  )
}