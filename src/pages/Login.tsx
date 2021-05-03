import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../assets/images/logo.png';
import { OutlineButton, PrimaryButton } from '../components/Buttons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import inputsStyles from '../styles/inputsStyles';
import { useNavigation } from '@react-navigation/core';
import { Input } from '../components/Input';

export function Login() {
  const navigation = useNavigation();
  function onNext() {
    navigation.navigate('Generic.Confirmation', {
      title: 'Para que possamos iniciar seu cadastro, é necessário que você confirme algumas informações',
      button: 'Continuar',
      route: 'Register'
    })
  }

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
              <View style={{ marginBottom: 20 }}>
                <Input placeholder="E-mail" autoCompleteType="email"/>
                <Input placeholder="Senha" autoCompleteType="password" secureTextEntry={true}/>
              </View>

              <PrimaryButton title="Entrar" />
              <OutlineButton onPress={onNext} title="Cadastrar-se" />

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