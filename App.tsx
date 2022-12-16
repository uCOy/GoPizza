import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';

import { Splash } from "./src/Screens/Splash";
import { SignIn } from "./src/Screens/SignIn";
import { Request } from "./src/screens/Request";

import { Routes } from './src/routes';

import {
  useFonts,
  DMSans_400Regular
} from '@expo-google-fonts/dm-sans';

import {
  DMSerifDisplay_400Regular,
} from '@expo-google-fonts/dm-serif-display';

import {
  Inter_500Medium
} from '@expo-google-fonts/inter';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_400Regular,
    Inter_500Medium
  })
  if(!fontsLoaded) return null;

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}