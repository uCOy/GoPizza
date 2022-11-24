import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.ALERT_50}
`;

export const Header = styled.View`
  padding: 70px 20px;
  width: 100%;
  background-color: ${( {theme} ) => theme.COLORS.PRIMARY_900};
  height: ${RFPercentage(30)}px;
`;


export const MiniHeader = styled(TouchableOpacity)`
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

export const TitleBlock = styled.View`
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

export const Textarea = styled.View`
  padding-left: 20px;
  padding-top: 46px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RequestBody = styled.View`
  padding: 16px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RequestFooter = styled.View`
  padding: 16px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.View`
  align-items: flex-end;
  padding: 16px 20px;
`;

export const TotalPrice = styled.Text`
  font-size: ${RFValue(14)}px;
  align-items: flex-end;
  font-family: ${({theme}) => theme.FONTS.TEXT};
`;

export const TextConfirm = styled.Text`
  font-size: ${RFValue(14)}px;
  align-items: flex-end;
  font-family: ${({theme}) => theme.FONTS.TEXT};
`;

export const TextConfirmBody = styled.View`
  justify-content: space-between;
  padding-left: 20px;
  padding-right: ${RFValue(70)}px;
  flex-direction: row;
`;








