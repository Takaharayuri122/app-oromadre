import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import colors from '../styles/colors';
import { ProfileHeader } from '../components/ProfileHeader';
import { Balance } from '../components/Balance';
import { LastTradesHistoric } from '../components/LastTradesHistoric';



export function Dashboard({ ...props }) {
  const navigation = useNavigation()

  function onNavigate() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />
      <Balance/>
      <LastTradesHistoric/>

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_primary
  }
})

