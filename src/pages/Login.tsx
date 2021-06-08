import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../assets/images/logo.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { TextInput } from 'react-native-paper';
import { Button } from '../components/Buttons';

export function Login() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback>
          <View>
            <View style={styles.imageContainer}>
              <Image source={logo} style={styles.image} resizeMode="contain" />
              <Text style={styles.subtitle}>Acessar a Plataforma</Text>
            </View>

            <View style={styles.formContainer}>
              <View>
                <TextInput mode="outlined" label="E-mail" autoCompleteType="email" style={{ marginBottom: 20 }} />
                <TextInput mode="outlined" label="Senha" autoCompleteType="password" secureTextEntry={true} />
              </View>


              <Button title="Entrar" onPress={() => navigation.navigate('Dashboard')}/>
              <Button title="Cadastrar-se" mode="outline" onPress={() => navigation.navigate('Dashboard')}/>


              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>

          </View>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  subtitle: {
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 20
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    width: 300,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: fonts.heading,
    color: colors.primary,
    fontSize: 17
  }
})