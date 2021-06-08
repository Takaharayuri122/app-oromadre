import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import userImage from '../assets/images/user-register-image.png';


export function ProfileHeader({ ...props }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.greeting}> Olá</Text>
        <Text style={styles.information}> Yuri Carvalho</Text>
      </View>

      {/* <View>
        <Image source={userImage} style={styles.image} />
      </View> */}
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal:20,
    paddingTop: getStatusBarHeight() + 20,
    paddingBottom:50,
    backgroundColor:colors.primary
  },
  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  },
  greeting: {
    fontSize: 32,
    color: colors.white,
    fontFamily: fonts.text
  },
  information: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.white,
    lineHeight: 35
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: colors.primary,
    borderWidth: 2
  }
})