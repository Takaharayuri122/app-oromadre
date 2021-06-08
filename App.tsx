import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import theme from './src/styles/theme';


export default function App() {
  const [onFontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!onFontsLoaded) {
    return <AppLoading />
  }

  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>

  )
}

