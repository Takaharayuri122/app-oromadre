import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform } from 'react-native';
import logo from '../assets/images/logo.png';

export function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback>
          <View style={styles.content}>
            <Image source={logo} style={styles.image} resizeMode="contain" />
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {},
  image: {
    width: 300
  }
})