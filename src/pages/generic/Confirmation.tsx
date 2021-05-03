import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import config from '../../styles/config';
import logo from '../../assets/images/logo.png';
import userImage from '../../assets/images/user-register-image.png';
import { PrimaryButton } from '../../components/Buttons';


export function GenericConfirmation({ ...props }) {
  const navigation = useNavigation();
  const routes = useRoute();
  const entity = routes.params as Params;
  interface Params {
    title: string,
    button: string,
    route: string,
    image?: string
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>
          {entity.title}
        </Text>
        <PrimaryButton title={entity.button} onPress={() => navigation.navigate(entity.route)}></PrimaryButton>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: config.paddingHorizontal
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    width: '100%',
    padding: 25
  },
  logo: {
    width: 300,
  },
  image: {
    width: 300
  },
  title: {
    fontSize: config.titleSize,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
  },
})