import React from 'react';

import { 
  Container,
  CheckBox,
  Text,
} from './styles';

interface Props{
  text: string;
}

export function SelectPizza({
  text,
} : Props) {
  return (
    <Container>
      <CheckBox>
        
      </CheckBox>
      <Text>
        {text}
      </Text>
    </Container>
  )
}