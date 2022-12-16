import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { 
  Container,
  Title,
} from './styles';

interface Props extends TouchableOpacityProps{
  title: string
  type: 'login' | 'request';
}

export function Button({type, title, ...rest}:Props) {

  const navigation = useNavigation();

  return (
    <Container type={type} {...rest} onPress={() => navigation.navigate("Request")}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}