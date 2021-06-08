import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { AntDesign } from '@expo/vector-icons';


export function Balance({ ...props }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          <AntDesign name="barschart" size={20} color="black" /> Saldo disponível
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.balance}>R$ 14.389,50</Text>
      </View>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: -30,
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 10,
    shadowColor: '#0000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3
  },
  header: {

  },
  headerTitle: {
    fontSize: 15,
    fontFamily: fonts.text,
  },
  content: {},
  balance: {
    fontSize: 40,
    fontFamily: fonts.heading,
    color: colors.primary,
  }
})
