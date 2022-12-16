import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from 'react-native';
import styled, {css} from "styled-components/native";
import { Feather } from '@expo/vector-icons';

interface PizzaProps{
  isActive: boolean;
  name: 'circle' | 'disc';
}

export const Container = styled(TouchableOpacity)<PizzaProps>`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  width: 114px;
  height: 102px;
  justify-content: center;
  border: 1px solid ${({theme}) => theme.COLORS.SHAPE};
  border-radius: 8px;
  padding: 16px;

  ${({ name, isActive }) => 
    !isActive && name === 'circle' && css`
      border: 1px solid ${({theme}) => theme.COLORS.SHAPE};
      background-color: ${({theme}) => theme.COLORS.TITLE};
    `
  }

  ${({ name, isActive }) => 
    !isActive && name === 'disc' && css`
      border: 1px solid ${({theme}) => theme.COLORS.SUCCESS_900};
      background-color: ${({theme}) => theme.COLORS.SUCCESS_50};
    `
  }
`;

export const CheckBox = styled.View`
  padding-bottom: 16px;
`;

export const Icon = styled(Feather)<PizzaProps>`
  font-size: ${RFValue(20)}px;

  ${({ name, isActive }) => 
    !isActive && name === 'circle' && css`
      color: ${( {theme} ) => theme.COLORS.SECONDARY_500};
    `
  }

  ${({ name, isActive }) => 
    !isActive && name === 'disc' && css`
      color: ${( {theme} ) => theme.COLORS.SUCCESS_900};
    `
  }
`;


export const Text = styled.Text`
  color: ${({theme}) => theme.COLORS.SECONDARY_900}; 
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.FONTS.TITLE};
  /* padding: 16px 27px 16px 16px; */
`;
