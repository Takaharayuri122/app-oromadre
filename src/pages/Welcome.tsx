import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { Text, Image } from 'react-native-ui-lib';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import logo from '../assets/images/logo.png';
import { OutlineButton, PrimaryButton } from '../components/Buttons';


export function Welcome() {

  const navigation = useNavigation()

  function onNavigate() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administração{'\n'} profissional {'\n'}de Cripto Ativos
      </Text>

      <Image source={logo} style={styles.image} resizeMode="contain" />


      {/* <Text style={styles.subtitle}>
        Administração de Criptoativos
      </Text> */}


      <PrimaryButton disabled={false} title="Começar" onPress={onNavigate}></PrimaryButton>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 25
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    paddingHorizontal: 40,
    marginTop: 38,
    fontFamily: fonts.heading,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 30,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image: {
    width: 300
  },
  button: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 20,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    fontSize: 25,
    color: colors.white,
    fontWeight: 'bold'
  }
})