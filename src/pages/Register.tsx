import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, KeyboardAvoidingView, Platform, Image } from 'react-native';
import logo from '../assets/images/logo.png';
import { useNavigation } from '@react-navigation/core';
import { PrimaryButton } from '../components/Buttons';
import config from '../styles/config';
import { Input } from '../components/Input';


export function Register({ ...props }) {

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.image} resizeMode="contain" />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Input placeholder="Seu nome" id="name"/>
          <Input placeholder="E-mail" autoCompleteType="email" id="email"/>
          {/* <Input placeholder="Telefone" id="whatsapp"/>
          <Input placeholder="Senha" autoCompleteType="password" id="password" secureTextEntry={true} /> */}
          
        </View>

        <PrimaryButton title="Continuar" />
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})