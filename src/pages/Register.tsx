import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Register({ ...props }) {
  const navigation = useNavigation()

  function onNavigate(screen: any) {
    navigation.navigate(screen);
  }

  return (
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})