import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(LinearGradient).attrs({
  colors: ["#B83341", "#E03F50"],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
`;

export const Title = styled.Text`
`;
