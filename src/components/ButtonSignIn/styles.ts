import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity).attrs(({theme}) => ({
  placeholderTextColor: theme.COLORS.TITLE,
}))`
  margin-top: 20px;
  width: 100%;
  padding: 18px;
  border-radius: 12px;
  background-color: ${( {theme} ) => theme.COLORS.PRIMARY_800};
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${ ( {theme} ) => theme.FONTS.SUBTEXT};
  font-size: ${RFValue(14)}px;
  color: ${ ( {theme}) => theme.COLORS.TITLE};
`;