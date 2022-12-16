import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from "../screens/SignIn";
import { Request } from "../screens/Request";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
      <Screen name="Request" component={Request} options={{headerShown: false}}/>
    </Navigator>
  );
}