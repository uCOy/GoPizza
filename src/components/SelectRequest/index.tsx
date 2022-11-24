import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
  Container,
  CheckBox,
  Text,
  Icon,
} from './styles';

interface Props extends TouchableOpacityProps{
  text: string;
  name: 'circle' | 'disc';
  isActive: boolean;
}

export function SelectRequest({
  text, 
  name, 
  isActive,
  ...rest
} : Props) {
  return (
    <Container 
      isActive={isActive} 
      name={name} 
      {...rest}
    >
      <CheckBox>
        <Icon 
          isActive={isActive} 
          name={name}
        />
      </CheckBox>
      <Text>
        {text}
      </Text>
    </Container>
  )
}