import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
  Container,
  Title,
} from './styles';

interface Props extends TouchableOpacityProps{
  title: string
  type: 'login' | 'request';
}

export function ButtonSignIn({type, title, ...rest}:Props) {
  return (
    <Container type={type} {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}