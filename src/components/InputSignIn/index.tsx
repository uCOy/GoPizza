import React from 'react';
import { 
  Container,
} from './styles';

interface Props{
  
}

export function InputSignIn({...rest} : Props) {
  return(
    <Container {...rest} />
  )
}