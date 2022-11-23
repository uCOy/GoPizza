import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(LinearGradient).attrs({
  colors: ["#B83341", "#E03F50"],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
  justify-content: center;
  padding: ${RFValue(45)}px;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: ${RFValue(32)}px;
`;

export const Image = styled.Image`

`;

export const LoginInputs = styled.View`
  padding-top: 10px;
  /* padding-left: 60px;
  padding-right: 60px; */
`;

export const Footer = styled.View`
  /* padding-left: 60px;
  padding-right: 60px; */
  margin-top: 20px;
  align-items: flex-end;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.COLORS.TITLE};
  font-family: ${({theme}) => theme.FONTS.TEXT};
`;
