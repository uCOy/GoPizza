import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput } from 'react-native';


// export const Container = styled(LinearGradient).attrs({
//   colors: ["#B83341", "#E03F50"],
//   start: { x: 0, y: 1 },
//   end: { x: 1, y: 0 },
// })`
//   margin-top: 23px;
//   justify-content: center;
//   border-radius: 12px;
//   width: 100%;
// `;

export const Container = styled(TextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.COLORS.SHAPE,
}))`
  width: 100%;
  font-family: ${ ( {theme} ) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px;
  background-color: ${( {theme} ) => theme.COLORS.PRIMARY_900};

  color: ${({theme}) => theme.COLORS.TITLE};
  padding: 20px 21px;
  border: 1px ${({theme}) => theme.COLORS.SHAPE};
  border-radius: 12px;
  margin-top: 23px;
  justify-content: center;
  border-radius: 12px;
`;

// export const InputText = styled.TextInput`
//   color: ${({theme}) => theme.COLORS.TITLE};
//   padding: 20px 21px;
// `;

// export const InputBox = styled.View`
//   border: 1px ${({theme}) => theme.COLORS.SHAPE};
//   border-radius: 12px;
// `;