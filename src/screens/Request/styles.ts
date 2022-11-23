import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 70px 24px;
  width: 100%;
  background-color: ${( {theme} ) => theme.COLORS.PRIMARY_900};
  height: ${RFPercentage(30)}px;
`;


export const MiniHeader = styled.View`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${( {theme} ) => theme.COLORS.PRIMARY_900};
  border: 0.5px solid ${({theme}) => theme.COLORS.SHAPE};
  border-radius: 12px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: ${( {theme} ) => theme.COLORS.BACKGROUND};
`;

export const ImageCentralizer = styled.View`
align-items: center;
justify-content: center;
margin-left: ${RFValue(20)}px;
`;

export const PizzaImage = styled.Image`
width: 380px;
height: 380px;

position: absolute;
`;

export const Div = styled.View`
  margin-top: ${RFPercentage(19)}px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.SECONDARY_900};
  font-family: ${({theme}) => theme.FONTS.TITLE};
  font-size: ${RFValue(32)}px;
`;

export const SubText = styled.Text`
  color: ${({theme}) => theme.COLORS.SECONDARY_900};
  font-family: ${({theme}) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px;
`;



