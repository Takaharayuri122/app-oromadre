import React from 'react';
import { StyleSheet, SafeAreaView, View, KeyboardAvoidingView, Platform, Image } from 'react-native';
import logo from '../assets/images/logo.png';
import config from '../styles/config';
import { TextInput, Title } from 'react-native-paper';


export function Register({ ...props }) {

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.image} resizeMode="contain" />
        </View>
        <Title style={{ textAlign: 'center' }}>
          Preencha as informações
        </Title>
        <View style={styles.form}>
          <TextInput mode="outlined" label="Nome" />
          <TextInput mode="outlined" label="E-mail" autoCompleteType="email" />
          <TextInput mode="outlined" label="Senha" secureTextEntry={true} />
          <TextInput mode="outlined" label="Whatsapp" />
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: config.paddingHorizontal,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
  },
  form: {
    
  }
})