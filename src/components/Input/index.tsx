import React from 'react';
import { 
  Container,
} from './styles';

interface Props{
  type: 'login' | 'request';
}

export function Input({ type, ...rest} : Props) {
  return(
    <Container type={type} {...rest} />
  )
}